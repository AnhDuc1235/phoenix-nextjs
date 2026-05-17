'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Swiper() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Swiper
    </h2>

    <p className="text-body-tertiary lead mb-2">
Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.
    </p>
    <a href="https://swiperjs.com/get-started" className="btn btn-link p-0"  target="_blank">
Documentation for swiper      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Swiper with thumbnail
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
This can be simply done by using the attribute. For Swiper with thumbnail use 
                      <code>
thumb 
                      </code>
options in your pug/HTML. You can place thumbnail to a specific parent by providing 
                      <code>
thumbOptions: '#parentID' 
                      </code>
value in 
                      <code>
thumb 
                      </code>
options. Otherwise thumbnail will be placed after the 
                      <code>
.swiper 
                      </code>
element.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#swiper-with-thumbnail-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="swiper-with-thumbnail-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="swiper-with-thumbnail-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"swiper-theme-container\\\"> <div class=\\\"swiper theme-slider\\\" data-swiper='{\\\"spaceBetween\\\":8,\\\"loop\\\":true,\\\"loopedSlides\\\":5,\\\"thumb\\\":{\\\"spaceBetween\\\":8,\\\"slidesPerView\\\":5,\\\"loop\\\":true,\\\"freeMode\\\":true,\\\"grabCursor\\\":true,\\\"loopedSlides\\\":5,\\\"centeredSlides\\\":true,\\\"slideToClickedSlide\\\":true,\\\"watchSlidesVisibility\\\":true,\\\"watchSlidesProgress\\\":true},\\\"slideToClickedSlide\\\":true}'> <div class=\\\"swiper-wrapper\\\"> <div class=\\\"swiper-slide\\\"><img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/30.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/31.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/32.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/33.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/34.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/35.jpg\\\" alt=\\\"\\\" /></div> </div> </div> <div class=\\\"swiper-nav\\\"> <div class=\\\"swiper-button-next\\\"><span class=\\\"fas fa-chevron-right nav-icon\\\"></span></div> <div class=\\\"swiper-button-prev\\\"><span class=\\\"fas fa-chevron-left nav-icon\\\"></span></div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="swiper-theme-container">
                    <div className="swiper theme-slider" data-swiper={"{\"spaceBetween\":8,\"loop\":true,\"loopedSlides\":5,\"thumb\":{\"spaceBetween\":8,\"slidesPerView\":5,\"loop\":true,\"freeMode\":true,\"grabCursor\":true,\"loopedSlides\":5,\"centeredSlides\":true,\"slideToClickedSlide\":true,\"watchSlidesVisibility\":true,\"watchSlidesProgress\":true},\"slideToClickedSlide\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/30.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/31.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/32.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/33.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/34.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/35.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-nav">
                      <div className="swiper-button-next">
                        <span className="fas fa-chevron-right nav-icon">                        </span>
                      </div>
                      <div className="swiper-button-prev">
                        <span className="fas fa-chevron-left nav-icon">                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Swiper without thumbnail
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
For Swiper without thumbnail simply remove thumb options from your pug/HTML.
                    </p>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#swiper-without-thumbnail-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="swiper-without-thumbnail-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="swiper-without-thumbnail-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"swiper-theme-container\\\"> <div class=\\\"swiper theme-slider\\\" data-swiper='{\\\"autoplay\\\":true,\\\"spaceBetween\\\":5,\\\"loop\\\":true,\\\"loopedSlides\\\":5,\\\"slideToClickedSlide\\\":true}'> <div class=\\\"swiper-wrapper\\\"> <div class=\\\"swiper-slide\\\"><img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/30.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/31.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/32.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/33.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/34.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/35.jpg\\\" alt=\\\"\\\" /></div> </div> </div> <div class=\\\"swiper-nav\\\"> <div class=\\\"swiper-button-next\\\"><span class=\\\"fas fa-chevron-right nav-icon\\\"></span></div> <div class=\\\"swiper-button-prev\\\"><span class=\\\"fas fa-chevron-left nav-icon\\\"></span></div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="swiper-theme-container">
                    <div className="swiper theme-slider" data-swiper={"{\"autoplay\":true,\"spaceBetween\":5,\"loop\":true,\"loopedSlides\":5,\"slideToClickedSlide\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/30.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/31.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/32.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/33.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/34.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/35.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="swiper-nav">
                      <div className="swiper-button-next">
                        <span className="fas fa-chevron-right nav-icon">                        </span>
                      </div>
                      <div className="swiper-button-prev">
                        <span className="fas fa-chevron-left nav-icon">                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border mb-3" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Swiper without navigation example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#swiper-without-navigation-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="swiper-without-navigation-example-code" aria-expanded="false">
                        <span className="me-2" data-feather={"code"}>                        </span>View code
                      </a>
                      <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                        <span className="me-2" data-feather={"eye"}>                        </span>Hide code
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="swiper-without-navigation-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"swiper-theme-container\\\"> <div class=\\\"swiper theme-slider\\\" data-swiper='{\\\"autoplay\\\":true,\\\"spaceBetween\\\":5,\\\"loop\\\":true,\\\"loopedSlides\\\":5,\\\"slideToClickedSlide\\\":true}'> <div class=\\\"swiper-wrapper\\\"> <div class=\\\"swiper-slide\\\"><img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/30.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/31.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/32.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/33.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/34.jpg\\\" alt=\\\"\\\" /></div> <div class=\\\"swiper-slide\\\"> <img class=\\\"rounded-1 img-fluid\\\" src=\\\"../../../assets/img/generic/35.jpg\\\" alt=\\\"\\\" /></div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="swiper-theme-container">
                    <div className="swiper theme-slider" data-swiper={"{\"autoplay\":true,\"spaceBetween\":5,\"loop\":true,\"loopedSlides\":5,\"slideToClickedSlide\":true}"}>
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/30.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/31.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/32.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/33.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/34.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                        <div className="swiper-slide">
                          <PhoenixImage src="/assets/img/generic/35.jpg" alt="" className="rounded-1 img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Stylesheet
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="stylesheet-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;link href=&quot;vendors/swiper/swiper-bundle.min.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <pre>
{"<code class=\"language-html\"><link href=\\\"vendors/swiper/swiper-bundle.min.css\\\" rel=\\\"stylesheet\\\" /></code>"}
                  </pre>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Javascript
                    </h4>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="collapse code-collapse" id="javascript-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;vendors/swiper/swiper-bundle.min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <pre>
{"<code class=\"language-html\"><script src=\\\"vendors/swiper/swiper-bundle.min.js\\\"></script></code>"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-2">
          <div className="position-sticky mt-xl-4" style={{"top":"80px"} as CSSProperties}>
            <h5 className="lh-1">
On this page 
            </h5>
            <hr />
            <ul className="nav nav-vertical flex-column doc-nav" data-doc-nav>
              <li className="nav-item">
                <a href="#swiper-with-thumbnail" className="nav-link">
Swiper with thumbnail
                </a>
              </li>
              <li className="nav-item">
                <a href="#swiper-without-thumbnail" className="nav-link">
Swiper without thumbnail
                </a>
              </li>
              <li className="nav-item">
                <a href="#swiper-without-navigation-example" className="nav-link">
Swiper without navigation example
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="position-fixed bottom-0 end-0 p-3" style={{"zIndex":"1050"} as CSSProperties}>
      <div className="toast align-items-center text-white bg-dark border-0" id="icon-copied-toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="d-flex" data-bs-theme={"dark"}>
          <div className="toast-body p-3">          </div>
          <button className="btn-close me-2 m-auto" type="button" data-bs-dismiss={"toast"} aria-label="Close">          </button>
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
