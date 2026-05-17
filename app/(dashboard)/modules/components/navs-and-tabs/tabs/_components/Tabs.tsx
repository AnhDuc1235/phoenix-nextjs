'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Tabs() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Tabs
    </h2>

    <p className="text-body-tertiary lead mb-2">
Takes the basic nav and adds the 
      <code>
.nav-tabs
      </code>
 class to generate a tabbed interface. Use them to create tabbable regions with Bootstrap tab JavaScript plugin.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/navs-tabs/#tabs" className="btn btn-link p-0"  target="_blank">
Tabs on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="mb-9">
            <div className="card shadow-none border my-4" data-component-card>
              <div className="card-header p-4 border-bottom bg-body">
                <div className="row g-3 justify-content-between align-items-end">
                  <div className="col-12 col-md">
                    <h4 className="text-body mb-0" data-anchor>
Basic Example
                    </h4>
                    <p className="mb-0 mt-2 text-body-secondary">
Takes the basic nav and adds the 
                      <code>
.nav-tabs
                      </code>
 class to generate a tabbed interface. Use them to create tabbable regions with our tab JavaScript plugin.
                    </p>
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
{"<code class=\"language-html\"><ul class=\\\"nav nav-underline fs-9\\\" id=\\\"myTab\\\" role=\\\"tablist\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active\\\" id=\\\"home-tab\\\" data-bs-toggle=\\\"tab\\\" href=\\\"#tab-home\\\" role=\\\"tab\\\" aria-controls=\\\"tab-home\\\" aria-selected=\\\"true\\\">Home</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" id=\\\"profile-tab\\\" data-bs-toggle=\\\"tab\\\" href=\\\"#tab-profile\\\" role=\\\"tab\\\" aria-controls=\\\"tab-profile\\\" aria-selected=\\\"false\\\">Profile</a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link\\\" id=\\\"contact-tab\\\" data-bs-toggle=\\\"tab\\\" href=\\\"#tab-contact\\\" role=\\\"tab\\\" aria-controls=\\\"tab-contact\\\" aria-selected=\\\"false\\\">Contact</a></li> </ul> <div class=\\\"tab-content mt-3\\\" id=\\\"myTabContent\\\"> <div class=\\\"tab-pane fade show active\\\" id=\\\"tab-home\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"home-tab\\\">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.</div> <div class=\\\"tab-pane fade\\\" id=\\\"tab-profile\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"profile-tab\\\">Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.</div> <div class=\\\"tab-pane fade\\\" id=\\\"tab-contact\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"contact-tab\\\">Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <ul className="nav nav-underline fs-9" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a href="#tab-home" className="nav-link" id="home-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-home" aria-selected="true">
Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#tab-profile" className="nav-link" id="profile-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-profile" aria-selected="false">
Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#tab-contact" className="nav-link" id="contact-tab" data-bs-toggle={"tab"}  role="tab" aria-controls="tab-contact" aria-selected="false">
Contact
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content mt-3" id="myTabContent">
                    <div className="tab-pane fade show active" id="tab-home" role="tabpanel" aria-labelledby="home-tab">
Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
                    </div>
                    <div className="tab-pane fade" id="tab-profile" role="tabpanel" aria-labelledby="profile-tab">
Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic.
                    </div>
                    <div className="tab-pane fade" id="tab-contact" role="tabpanel" aria-labelledby="contact-tab">
Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.
                    </div>
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
