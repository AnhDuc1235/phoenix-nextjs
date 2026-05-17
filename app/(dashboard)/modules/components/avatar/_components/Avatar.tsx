'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Avatar() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Avatars
    </h2>

    <p className="text-body-tertiary lead mb-2">
Use avater of different shapes and sizes with a single component.
    </p>

    <div className="mt-4">
      <div className="row g-4">
        <div className="col-12 col-xl-10 order-1 order-xl-0">
          <div className="row mb-9">
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Circular
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#circular-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="circular-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="circular-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl ">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Square
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#square-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="square-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="square-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-none \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl ">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-none " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Soft
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#soft-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="soft-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="soft-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-soft \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl ">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-soft " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Content
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#content-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="content-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="content-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+2</span></div> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl ">
                      <div className="avatar-name rounded-circle ">
                        <span>
+2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Name
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#name-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="name-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="name-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl \\\"> <div class=\\\"avatar-name rounded-circle\\\"><span>A</span></div> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl ">
                      <div className="avatar-name rounded-circle">
                        <span>
A
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Emoji
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#emoji-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="emoji-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="emoji-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl \\\"> <div class=\\\"avatar-emoji rounded-circle \\\"><span role=\\\"img\\\" aria-label=\\\"Emoji\\\">🎁</span></div> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl ">
                      <div className="avatar-emoji rounded-circle ">
                        <span role="img" aria-label="Emoji">
🎁
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Status
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#status-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="status-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="status-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-xl status-online me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl status-offline me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl status-away me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl status-do-not-disturb me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-xl status-online  me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-xl status-offline  me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-xl status-away  me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-xl status-do-not-disturb  me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadow-none border my-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Sizes
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#sizes-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="sizes-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="sizes-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar avatar-5xl avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-4xl avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-3xl avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-2xl avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-l avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-m avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-s avatar-bordered me-4\\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar avatar-5xl avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-4xl avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-3xl avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-2xl avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-xl avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-l avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-m avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                    <div className="avatar avatar-s avatar-bordered me-4">
                      <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="card shadow-none border mt-4" data-component-card>
                <div className="card-header p-4 border-bottom bg-body">
                  <div className="row g-3 justify-content-between align-items-center">
                    <div className="col-12 col-md">
                      <h4 className="text-body mb-0" data-anchor>
Avatar Group
                      </h4>
                    </div>
                    <div className="col col-md-auto">
                      <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                        <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                          <span className="fas fa-copy me-1">                          </span>
Copy Code
                        </button>
                        <a href="#avatar-group-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="avatar-group-code" aria-expanded="false">
                          <span className="me-2" data-feather={"code"}>                          </span>View code
                        </a>
                        <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                          <span className="me-2" data-feather={"eye"}>                          </span>Hide code
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="collapse code-collapse" id="avatar-group-code">
                    <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-5xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-5xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-5xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-5xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-5xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-5xl \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-4xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-4xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-4xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-4xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-4xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-4xl \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-3xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-3xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-3xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-3xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-3xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-3xl \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group\\\"> <div class=\\\"avatar avatar-2xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-2xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-2xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-2xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-2xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-2xl \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-xl \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-l \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-l \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-l \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-l \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-l \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-l \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-m \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-m \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-m \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-m \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-m \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-m \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div> <div class=\\\"avatar-group mb-4\\\"> <div class=\\\"avatar avatar-s \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/30.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-s \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/57.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-s \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/25.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-s \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/8.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-s \\\"> <img class=\\\"rounded-circle \\\" src=\\\"../../assets/img/team/58.webp\\\" alt=\\\"\\\" /> </div> <div class=\\\"avatar avatar-s \\\"> <div class=\\\"avatar-name rounded-circle \\\"><span>+3</span></div> </div> </div></code>"}
                    </pre>
                  </div>
                  <div className="p-4 code-to-copy">
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-5xl ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-5xl ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-5xl ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-5xl ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-5xl ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-5xl ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-4xl ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-4xl ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-4xl ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-4xl ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-4xl ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-4xl ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-3xl ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-3xl ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-3xl ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-3xl ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-3xl ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-3xl ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-2xl ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-2xl ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-2xl ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-2xl ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-2xl ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-2xl ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-xl ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-xl ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-xl ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-xl ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-xl ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-xl ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-l ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-l ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-l ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-l ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-l ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-l ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-m ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-m ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-m ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-m ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-m ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-m ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="avatar-group mb-4">
                      <div className="avatar avatar-s ">
                        <PhoenixImage src="/assets/img/team/30.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-s ">
                        <PhoenixImage src="/assets/img/team/57.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-s ">
                        <PhoenixImage src="/assets/img/team/25.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-s ">
                        <PhoenixImage src="/assets/img/team/8.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-s ">
                        <PhoenixImage src="/assets/img/team/58.webp" alt="" className="rounded-circle " />
                      </div>
                      <div className="avatar avatar-s ">
                        <div className="avatar-name rounded-circle ">
                          <span>
+3
                          </span>
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
                <a href="#circular" className="nav-link">
Circular
                </a>
              </li>
              <li className="nav-item">
                <a href="#square" className="nav-link">
Square
                </a>
              </li>
              <li className="nav-item">
                <a href="#soft" className="nav-link">
Soft
                </a>
              </li>
              <li className="nav-item">
                <a href="#content" className="nav-link">
Content
                </a>
              </li>
              <li className="nav-item">
                <a href="#name" className="nav-link">
Name
                </a>
              </li>
              <li className="nav-item">
                <a href="#emoji" className="nav-link">
Emoji
                </a>
              </li>
              <li className="nav-item">
                <a href="#status" className="nav-link">
Status
                </a>
              </li>
              <li className="nav-item">
                <a href="#sizes" className="nav-link">
Sizes
                </a>
              </li>
              <li className="nav-item">
                <a href="#avatar-group" className="nav-link">
Avatar Group
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
