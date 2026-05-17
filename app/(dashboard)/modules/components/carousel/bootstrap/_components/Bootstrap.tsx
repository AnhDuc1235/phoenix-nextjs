'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Bootstrap() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Carousel
    </h2>

    <p className="text-body-tertiary lead mb-2">
A slideshow component for cycling through elements—images or slides of text—like a carousel.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/carousel/" className="btn btn-link p-0"  target="_blank">
Carousel on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Basic Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#basic-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="basic-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"carousel slide carousel-fade\\\" id=\\\"carouselExampleControls\\\" data-bs-ride=\\\"carousel\\\"> <div class=\\\"carousel-indicators\\\"> <button class=\\\"active\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleControls\\\" data-bs-slide-to=\\\"0\\\" aria-current=\\\"true\\\" aria-label=\\\"Slide 1\\\"></button> <button type=\\\"button\\\" data-bs-target=\\\"#carouselExampleControls\\\" data-bs-slide-to=\\\"1\\\" aria-label=\\\"Slide 2\\\"></button> <button type=\\\"button\\\" data-bs-target=\\\"#carouselExampleControls\\\" data-bs-slide-to=\\\"2\\\" aria-label=\\\"Slide 3\\\"></button> </div> <div class=\\\"carousel-inner rounded\\\"> <div class=\\\"carousel-item active\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/6.jpg\\\" alt=\\\"First slide\\\" /> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/7.jpg\\\" alt=\\\"Second slide\\\" /> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/8.jpg\\\" alt=\\\"Third slide\\\" /> </div> </div> <button class=\\\"carousel-control-prev\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleControls\\\" data-bs-slide=\\\"prev\\\"> <span class=\\\"carousel-control-prev-icon\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"sr-only\\\">Previous</span> </button> <button class=\\\"carousel-control-next\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleControls\\\" data-bs-slide=\\\"next\\\"> <span class=\\\"carousel-control-next-icon\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"sr-only\\\">Next</span> </button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="carousel slide carousel-fade" id="carouselExampleControls" data-bs-ride={"carousel"}>
                    <div className="carousel-indicators">
                      <button className="active" type="button" data-bs-target={"#carouselExampleControls"} data-bs-slide-to={"0"} aria-current="true" aria-label="Slide 1">                      </button>
                      <button type="button" data-bs-target={"#carouselExampleControls"} data-bs-slide-to={"1"} aria-label="Slide 2">                      </button>
                      <button type="button" data-bs-target={"#carouselExampleControls"} data-bs-slide-to={"2"} aria-label="Slide 3">                      </button>
                    </div>
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active">
                        <PhoenixImage src="/assets/img/generic/6.jpg" alt="First slide" className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/7.jpg" alt="Second slide" className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/8.jpg" alt="Third slide" className="d-block w-100" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleControls"} data-bs-slide={"prev"}>
                      <span className="carousel-control-prev-icon" aria-hidden="true">                      </span>
                      <span className="sr-only">
Previous
                      </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls"} data-bs-slide={"next"}>
                      <span className="carousel-control-next-icon" aria-hidden="true">                      </span>
                      <span className="sr-only">
Next
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Styled Example
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#styled-example-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="styled-example-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="styled-example-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"carousel slide theme-slider text-center carousel-fade\\\" id=\\\"controlStyledExample\\\" data-ride=\\\"carousel\\\"> <div class=\\\"carousel-indicators\\\"> <button class=\\\"active\\\" type=\\\"button\\\" data-bs-target=\\\"#controlStyledExample\\\" data-bs-slide-to=\\\"0\\\" aria-current=\\\"true\\\" aria-label=\\\"Slide 1\\\"></button> <button type=\\\"button\\\" data-bs-target=\\\"#controlStyledExample\\\" data-bs-slide-to=\\\"1\\\" aria-label=\\\"Slide 2\\\"></button> <button type=\\\"button\\\" data-bs-target=\\\"#controlStyledExample\\\" data-bs-slide-to=\\\"2\\\" aria-label=\\\"Slide 3\\\"></button> </div> <div class=\\\"carousel-inner rounded\\\"> <div class=\\\"carousel-item active\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/6.jpg\\\" alt=\\\"First slide\\\" /> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/7.jpg\\\" alt=\\\"Second slide\\\" /> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/8.jpg\\\" alt=\\\"Third slide\\\" /> </div> <button class=\\\"carousel-control-prev\\\" type=\\\"button\\\" data-bs-target=\\\"#controlStyledExample\\\" data-bs-slide=\\\"prev\\\"> <span class=\\\"fas fa-angle-left\\\"></span> <span class=\\\"sr-only\\\">Previous</span> </button> <button class=\\\"carousel-control-next\\\" type=\\\"button\\\" data-bs-target=\\\"#controlStyledExample\\\" data-bs-slide=\\\"next\\\"> <span class=\\\"fas fa-angle-right\\\"></span> <span class=\\\"sr-only\\\">Next</span> </button> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="carousel slide theme-slider text-center carousel-fade" id="controlStyledExample" data-ride={"carousel"}>
                    <div className="carousel-indicators">
                      <button className="active" type="button" data-bs-target={"#controlStyledExample"} data-bs-slide-to={"0"} aria-current="true" aria-label="Slide 1">                      </button>
                      <button type="button" data-bs-target={"#controlStyledExample"} data-bs-slide-to={"1"} aria-label="Slide 2">                      </button>
                      <button type="button" data-bs-target={"#controlStyledExample"} data-bs-slide-to={"2"} aria-label="Slide 3">                      </button>
                    </div>
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active">
                        <PhoenixImage src="/assets/img/generic/6.jpg" alt="First slide" className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/7.jpg" alt="Second slide" className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/8.jpg" alt="Third slide" className="d-block w-100" />
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target={"#controlStyledExample"} data-bs-slide={"prev"}>
                        <span className="fas fa-angle-left">                        </span>
                        <span className="sr-only">
Previous
                        </span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={"#controlStyledExample"} data-bs-slide={"next"}>
                        <span className="fas fa-angle-right">                        </span>
                        <span className="sr-only">
Next
                        </span>
                      </button>
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
With Captions
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#with-captions-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="with-captions-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="with-captions-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"carousel slide carousel-fade\\\" id=\\\"carouselExampleCaptions\\\" data-ride=\\\"carousel\\\"> <div class=\\\"carousel-indicators\\\"> <button class=\\\"active\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleCaptions\\\" data-bs-slide-to=\\\"0\\\" aria-current=\\\"true\\\" aria-label=\\\"Slide 1\\\"></button> <button type=\\\"button\\\" data-bs-target=\\\"#carouselExampleCaptions\\\" data-bs-slide-to=\\\"1\\\" aria-label=\\\"Slide 2\\\"></button> <button type=\\\"button\\\" data-bs-target=\\\"#carouselExampleCaptions\\\" data-bs-slide-to=\\\"2\\\" aria-label=\\\"Slide 3\\\"></button> </div> <div class=\\\"carousel-inner rounded-1\\\"> <div class=\\\"carousel-item active\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/5.jpg\\\" alt=\\\"First slide\\\" /> <div class=\\\"carousel-caption d-none d-md-block\\\"> <h5 class=\\\"text-white\\\">First Slide Heading</h5> <p class=\\\"text-white\\\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/28.jpg\\\" alt=\\\"Second slide\\\" /> <div class=\\\"carousel-caption d-none d-md-block\\\"> <h5 class=\\\"text-white\\\">Second Slide Heading</h5> <p class=\\\"text-white\\\">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </div> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/9.jpg\\\" alt=\\\"Third slide\\\" /> <div class=\\\"carousel-caption d-none d-md-block\\\"> <h5 class=\\\"text-white\\\">Third Slide Heading</h5> <p class=\\\"text-white\\\">Lorem ipsum dolor sit amet consectetur adipisicing elit</p> </div> </div> </div> <button class=\\\"carousel-control-prev\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleCaptions\\\" data-bs-slide=\\\"prev\\\"> <span class=\\\"carousel-control-prev-icon\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"sr-only\\\">Previous</span> </button> <button class=\\\"carousel-control-next\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleCaptions\\\" data-bs-slide=\\\"next\\\"> <span class=\\\"carousel-control-next-icon\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"sr-only\\\">Next</span> </button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="carousel slide carousel-fade" id="carouselExampleCaptions" data-ride={"carousel"}>
                    <div className="carousel-indicators">
                      <button className="active" type="button" data-bs-target={"#carouselExampleCaptions"} data-bs-slide-to={"0"} aria-current="true" aria-label="Slide 1">                      </button>
                      <button type="button" data-bs-target={"#carouselExampleCaptions"} data-bs-slide-to={"1"} aria-label="Slide 2">                      </button>
                      <button type="button" data-bs-target={"#carouselExampleCaptions"} data-bs-slide-to={"2"} aria-label="Slide 3">                      </button>
                    </div>
                    <div className="carousel-inner rounded-1">
                      <div className="carousel-item active">
                        <PhoenixImage src="/assets/img/generic/5.jpg" alt="First slide" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="text-white">
First Slide Heading
                          </h5>
                          <p className="text-white">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/28.jpg" alt="Second slide" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="text-white">
Second Slide Heading
                          </h5>
                          <p className="text-white">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/9.jpg" alt="Third slide" className="d-block w-100" />
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className="text-white">
Third Slide Heading
                          </h5>
                          <p className="text-white">
Lorem ipsum dolor sit amet consectetur adipisicing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleCaptions"} data-bs-slide={"prev"}>
                      <span className="carousel-control-prev-icon" aria-hidden="true">                      </span>
                      <span className="sr-only">
Previous
                      </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleCaptions"} data-bs-slide={"next"}>
                      <span className="carousel-control-next-icon" aria-hidden="true">                      </span>
                      <span className="sr-only">
Next
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-center">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Crossfade
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#crossfade-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="crossfade-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="crossfade-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"carousel slide carousel-fade\\\" id=\\\"carouselExampleFade\\\" data-ride=\\\"carousel\\\"> <div class=\\\"carousel-inner rounded\\\"> <div class=\\\"carousel-item active\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/8.jpg\\\" alt=\\\"First slide\\\" /> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/7.jpg\\\" alt=\\\"Second slide\\\" /> </div> <div class=\\\"carousel-item\\\"> <img class=\\\"d-block w-100\\\" src=\\\"../../../assets/img/generic/6.jpg\\\" alt=\\\"Third slide\\\" /> </div> </div> <button class=\\\"carousel-control-prev\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleFade\\\" data-bs-slide=\\\"prev\\\"> <span class=\\\"carousel-control-prev-icon\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"sr-only\\\">Previous</span> </button> <button class=\\\"carousel-control-next\\\" type=\\\"button\\\" data-bs-target=\\\"#carouselExampleFade\\\" data-bs-slide=\\\"next\\\"> <span class=\\\"carousel-control-next-icon\\\" aria-hidden=\\\"true\\\"></span> <span class=\\\"sr-only\\\">Next</span> </button> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <div className="carousel slide carousel-fade" id="carouselExampleFade" data-ride={"carousel"}>
                    <div className="carousel-inner rounded">
                      <div className="carousel-item active">
                        <PhoenixImage src="/assets/img/generic/8.jpg" alt="First slide" className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/7.jpg" alt="Second slide" className="d-block w-100" />
                      </div>
                      <div className="carousel-item">
                        <PhoenixImage src="/assets/img/generic/6.jpg" alt="Third slide" className="d-block w-100" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleFade"} data-bs-slide={"prev"}>
                      <span className="carousel-control-prev-icon" aria-hidden="true">                      </span>
                      <span className="sr-only">
Previous
                      </span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleFade"} data-bs-slide={"next"}>
                      <span className="carousel-control-next-icon" aria-hidden="true">                      </span>
                      <span className="sr-only">
Next
                      </span>
                    </button>
                  </div>
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
                <a href="#basic-example" className="nav-link">
Basic Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#styled-example" className="nav-link">
Styled Example
                </a>
              </li>
              <li className="nav-item">
                <a href="#with-captions" className="nav-link">
With Captions
                </a>
              </li>
              <li className="nav-item">
                <a href="#crossfade" className="nav-link">
Crossfade
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
