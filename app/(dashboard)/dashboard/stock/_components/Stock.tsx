'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Stock() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-4 text-body-emphasis">
Stock Dashboard
    </h2>

    <div className="swiper-theme-container w-100">
      <div className="swiper theme-slider" data-swiper={"{\"spaceBetween\":24,\"loop\":true,\"centeredSlides\":true,\"slidesPerView\":\"auto\",\"autoplay\":{\"delay\":0},\"freeMode\":true,\"speed\":6500,\"grabCursor\":true}"}>
        <div className="swiper-wrapper swiper-continuous-autoplay">
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
{"S&P 500"}
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-success">
 +0.97%
                        <span className="ms-1 fas fa-chevron-up">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$5,751.13
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-chart" data-echarts={"{\"data\":[70,50,85,45,200,193,196,210,198,210,103,120,84,95,130,123,214,245,287,348,356,390]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
Dow 30
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-danger">
 -0.5%
                        <span className="ms-1 fas fa-chevron-down">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$42,080.37
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-mixed-chart" data-echarts={"{\"data\":[-100,190,200,-200,-190,300,-110,100,-100,250,200,190,-80,50,40,200,-200,200,150,160,300,-100]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
Nasdaq
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-success">
 +1.45%
                        <span className="ms-1 fas fa-chevron-up">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$42,080.37
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-chart" data-echarts={"{\"data\":[400,450,500,490,600,550,400,350,200,250,180,350,320,330,320,450,480,350,345,200,320,400]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
FTSE 100
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-danger">
 -1.36%
                        <span className="ms-1 fas fa-chevron-down">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$8,190.61
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-inverted-chart" data-echarts={"{\"data\":[-500,-300,-250,-280,-150,-250,-300,-180,-145,-250,-46,-250,-90,-80,-85,-150,-250,-180,-175,-50]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
Crude Oil
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-danger">
 -0.64%
                        <span className="ms-1 fas fa-chevron-down">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$6,705.13
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-inverted-chart" data-echarts={"{\"data\":[-600,-500,-450,-480,-450,-350,-400,-680,-145,-650,-546,-450,-590,-380,-585,-250,-550,-680,-375,-250]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
Russell
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-success">
 +9.09%
                        <span className="ms-1 fas fa-chevron-up">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$2,275.88
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-chart" data-echarts={"{\"data\":[500,450,600,690,700,550,400,350,200,250,180,350,320,330,320,450,480,450,445,300,420,600]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
VIX
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-danger">
 -9.99%
                        <span className="ms-1 fas fa-chevron-down">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$24.28
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-inverted-chart" data-echarts={"{\"data\":[-600,-500,-450,-480,-450,-350,-400,-680,-145,-650,-546,-450,-590,-380,-585,-250,-550,-680,-375,-250]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide stock-overview-card">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-between-center gap-2 gap-lg-3">
                  <div className="flex-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0 text-body-tertiary text-nowrap">
DAX
                      </h5>
                      <div className="badge badge-phoenix fs-10 d-flex align-items-center badge-phoenix-success">
 +1.56%
                        <span className="ms-1 fas fa-chevron-up">                        </span>
                      </div>
                    </div>
                    <h4 className="mb-0">
$22,676.41
                    </h4>
                  </div>
                  <div className="overview-echart echart-stock-overview-chart" data-echarts={"{\"data\":[500,450,600,690,700,550,400,350,200,250,180,350,320,330,320,450,480,450,445,300,420,600]}"}>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 py-5 border-top mt-4">
      <h3 className="mb-4 text-body-emphasis">
Top Stock
      </h3>
      <div className="row gx-5">
        <div className="col-12 col-xl-5 col-xxl-4 mb-4 mb-xl-0 top-stock-card-container">
          <div className="search-box w-100 mb-3 pe-xl-3">
            <form className="position-relative">
              <input className="form-control search-input search" type="search" placeholder="Enter Company or Symbol name" aria-label="Search" />
              <span className="fas fa-search search-box-icon">              </span>
            </form>
          </div>
          <div className="scrollbar top-stock-tab w-100 pe-xl-3">
            <ul className="nav gap-3 gap-xl-2 flex-nowrap flex-xl-column" id="companyTab" role="tablist">
              <li className="nav-item">
                <a href="#apple-tab" className="nav-link card company-card active" id="tab-apple"  data-bs-toggle={"tab"} aria-current="page" aria-controls="apple-tab" aria-selected="true" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/apple.png" alt="brand" className="d-dark-none img-fluid" />
                      <PhoenixImage src="/assets/img/brand3/light_apple_logo.svg" alt="brand" className="d-light-none img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
Apple Inc
                          </h6>
                          <h4 className="mb-0">
 $225.77
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
AAPL
                          </h6>
                          <h6 className="fw-semibold lh-sm text-success">
 +4.08(1.84%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#tesla-tab" className="nav-link card company-card" id="tab-tesla"  data-bs-toggle={"tab"} aria-current="page" aria-controls="tesla-tab" aria-selected="false" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/tesla.png" alt="brand" className="d-dark-none img-fluid" />
                      <PhoenixImage src="/assets/img/brand3/dark_tesla.png" alt="brand" className="d-light-none img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
Tesla Inc
                          </h6>
                          <h4 className="mb-0">
 $240.83
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
TSLA
                          </h6>
                          <h6 className="fw-semibold lh-sm text-danger">
 -1.47(0.6%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#nvidia-tab" className="nav-link card company-card" id="tab-nvidia"  data-bs-toggle={"tab"} aria-current="page" aria-controls="nvidia-tab" aria-selected="false" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/nvidia.png" alt="brand" className="img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
NVIDIA corp
                          </h6>
                          <h4 className="mb-0">
 $132.89
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
NVDA
                          </h6>
                          <h6 className="fw-semibold lh-sm text-success">
 +5.17(4.05%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#alphabet-tab" className="nav-link card company-card" id="tab-alphabet"  data-bs-toggle={"tab"} aria-current="page" aria-controls="alphabet-tab" aria-selected="false" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/google.png" alt="brand" className="img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
Alphabet Inc
                          </h6>
                          <h4 className="mb-0">
 $165.7
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
GOOG
                          </h6>
                          <h6 className="fw-semibold lh-sm text-success">
 +1.31(0.8%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#amd-tab" className="nav-link card company-card" id="tab-amd"  data-bs-toggle={"tab"} aria-current="page" aria-controls="amd-tab" aria-selected="false" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/amd.png" alt="brand" className="d-dark-none img-fluid" />
                      <PhoenixImage src="/assets/img/brand3/dark_amd.png" alt="brand" className="d-light-none img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
AMD Inc.
                          </h6>
                          <h4 className="mb-0">
 $172.8
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
AMD
                          </h6>
                          <h6 className="fw-semibold lh-sm text-success">
 +1.83(1.07%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#microsoft-tab" className="nav-link card company-card" id="tab-microsoft"  data-bs-toggle={"tab"} aria-current="page" aria-controls="microsoft-tab" aria-selected="false" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/microsoft.png" alt="brand" className="img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
Microsoft corp
                          </h6>
                          <h4 className="mb-0">
 $414.71
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
MSFT
                          </h6>
                          <h6 className="fw-semibold lh-sm text-success">
 +5.17(1.26%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="#intel-tab" className="nav-link card company-card" id="tab-intel"  data-bs-toggle={"tab"} aria-current="page" aria-controls="intel-tab" aria-selected="false" role="tab">
                  <div className="card-body p-0">
                    <div className="d-flex gap-3 gap-xl-2 gap-xxl-3 align-items-center">
                      <PhoenixImage src="/assets/img/brand3/intel.png" alt="brand" className="d-dark-none img-fluid" />
                      <PhoenixImage src="/assets/img/brand3/dark_intel.png" alt="brand" className="d-light-none img-fluid" />
                      <div className="d-flex gap-3 flex-between-center flex-1">
                        <div>
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-nowrap">
Intel
                          </h6>
                          <h4 className="mb-0">
 $23.32
                          </h4>
                        </div>
                        <div className="text-end">
                          <h6 className="fw-semibold text-body-secondary mb-2 lh-sm text-uppercase">
INTEL
                          </h6>
                          <h6 className="fw-semibold lh-sm text-success">
 +0.94(4.2%)
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-xl-7 col-xxl-8 ps-xl-0 flex-1">
          <div className="tab-content" id="topStocksTabContent">
            <div className="tab-pane fade active show" id="apple-tab" role="tabpanel" aria-labelledby="tab-apple">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
AAPL
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $225.77
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-success">
 1.84%
                      <span className="ms-1 fas fa-chevron-up">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-0" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-0" className="nav-link pt-0 active pe-2" id="chart-tab-0"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-0" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-0" className="nav-link pt-0 px-3" id="option-chain-tab-0"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-0" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-0"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-0">
                <div className="tab-pane fade show active" id="tab-chart-0" role="tabpanel" aria-labelledby="chart-tab-0">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-apple-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-0" aria-labelledby="option-chain-tab-0">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tesla-tab" role="tabpanel" aria-labelledby="tab-tesla">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
TSLA
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $240.83
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-danger">
 0.6%
                      <span className="ms-1 fas fa-chevron-down">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-1" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-1" className="nav-link pt-0 active pe-2" id="chart-tab-1"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-1" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-1" className="nav-link pt-0 px-3" id="option-chain-tab-1"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-1" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-1"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-1">
                <div className="tab-pane fade show active" id="tab-chart-1" role="tabpanel" aria-labelledby="chart-tab-1">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-tesla-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-1" aria-labelledby="option-chain-tab-1">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="nvidia-tab" role="tabpanel" aria-labelledby="tab-nvidia">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
NVDA
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $132.89
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-success">
 4.05%
                      <span className="ms-1 fas fa-chevron-up">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-2" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-2" className="nav-link pt-0 active pe-2" id="chart-tab-2"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-2" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-2" className="nav-link pt-0 px-3" id="option-chain-tab-2"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-2" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-2"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-2">
                <div className="tab-pane fade show active" id="tab-chart-2" role="tabpanel" aria-labelledby="chart-tab-2">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-nvidia-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-2" aria-labelledby="option-chain-tab-2">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="alphabet-tab" role="tabpanel" aria-labelledby="tab-alphabet">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
GOOG
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $165.7
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-success">
 0.8%
                      <span className="ms-1 fas fa-chevron-up">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-3" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-3" className="nav-link pt-0 active pe-2" id="chart-tab-3"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-3" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-3" className="nav-link pt-0 px-3" id="option-chain-tab-3"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-3" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-3"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-3">
                <div className="tab-pane fade show active" id="tab-chart-3" role="tabpanel" aria-labelledby="chart-tab-3">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-alphabet-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-3" aria-labelledby="option-chain-tab-3">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="amd-tab" role="tabpanel" aria-labelledby="tab-amd">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
AMD
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $172.8
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-success">
 1.07%
                      <span className="ms-1 fas fa-chevron-up">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-4" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-4" className="nav-link pt-0 active pe-2" id="chart-tab-4"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-4" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-4" className="nav-link pt-0 px-3" id="option-chain-tab-4"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-4" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-4"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-4">
                <div className="tab-pane fade show active" id="tab-chart-4" role="tabpanel" aria-labelledby="chart-tab-4">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-amd-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-4" aria-labelledby="option-chain-tab-4">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="microsoft-tab" role="tabpanel" aria-labelledby="tab-microsoft">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
MSFT
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $414.71
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-success">
 1.26%
                      <span className="ms-1 fas fa-chevron-up">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-5" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-5" className="nav-link pt-0 active pe-2" id="chart-tab-5"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-5" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-5" className="nav-link pt-0 px-3" id="option-chain-tab-5"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-5" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-5"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-5">
                <div className="tab-pane fade show active" id="tab-chart-5" role="tabpanel" aria-labelledby="chart-tab-5">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-microsoft-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-5" aria-labelledby="option-chain-tab-5">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="intel-tab" role="tabpanel" aria-labelledby="tab-intel">
              <div className="row justify-content-between g-3 mb-5">
                <div className="col-auto">
                  <h4 className="text-body-tertiary mb-2 lh-sm">
INTEL
                  </h4>
                  <h3 className="text-body-highlight d-flex gap-2 flex-between-center lh-sm mb-0">
 $23.32
                    <span className="badge badge-phoenix fs-10 d-flex flex-between-center badge-phoenix-success">
 4.2%
                      <span className="ms-1 fas fa-chevron-up">                      </span>
                    </span>
                  </h3>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center gap-2">
                    <PhoenixLink href="/apps/stock/stock-details" className="btn btn-sm btn-phoenix-primary">
View full stock details                      <span className="ms-2 fas fa-up-right-from-square">                      </span>
                    </PhoenixLink>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-clock">                      </span>
                    </button>
                    <button className="btn btn-sm btn-phoenix-secondary">
                      <span className="fas fa-eye">                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="nav nav-underline optionChainTableHeader mb-4 gap-0" id="companyStatesTab-6" role="tablist">
                <li className="nav-item">
                  <a href="#tab-chart-6" className="nav-link pt-0 active pe-2" id="chart-tab-6"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-chart-6" aria-selected="true">
Chart
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#tab-optionChain-6" className="nav-link pt-0 px-3" id="option-chain-tab-6"  data-bs-toggle={"tab"} role="tab" aria-controls="tab-optionChain-6" aria-selected="false">
Option Chain
                  </a>
                </li>
                <li className="nav-item flex-1">
                  <a href="#!" className="nav-link disabled h-100" id="empty-div-6"  data-bs-toggle={"tab"} role="tab" aria-selected="false">

                  </a>
                </li>
              </ul>
              <div className="tab-content" id="companyStatesTabContent-6">
                <div className="tab-pane fade show active" id="tab-chart-6" role="tabpanel" aria-labelledby="chart-tab-6">
                  <div className="scrollbar mb-4">
                    <div className="btn-group stock-btn-group btn-group-sm text-nowrap" role="group" aria-label="top-stock-chart-filter">
                      <button className="btn btn-phoenix-secondary fw-bolder active">
1 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ay
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 D
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ays
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
3 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
6 M
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
onths
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
1 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ear
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
5 Y
                        <span className="d-none d-sm-inline d-xl-none d-xxl-inline">
ears
                        </span>
                      </button>
                      <button className="btn btn-phoenix-secondary fw-bolder">
Max
                      </button>
                    </div>
                  </div>
                  <div className="top-stock-chart">
                    <canvas id="top-stock-intel-chart" style={{"width":"100%","minHeight":"36.5rem","maxHeight":"36.5rem"} as CSSProperties}>                    </canvas>
                  </div>
                </div>
                <div className="tab-pane fade" role="tabpanel" id="tab-optionChain-6" aria-labelledby="option-chain-tab-6">
                  <div className="swiper-theme-container optionChainTableHeader nav nav-underline">
                    <div className="swiper theme-slider" data-swiper={"{\"loop\":true,\"slidesPerView\":5,\"breakpoints\":{\"0\":{\"slidesPerView\":1.5},\"560\":{\"slidesPerView\":2.5},\"768\":{\"slidesPerView\":3.5},\"1200\":{\"slidesPerView\":3},\"1560\":{\"slidesPerView\":4},\"1800\":{\"slidesPerView\":5}},\"grabCursor\":true,\"navigation\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100 active" href="#!">
                            <span className="fs-8">
May 17, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(4 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
May 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(11 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 01, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(18 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 08, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(25 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 15, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(32 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 24, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(41 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jun 31, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(48 Days)
                            </span>
                          </button>
                        </div>
                        <div className="swiper-slide nav-item">
                          <button className="nav-link text-center text-nowrap w-100" href="#!">
                            <span className="fs-8">
Jul 07, 24 
                            </span>
                            <span className="text-body-tertiary fs-9 fw-semibold">
(56 Days)
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="swiper-nav">
                        <div className="swiper-button-next">
                          <span className="fas fa-chevron-right nav-icon">                          </span>
                        </div>
                        <div className="swiper-button-prev">
                          <span className="fas fa-chevron-left nav-icon">                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive scrollbar">
                    <table className="table text-center mb-0">
                      <thead>
                        <tr>
                          <th colSpan={5}>
Calls
                          </th>
                          <th className="bg-body-highlight border-x border-translucent">
Strike Price 
                          </th>
                          <th colSpan={5}>
Puts
                          </th>
                        </tr>
                        <tr className="fs-10 text-uppercase"><th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                          <th className="bg-body-highlight border-x border-translucent" style={{"minWidth":"7.5rem"} as CSSProperties}>
IV 19.4%
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
BID
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
ASK 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
last 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
delta 
                          </th>
                          <th style={{"minWidth":"6.688rem"} as CSSProperties}>
gamma
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
12.50
                          </td>
                          <td className="text-info-dark lh-sm">
12.75
                          </td>
                          <td className="lh-sm">
12.30
                          </td>
                          <td className="lh-sm">
0.977
                          </td>
                          <td className="lh-sm">
0.008
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
174
                          </td>
                          <td className="text-info-dark lh-sm">
0.06 
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
0.06 
                          </td>
                          <td className="lh-sm">
-0.023 
                          </td>
                          <td className="lh-sm">
0.008 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
10.15
                          </td>
                          <td className="text-info-dark lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
10.25
                          </td>
                          <td className="lh-sm">
0.964
                          </td>
                          <td className="lh-sm">
0.014
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
5
                          </td>
                          <td className="text-info-dark lh-sm">
0.07 
                          </td>
                          <td className="text-info-dark lh-sm">
0.08 
                          </td>
                          <td className="lh-sm">
0.07 
                          </td>
                          <td className="lh-sm">
-0.035 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
7.65
                          </td>
                          <td className="text-info-dark lh-sm">
8.05
                          </td>
                          <td className="lh-sm">
7.80
                          </td>
                          <td className="lh-sm">
0.937
                          </td>
                          <td className="lh-sm">
0.024
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
172.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.12 
                          </td>
                          <td className="text-info-dark lh-sm">
0.13 
                          </td>
                          <td className="lh-sm">
0.12 
                          </td>
                          <td className="lh-sm">
-0.064 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
5.30
                          </td>
                          <td className="text-info-dark lh-sm">
5.45
                          </td>
                          <td className="lh-sm">
5.35
                          </td>
                          <td className="lh-sm">
0.871
                          </td>
                          <td className="lh-sm">
0.034
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
175
                          </td>
                          <td className="text-info-dark lh-sm">
0.26 
                          </td>
                          <td className="text-info-dark lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
0.27 
                          </td>
                          <td className="lh-sm">
-0.130 
                          </td>
                          <td className="lh-sm">
0.046 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
3.25
                          </td>
                          <td className="text-info-dark lh-sm">
3.30
                          </td>
                          <td className="lh-sm">
3.28
                          </td>
                          <td className="lh-sm">
0.732
                          </td>
                          <td className="lh-sm">
0.044
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
177.5
                          </td>
                          <td className="text-info-dark lh-sm">
0.66 
                          </td>
                          <td className="text-info-dark lh-sm">
0.67 
                          </td>
                          <td className="lh-sm">
0.66 
                          </td>
                          <td className="lh-sm">
-0.269 
                          </td>
                          <td className="lh-sm">
0.078 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
180
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.65
                          </td>
                          <td className="text-info-dark lh-sm">
0.66
                          </td>
                          <td className="lh-sm">
0.65
                          </td>
                          <td className="lh-sm">
0.487
                          </td>
                          <td className="lh-sm">
0.063
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
182.5
                          </td>
                          <td className="text-info-dark lh-sm">
3.10 
                          </td>
                          <td className="text-info-dark lh-sm">
3.00 
                          </td>
                          <td className="lh-sm">
3.10 
                          </td>
                          <td className="lh-sm">
-0.431 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.22
                          </td>
                          <td className="text-info-dark lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.23
                          </td>
                          <td className="lh-sm">
0.234
                          </td>
                          <td className="lh-sm">
0.072
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
185
                          </td>
                          <td className="text-info-dark lh-sm">
5.05 
                          </td>
                          <td className="text-info-dark lh-sm">
5.25 
                          </td>
                          <td className="lh-sm">
5.15 
                          </td>
                          <td className="lh-sm">
-0.987 
                          </td>
                          <td className="lh-sm">
0.023 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.08
                          </td>
                          <td className="text-info-dark lh-sm">
0.09
                          </td>
                          <td className="lh-sm">
0.08
                          </td>
                          <td className="lh-sm">
0.123
                          </td>
                          <td className="lh-sm">
0.084
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
187.5
                          </td>
                          <td className="text-info-dark lh-sm">
7.45 
                          </td>
                          <td className="text-info-dark lh-sm">
7.70 
                          </td>
                          <td className="lh-sm">
7.90 
                          </td>
                          <td className="lh-sm">
-0.897 
                          </td>
                          <td className="lh-sm">
0.087 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
0.04
                          </td>
                          <td className="text-info-dark lh-sm">
0.05
                          </td>
                          <td className="lh-sm">
0.04
                          </td>
                          <td className="lh-sm">
0.012
                          </td>
                          <td className="lh-sm">
0.088
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
190
                          </td>
                          <td className="text-info-dark lh-sm">
9.90 
                          </td>
                          <td className="text-info-dark lh-sm">
10.15 
                          </td>
                          <td className="lh-sm">
10.05 
                          </td>
                          <td className="lh-sm">
-0.988 
                          </td>
                          <td className="lh-sm">
0.014 
                          </td>
                        </tr>
                        <tr className="fs-9 fw-semibold"><td className="text-info-dark lh-sm">
1.65
                          </td>
                          <td className="text-info-dark lh-sm">
1.66
                          </td>
                          <td className="lh-sm">
1.64
                          </td>
                          <td className="lh-sm">
0.510
                          </td>
                          <td className="lh-sm">
0.054
                          </td>
                          <td className="bg-body-highlight border-x border-translucent text-body-tertiary fw-bold lh-sm">
192
                          </td>
                          <td className="text-info-dark lh-sm">
1.53 
                          </td>
                          <td className="text-info-dark lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
1.54 
                          </td>
                          <td className="lh-sm">
-0.498 
                          </td>
                          <td className="lh-sm">
0.100 
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis py-5 border-y mb-7 mb-md-8 mb-lg-9">
      <div className="row gy-5 gx-xl-7 gx-xxl-10">
        <div className="col-xl-6">
          <h2 className="mb-4">
Top Gainers
          </h2>
          <div id="topGainersTable" data-list={"{\"valueNames\":[\"symbol\",\"name\",\"price\",\"change\"],\"page\":7,\"pagination\":true}"}>
            <div className="table-responsive scrollbar">
              <table className="table table-striped fs-9 mb-0">
                <thead>
                  <tr className="bg-body-highlight border-top border-translucent"><th className="sort white-space-nowrap align-middle ps-4 text-uppercase" scope="col" data-sort={"symbol"} style={{"minWidth":"8rem"} as CSSProperties}>
Symbol
                    </th>
                    <th className="sort align-middle pe-6 text-uppercase" scope="col" data-sort={"name"} style={{"minWidth":"10rem"} as CSSProperties}>
Name
                    </th>
                    <th className="sort align-middle text-end text-uppercase" scope="col" data-sort={"price"} style={{"minWidth":"9.5rem"} as CSSProperties}>
Price
                    </th>
                    <th className="sort align-middle px-4 text-end text-uppercase" scope="col" data-sort={"change"} style={{"minWidth":"8rem"} as CSSProperties}>
Change
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="top-gainers-table"><tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
CHSN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Chanson International Holding
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$14.81
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 387.17%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
BENF
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Beneficient
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.89
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 58.82%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
FORD
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Forward Industries
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$5.38
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 52.41%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
ATGL
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Alpha Technology Group
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$7.20
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 36.11%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
TIGR
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
UP Fintech Holding
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$12.39
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 34.82%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
UXIN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Uxin Limited
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$7.35
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 33.88%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
BANL
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
CBL International
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.35
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 29.81%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
NVDA
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Nvidia Corporation
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$950.12
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 28.45%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
TSLA
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Tesla Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$205.32
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 26.78%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
AAPL
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Apple Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$187.56
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 25.43%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
AMD
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Advanced Micro Devices
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$152.74
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 23.91%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
GOOGL
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Alphabet Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$138.19
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 22.34%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
MSFT
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Microsoft Corporation
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$402.78
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 21.56%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
NFLX
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Netflix Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$462.83
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 20.67%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
META
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Meta Platforms Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$469.12
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 19.85%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
AMZN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Amazon.com Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$145.23
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 18.92%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
BABA
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Alibaba Group Holding
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$85.14
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 17.32%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
DIS
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Walt Disney Co.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$93.45
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 16.78%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
PYPL
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
PayPal Holdings
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$75.64
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 15.89%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
NIO
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Nio Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$9.56
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 14.92%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
PFE
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Pfizer Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$39.84
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-success">
 13.65%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between pt-2 pe-0 fs-9 pagination-subtle">
              <div className="col-auto d-flex">
                <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                </p>
                <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
                <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
              </div>
              <div className="col-auto d-flex">
                <button className="page-link" data-list-pagination={"prev"}>
                  <span className="fas fa-chevron-left">                  </span>
                </button>
                <ul className="mb-0 pagination">                </ul>
                <button className="page-link pe-0" data-list-pagination={"next"}>
                  <span className="fas fa-chevron-right">                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <h2 className="mb-4">
Top Losers
          </h2>
          <div id="topLosersTable" data-list={"{\"valueNames\":[\"symbol\",\"name\",\"price\",\"change\"],\"page\":7,\"pagination\":true}"}>
            <div className="table-responsive scrollbar">
              <table className="table table-striped fs-9 mb-0">
                <thead>
                  <tr className="bg-body-highlight border-top border-translucent"><th className="sort white-space-nowrap align-middle ps-4 text-uppercase" scope="col" data-sort={"symbol"} style={{"minWidth":"8rem"} as CSSProperties}>
Symbol
                    </th>
                    <th className="sort align-middle pe-6 text-uppercase" scope="col" data-sort={"name"} style={{"minWidth":"10rem"} as CSSProperties}>
Name
                    </th>
                    <th className="sort align-middle text-end text-uppercase" scope="col" data-sort={"price"} style={{"minWidth":"9.5rem"} as CSSProperties}>
Price
                    </th>
                    <th className="sort align-middle px-4 text-end text-uppercase" scope="col" data-sort={"change"} style={{"minWidth":"8rem"} as CSSProperties}>
Change
                    </th>
                  </tr>
                </thead>
                <tbody className="list" id="top-losers-table"><tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
DUO
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Fangdd Network Group
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$2.53
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -32.89%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
XIN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Xinyuan Real Estate
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$4.17
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -27.23%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
UPXI
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Upexi
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$2.34
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -26.88%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
SPAI
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Safe Pro Group
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.93
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -25.19%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
SAVE
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Spirit Airlines
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.69
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -24.55%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
LASE
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Laser Photonics
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$7.06
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -23.09%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
IBO
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Impact BioMedical
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.27
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -23.02%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
SOUN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
SoundHound AI Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$3.12
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -21.56%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
FUBO
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
FuboTV Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$2.19
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -19.83%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
NKLA
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Nikola Corporation
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$0.95
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -18.92%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
RIVN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Rivian Automotive
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$10.78
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -17.65%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
PLUG
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Plug Power Inc.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$3.89
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -16.74%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
CVNA
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Carvana Co.
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$49.65
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -15.92%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
LCID
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Lucid Group
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$3.56
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -14.78%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
AFRM
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Affirm Holdings
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$27.34
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -14.23%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
COIN
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Coinbase Global
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$116.47
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -13.56%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
PTON
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Peloton Interactive
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$6.85
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -12.49%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
ZM
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Zoom Video Communications
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$64.23
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -11.92%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
RIDE
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Lordstown Motors
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.24
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -10.78%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
BBBYQ
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
{"Bed Bath & Beyond"}
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$0.09
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -9.86%
                    </td>
                  </tr>
                  <tr>
                    <td className="symbol align-middle white-space-nowrap py-2 ps-4 fs-9 text-body fw-semibold">
TUP
                    </td>
                    <td className="name align-middle white-space-nowrap text-start text-body py-2">
Tupperware Brands
                    </td>
                    <td className="price align-middle white-space-nowrap text-body py-2 text-end">
$1.97
                    </td>
                    <td className="change align-middle white-space-nowrap fs-9 pe-4 fw-semibold text-end text-danger">
 -8.99%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row align-items-center justify-content-between pt-2 pe-0 fs-9 pagination-subtle">
              <div className="col-auto d-flex">
                <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info>                </p>
                <a href="#!" className="fw-semibold"  data-list-view={"*"}>
View all                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
                <a href="#!" className="fw-semibold d-none"  data-list-view={"less"}>
View Less                  <span className="fas fa-angle-right ms-1" data-fa-transform={"down-1"}>                  </span>
                </a>
              </div>
              <div className="col-auto d-flex">
                <button className="page-link" data-list-pagination={"prev"}>
                  <span className="fas fa-chevron-left">                  </span>
                </button>
                <ul className="mb-0 pagination">                </ul>
                <button className="page-link pe-0" data-list-pagination={"next"}>
                  <span className="fas fa-chevron-right">                  </span>
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
