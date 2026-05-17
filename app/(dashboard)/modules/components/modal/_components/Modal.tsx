'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Modal() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Modals
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
    </p>
    <a href="https://getbootstrap.com/docs/5.3/components/modal/" className="btn btn-link p-0"  target="_blank">
Modal on Bootstrap      <span className="ms-1" data-feather={"chevron-right"}>      </span>
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
Basic Modal
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#basic-modal-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="basic-modal-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="basic-modal-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#exampleModal\\\">Launch basic modal</button> <div class=\\\"modal fade\\\" id=\\\"exampleModal\\\" tabindex=\\\"-1\\\" aria-hidden=\\\"true\\\"> <div class=\\\"modal-dialog\\\"> <div class=\\\"modal-content\\\"> <div class=\\\"modal-header\\\"> <h5 class=\\\"modal-title\\\" id=\\\"exampleModalLabel\\\">Modal title</h5> <button class=\\\"btn btn-close p-1\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"modal-body\\\"> <p class=\\\"text-body-tertiary lh-lg mb-0\\\">This is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). </p> </div> <div class=\\\"modal-footer\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Okay</button> <button class=\\\"btn btn-outline-primary\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\">Cancel</button> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#exampleModal"}>
Launch basic modal
                  </button>
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
Modal title
                          </h5>
                          <button className="btn btn-close p-1" type="button" data-bs-dismiss={"modal"} aria-label="Close">                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="text-body-tertiary lh-lg mb-0">
This is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). 
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button">
Okay
                          </button>
                          <button className="btn btn-outline-primary" type="button" data-bs-dismiss={"modal"}>
Cancel
                          </button>
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
Static backdrop
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#static-backdrop-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="static-backdrop-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="static-backdrop-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#staticBackdrop\\\">Launch demo modal 2</button> <div class=\\\"modal fade\\\" id=\\\"staticBackdrop\\\" tabindex=\\\"-1\\\" data-bs-backdrop=\\\"static\\\" aria-labelledby=\\\"staticBackdropLabel\\\" aria-hidden=\\\"true\\\"> <div class=\\\"modal-dialog\\\"> <div class=\\\"modal-content\\\"> <div class=\\\"modal-header justify-content-between bg-primary\\\"> <h5 class=\\\"modal-title text-white dark__text-gray-1100\\\" id=\\\"staticBackdropLabel\\\">Modal title</h5> <button class=\\\"btn p-1\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"><span class=\\\"fas fa-times fs-9 text-white dark__text-gray-1100\\\"></span></button> </div> <div class=\\\"modal-body\\\"> <p class=\\\"text-body-tertiary lh-lg mb-0\\\">This is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). </p> </div> <div class=\\\"modal-footer\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Okay</button> <button class=\\\"btn btn-outline-primary\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\">Cancel</button> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#staticBackdrop"}>
Launch demo modal 2
                  </button>
                  <div className="modal fade" id="staticBackdrop" tabIndex={-1} data-bs-backdrop={"static"} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header justify-content-between bg-primary">
                          <h5 className="modal-title text-white dark__text-gray-1100" id="staticBackdropLabel">
Modal title
                          </h5>
                          <button className="btn p-1" type="button" data-bs-dismiss={"modal"} aria-label="Close">
                            <span className="fas fa-times fs-9 text-white dark__text-gray-1100">                            </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="text-body-tertiary lh-lg mb-0">
This is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). 
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button">
Okay
                          </button>
                          <button className="btn btn-outline-primary" type="button" data-bs-dismiss={"modal"}>
Cancel
                          </button>
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
Scrolling long content (scroll body)
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#scrolling-long-content-scroll-body-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="scrolling-long-content-scroll-body-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="scrolling-long-content-scroll-body-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#scrollingLong\\\">Launch Scrolling long content modal</button> <div class=\\\"modal fade\\\" id=\\\"scrollingLong\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"scrollingLongModalLabel\\\" aria-hidden=\\\"true\\\"> <div class=\\\"modal-dialog\\\"> <div class=\\\"modal-content\\\"> <div class=\\\"modal-header\\\"> <h5 class=\\\"modal-title\\\" id=\\\"scrollingLongModalLabel\\\">Modal title</h5> <button class=\\\"btn p-1 btn-close\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"modal-body\\\"> <p class=\\\"text-body-tertiary lh-lg mb-0\\\">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p> </div> <div class=\\\"modal-footer\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Okay</button> <button class=\\\"btn btn-outline-primary\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\">Cancel</button> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#scrollingLong"}>
Launch Scrolling long content modal
                  </button>
                  <div className="modal fade" id="scrollingLong" tabIndex={-1} aria-labelledby="scrollingLongModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="scrollingLongModalLabel">
Modal title
                          </h5>
                          <button className="btn p-1 btn-close" type="button" data-bs-dismiss={"modal"} aria-label="Close">                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="text-body-tertiary lh-lg mb-0">
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button">
Okay
                          </button>
                          <button className="btn btn-outline-primary" type="button" data-bs-dismiss={"modal"}>
Cancel
                          </button>
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
Scrolling long content (scroll modal)
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#scrolling-long-content-scroll-modal-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="scrolling-long-content-scroll-modal-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="scrolling-long-content-scroll-modal-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#scrollingLong2\\\">Launch Scrolling long content modal</button> <div class=\\\"modal fade\\\" id=\\\"scrollingLong2\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"scrollingLongModalLabel2\\\" aria-hidden=\\\"true\\\"> <div class=\\\"modal-dialog modal-dialog-scrollable\\\"> <div class=\\\"modal-content\\\"> <div class=\\\"modal-header\\\"> <h5 class=\\\"modal-title\\\" id=\\\"scrollingLongModalLabel2\\\">Modal title</h5> <button class=\\\"btn btn-close p-1\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"modal-body\\\"> <p class=\\\"text-body-tertiary lh-lg mb-0\\\">Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p> </div> <div class=\\\"modal-footer\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Okay</button> <button class=\\\"btn btn-outline-primary\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\">Cancel</button> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#scrollingLong2"}>
Launch Scrolling long content modal
                  </button>
                  <div className="modal fade" id="scrollingLong2" tabIndex={-1} aria-labelledby="scrollingLongModalLabel2" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="scrollingLongModalLabel2">
Modal title
                          </h5>
                          <button className="btn btn-close p-1" type="button" data-bs-dismiss={"modal"} aria-label="Close">                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="text-body-tertiary lh-lg mb-0">
Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button">
Okay
                          </button>
                          <button className="btn btn-outline-primary" type="button" data-bs-dismiss={"modal"}>
Cancel
                          </button>
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
Vertically centered
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#vertically-centered-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="vertically-centered-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="vertically-centered-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#verticallyCentered\\\">Vertically centered modal</button> <div class=\\\"modal fade\\\" id=\\\"verticallyCentered\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"verticallyCenteredModalLabel\\\" aria-hidden=\\\"true\\\"> <div class=\\\"modal-dialog modal-dialog-centered\\\"> <div class=\\\"modal-content\\\"> <div class=\\\"modal-header\\\"> <h5 class=\\\"modal-title\\\" id=\\\"verticallyCenteredModalLabel\\\">Modal title</h5> <button class=\\\"btn btn-close p-1\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"modal-body\\\"> <p class=\\\"text-body-tertiary lh-lg mb-0\\\">This is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). </p> </div> <div class=\\\"modal-footer\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Okay</button> <button class=\\\"btn btn-outline-primary\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\">Cancel</button> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#verticallyCentered"}>
Vertically centered modal
                  </button>
                  <div className="modal fade" id="verticallyCentered" tabIndex={-1} aria-labelledby="verticallyCenteredModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="verticallyCenteredModalLabel">
Modal title
                          </h5>
                          <button className="btn btn-close p-1" type="button" data-bs-dismiss={"modal"} aria-label="Close">                          </button>
                        </div>
                        <div className="modal-body">
                          <p className="text-body-tertiary lh-lg mb-0">
This is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). 
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button">
Okay
                          </button>
                          <button className="btn btn-outline-primary" type="button" data-bs-dismiss={"modal"}>
Cancel
                          </button>
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
Tooltips and popovers
                    </h4>
                  </div>
                  <div className="col col-md-auto">
                    <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                      <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                        <span className="fas fa-copy me-1">                        </span>
Copy Code
                      </button>
                      <a href="#tooltips-and-popovers-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="tooltips-and-popovers-code" aria-expanded="false">
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
                <div className="collapse code-collapse" id="tooltips-and-popovers-code">
                  <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><button class=\\\"btn btn-primary\\\" type=\\\"button\\\" data-bs-toggle=\\\"modal\\\" data-bs-target=\\\"#tooltipModal\\\">Vertically centered modal</button> <div class=\\\"modal fade\\\" id=\\\"tooltipModal\\\" tabindex=\\\"-1\\\" aria-labelledby=\\\"tooltipModalLabel\\\" aria-hidden=\\\"true\\\"> <div class=\\\"modal-dialog modal-dialog-centered\\\"> <div class=\\\"modal-content\\\"> <div class=\\\"modal-header\\\"> <h5 class=\\\"modal-title\\\" id=\\\"tooltipModalLabel\\\">Modal title</h5> <button class=\\\"btn btn-close p-1\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\" aria-label=\\\"Close\\\"></button> </div> <div class=\\\"modal-body\\\"> <h5>Tooltip in a modal</h5> <p> </p>This <a class=\\\"text-primary\\\" href=\\\"#!\\\" data-bs-toggle=\\\"tooltip\\\" data-bs-placement=\\\"top\\\" title=\\\"Tooltip on top\\\">Link</a> triggers a tooltip on hover. <hr /> <h5>Popover in a modal</h5> <p> </p>This <button class=\\\"btn btn-secondary\\\" type=\\\"button\\\" data-bs-toggle=\\\"popover\\\" title=\\\"Popover title\\\" data-bs-content=\\\"And here's some amazing content. It's very engaging. Right?\\\">button</button> triggers a popover on click. </div> <div class=\\\"modal-footer\\\"> <button class=\\\"btn btn-primary\\\" type=\\\"button\\\">Okay</button> <button class=\\\"btn btn-outline-primary\\\" type=\\\"button\\\" data-bs-dismiss=\\\"modal\\\">Cancel</button> </div> </div> </div> </div></code>"}
                  </pre>
                </div>
                <div className="p-4 code-to-copy">
                  <button className="btn btn-primary" type="button" data-bs-toggle={"modal"} data-bs-target={"#tooltipModal"}>
Vertically centered modal
                  </button>
                  <div className="modal fade" id="tooltipModal" tabIndex={-1} aria-labelledby="tooltipModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="tooltipModalLabel">
Modal title
                          </h5>
                          <button className="btn btn-close p-1" type="button" data-bs-dismiss={"modal"} aria-label="Close">                          </button>
                        </div>
                        <div className="modal-body">
                          <h5>
Tooltip in a modal
                          </h5>
                          <p>                          </p>
This 
                          <a href="#!" className="text-primary"  data-bs-toggle={"tooltip"} data-bs-placement={"top"} title="Tooltip on top">
Link
                          </a>
 triggers a tooltip on hover. 
                          <hr />
                          <h5>
Popover in a modal
                          </h5>
                          <p>                          </p>
This 
                          <button className="btn btn-secondary" type="button" data-bs-toggle={"popover"} title="Popover title" data-bs-content={"And here's some amazing content. It's very engaging. Right?"}>
button
                          </button>
 triggers a popover on click. 
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button">
Okay
                          </button>
                          <button className="btn btn-outline-primary" type="button" data-bs-dismiss={"modal"}>
Cancel
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
        <div className="col-12 col-xl-2">
          <div className="position-sticky mt-xl-4" style={{"top":"80px"} as CSSProperties}>
            <h5 className="lh-1">
On this page 
            </h5>
            <hr />
            <ul className="nav nav-vertical flex-column doc-nav" data-doc-nav>
              <li className="nav-item">
                <a href="#basic-modal" className="nav-link">
Basic Modal
                </a>
              </li>
              <li className="nav-item">
                <a href="#static-backdrop" className="nav-link">
Static backdrop
                </a>
              </li>
              <li className="nav-item">
                <a href="#scrolling-long-content-scroll-body" className="nav-link">
Scrolling long content (scroll body)
                </a>
              </li>
              <li className="nav-item">
                <a href="#scrolling-long-content-scroll-modal" className="nav-link">
Scrolling long content (scroll modal)
                </a>
              </li>
              <li className="nav-item">
                <a href="#vertically-centered" className="nav-link">
Vertically centered
                </a>
              </li>
              <li className="nav-item">
                <a href="#tooltips-and-popovers" className="nav-link">
Tooltips and popovers
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
