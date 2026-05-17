'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function FileUploader() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
File Uploader
    </h2>

    <p className="text-body-tertiary lead mb-2">
Phoenix uses 
      <b>
DropzoneJS
      </b>
{" for file-uploader. DropzoneJS is an open-source library that provides drag & drop file uploads with image previews."}
    </p>
    <a href="https://www.dropzonejs.com/" className="btn btn-link p-0"  target="_blank">
Documentation for DropzoneJS      <span className="ms-1" data-feather={"chevron-right"}>      </span>
    </a>

    <div className="mb-9">
      <div className="card shadow-none border mb-3 mt-6" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-end">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Single File Upload
              </h4>
              <p className="mb-0 mt-2 text-body-secondary">
                <code>
Dropzone 
                </code>
requires a valid server-side url for the file upload. You can easily pass it through 
                <code>
data-options 
                </code>
attribute like 
                <code>
{"data-options!={ url: 'valid/url'}"}
                </code>
              </p>
            </div>
            <div className="col col-md-auto">
              <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                  <span className="fas fa-copy me-1">                  </span>
Copy Code
                </button>
                <a href="#single-file-upload-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="single-file-upload-code" aria-expanded="false">
                  <span className="me-2" data-feather={"code"}>                  </span>View code
                </a>
                <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                  <span className="me-2" data-feather={"eye"}>                  </span>Hide code
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="single-file-upload-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"dropzone dropzone-multiple p-0\\\" id=\\\"dropzone\\\" data-dropzone=\\\"data-dropzone\\\" data-options='{\\\"url\\\":\\\"valid/url\\\",\\\"maxFiles\\\":1,\\\"dictDefaultMessage\\\":\\\"Choose or Drop a file here\\\"}'> <div class=\\\"fallback\\\"> <input type=\\\"file\\\" name=\\\"file\\\" /> </div> <div class=\\\"dz-message\\\" data-dz-message=\\\"data-dz-message\\\"> <div class=\\\"dz-message-text\\\"><img class=\\\"me-2\\\" src=\\\"../../../assets/img/icons/cloud-upload.svg\\\" width=\\\"25\\\" alt=\\\"\\\" />Drop your file here</div> </div> <div class=\\\"dz-preview dz-preview-multiple m-0 d-flex flex-column\\\"> <div class=\\\"d-flex pb-3 border-bottom border-translucent media px-2\\\"> <div class=\\\"border p-2 rounded-2 me-2\\\"><img class=\\\"rounded-2 dz-image\\\" src=\\\"../../../assets/img/icons/file.png\\\" alt=\\\"...\\\" data-dz-thumbnail=\\\"data-dz-thumbnail\\\" /></div> <div class=\\\"flex-1 d-flex flex-between-center\\\"> <div> <h6 data-dz-name=\\\"data-dz-name\\\"></h6> <div class=\\\"d-flex align-items-center\\\"> <p class=\\\"mb-0 fs-9 text-body-quaternary lh-1\\\" data-dz-size=\\\"data-dz-size\\\"></p> <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress=\\\"\\\"></span></div> </div><span class=\\\"fs-10 text-danger\\\" data-dz-errormessage=\\\"data-dz-errormessage\\\"></span> </div> <div class=\\\"dropdown\\\"> <button class=\\\"btn btn-link text-body-quaternary btn-sm dropdown-toggle btn-reveal dropdown-caret-none\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"fas fa-ellipsis-h\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end border border-translucent py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\" data-dz-remove=\\\"data-dz-remove\\\">Remove File</a></div> </div> </div> </div> </div> </div></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <div className="dropzone dropzone-multiple p-0" id="dropzone" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
              <div className="fallback">
                <input type="file" name="file" />
              </div>
              <div className="dz-message" data-dz-message>
                <div className="dz-message-text">
                  <PhoenixImage src="/assets/img/icons/cloud-upload.svg" alt="" className="me-2" width={25} />
Drop your file here
                </div>
              </div>
              <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                <div className="d-flex pb-3 border-bottom border-translucent media px-2">
                  <div className="border p-2 rounded-2 me-2">
                    <PhoenixImage src="/assets/img/icons/file.png" alt="..." className="rounded-2 dz-image" />
                  </div>
                  <div className="flex-1 d-flex flex-between-center">
                    <div>
                      <h6 data-dz-name>                      </h6>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 fs-9 text-body-quaternary lh-1" data-dz-size>                        </p>
                        <div className="dz-progress">
                          <span className="dz-upload" data-dz-uploadprogress={""}>                          </span>
                        </div>
                      </div>
                      <span className="fs-10 text-danger" data-dz-errormessage>                      </span>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-link text-body-quaternary btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end border border-translucent py-2">
                        <a href="#!" className="dropdown-item"  data-dz-remove>
Remove File
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-none border mb-3 mt-6" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-center">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Single image Upload
              </h4>
            </div>
            <div className="col col-md-auto">
              <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                  <span className="fas fa-copy me-1">                  </span>
Copy Code
                </button>
                <a href="#single-image-upload-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="single-image-upload-code" aria-expanded="false">
                  <span className="me-2" data-feather={"code"}>                  </span>View code
                </a>
                <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                  <span className="me-2" data-feather={"eye"}>                  </span>Hide code
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="single-image-upload-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"dropzone dropzone-single p-0\\\" id=\\\"dropzone-single\\\" data-dropzone=\\\"data-dropzone\\\" data-options='{\\\"url\\\":\\\"valid/url\\\",\\\"maxFiles\\\":1,\\\"maxFilesize\\\":5,\\\"acceptedFiles\\\":\\\"image/*\\\",\\\"dictDefaultMessage\\\":\\\"Choose or Drop a file here\\\"}'> <div class=\\\"fallback\\\"> <input type=\\\"file\\\" name=\\\"file\\\" /> </div> <div class=\\\"dz-message\\\" data-dz-message=\\\"data-dz-message\\\"> <div class=\\\"dz-message-text\\\"><img class=\\\"me-2\\\" src=\\\"../../../assets/img/icons/cloud-upload.svg\\\" width=\\\"25\\\" alt=\\\"\\\" />Drop your file here</div> <button class=\\\"btn dz-upload-btn border-0 position-absolute z-5 bg-black bg-opacity-50 text-white mt-3 ms-3 px-3\\\" data-dz-message=\\\"data-dz-message\\\">Change Picture<span class=\\\"fa-solid fa-camera fs-10 ms-1\\\"></span></button> </div> <div class=\\\"dz-preview d-block m-0\\\"> <div class=\\\"rounded-2 position-relative\\\" style=\\\"height: 144px\\\"><img class=\\\"rounded-2 w-100 h-100 object-fit-cover\\\" src=\\\"../../../assets/img/icons/file-bg.png\\\" alt=\\\"...\\\" data-dz-thumbnail=\\\"data-dz-thumbnail\\\" /> <button class=\\\"btn border-0 position-absolute top-0 end-0 z-5 bg-black bg-opacity-50 text-white mt-3 me-3 px-3 cursor-pointer\\\" data-dz-remove=\\\"data-dz-remove\\\"><span class=\\\"fa-solid fa-xmark cursor-pointer\\\"></span></button> </div> </div> </div></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <div className="dropzone dropzone-single p-0" id="dropzone-single" data-dropzone data-options={"{\"url\":\"valid/url\",\"maxFiles\":1,\"maxFilesize\":5,\"acceptedFiles\":\"image/*\",\"dictDefaultMessage\":\"Choose or Drop a file here\"}"}>
              <div className="fallback">
                <input type="file" name="file" />
              </div>
              <div className="dz-message" data-dz-message>
                <div className="dz-message-text">
                  <PhoenixImage src="/assets/img/icons/cloud-upload.svg" alt="" className="me-2" width={25} />
Drop your file here
                </div>
                <button className="btn dz-upload-btn border-0 position-absolute z-5 bg-black bg-opacity-50 text-white mt-3 ms-3 px-3" data-dz-message>
Change Picture
                  <span className="fa-solid fa-camera fs-10 ms-1">                  </span>
                </button>
              </div>
              <div className="dz-preview d-block m-0">
                <div className="rounded-2 position-relative" style={{"height":"144px"} as CSSProperties}>
                  <PhoenixImage src="/assets/img/icons/file-bg.png" alt="..." className="rounded-2 w-100 h-100 object-fit-cover" />
                  <button className="btn border-0 position-absolute top-0 end-0 z-5 bg-black bg-opacity-50 text-white mt-3 me-3 px-3 cursor-pointer" data-dz-remove>
                    <span className="fa-solid fa-xmark cursor-pointer">                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-none border mb-4" data-component-card>
        <div className="card-header p-4 border-bottom bg-body">
          <div className="row g-3 justify-content-between align-items-center">
            <div className="col-12 col-md">
              <h4 className="text-body mb-0" data-anchor>
Multiple File Upload
              </h4>
            </div>
            <div className="col col-md-auto">
              <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                  <span className="fas fa-copy me-1">                  </span>
Copy Code
                </button>
                <a href="#multiple-file-upload-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="multiple-file-upload-code" aria-expanded="false">
                  <span className="me-2" data-feather={"code"}>                  </span>View code
                </a>
                <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                  <span className="me-2" data-feather={"eye"}>                  </span>Hide code
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="collapse code-collapse" id="multiple-file-upload-code">
            <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><form class=\\\"dropzone dropzone-multiple p-0\\\" id=\\\"dropzone-multiple\\\" data-dropzone=\\\"data-dropzone\\\" action=\\\"#!\\\"> <div class=\\\"fallback\\\"> <input name=\\\"file\\\" type=\\\"file\\\" multiple=\\\"multiple\\\" /> </div> <div class=\\\"dz-message\\\" data-dz-message=\\\"data-dz-message\\\"><img class=\\\"me-2\\\" src=\\\"../../../assets/img/icons/cloud-upload.svg\\\" width=\\\"25\\\" alt=\\\"\\\" />Drop your files here</div> <div class=\\\"dz-preview dz-preview-multiple m-0 d-flex flex-column\\\"> <div class=\\\"d-flex mb-3 pb-3 border-bottom border-translucent media\\\"> <div class=\\\"border p-2 rounded-2 me-2\\\"><img class=\\\"rounded-2 dz-image\\\" src=\\\"../../../assets/img/icons/file.png\\\" alt=\\\"...\\\" data-dz-thumbnail=\\\"data-dz-thumbnail\\\" /></div> <div class=\\\"flex-1 d-flex flex-between-center\\\"> <div> <h6 data-dz-name=\\\"data-dz-name\\\"></h6> <div class=\\\"d-flex align-items-center\\\"> <p class=\\\"mb-0 fs-9 text-body-quaternary lh-1\\\" data-dz-size=\\\"data-dz-size\\\"></p> <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress=\\\"\\\"></span></div> </div><span class=\\\"fs-10 text-danger\\\" data-dz-errormessage=\\\"data-dz-errormessage\\\"></span> </div> <div class=\\\"dropdown\\\"> <button class=\\\"btn btn-link text-body-tertiary btn-sm dropdown-toggle btn-reveal dropdown-caret-none\\\" type=\\\"button\\\" data-bs-toggle=\\\"dropdown\\\" aria-haspopup=\\\"true\\\" aria-expanded=\\\"false\\\"><span class=\\\"fas fa-ellipsis-h\\\"></span></button> <div class=\\\"dropdown-menu dropdown-menu-end border border-translucent py-2\\\"><a class=\\\"dropdown-item\\\" href=\\\"#!\\\" data-dz-remove=\\\"data-dz-remove\\\">Remove File</a></div> </div> </div> </div> </div> </form></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <form className="dropzone dropzone-multiple p-0" id="dropzone-multiple" data-dropzone action="#!">
              <div className="fallback">
                <input name="file" type="file" multiple />
              </div>
              <div className="dz-message" data-dz-message>
                <PhoenixImage src="/assets/img/icons/cloud-upload.svg" alt="" className="me-2" width={25} />
Drop your files here
              </div>
              <div className="dz-preview dz-preview-multiple m-0 d-flex flex-column">
                <div className="d-flex mb-3 pb-3 border-bottom border-translucent media">
                  <div className="border p-2 rounded-2 me-2">
                    <PhoenixImage src="/assets/img/icons/file.png" alt="..." className="rounded-2 dz-image" />
                  </div>
                  <div className="flex-1 d-flex flex-between-center">
                    <div>
                      <h6 data-dz-name>                      </h6>
                      <div className="d-flex align-items-center">
                        <p className="mb-0 fs-9 text-body-quaternary lh-1" data-dz-size>                        </p>
                        <div className="dz-progress">
                          <span className="dz-upload" data-dz-uploadprogress={""}>                          </span>
                        </div>
                      </div>
                      <span className="fs-10 text-danger" data-dz-errormessage>                      </span>
                    </div>
                    <div className="dropdown">
                      <button className="btn btn-link text-body-tertiary btn-sm dropdown-toggle btn-reveal dropdown-caret-none" type="button" data-bs-toggle={"dropdown"} aria-haspopup="true" aria-expanded="false">
                        <span className="fas fa-ellipsis-h">                        </span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end border border-translucent py-2">
                        <a href="#!" className="dropdown-item"  data-dz-remove>
Remove File
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card shadow-none border mb-4" data-component-card>
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
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;link href=&quot;vendors/dropzone/dropzone.css&quot; rel=&quot;stylesheet&quot; /&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre>
{"<code class=\"language-html\"><link href=\\\"vendors/dropzone/dropzone.css\\\" rel=\\\"stylesheet\\\" /></code>"}
            </pre>
          </div>
        </div>
      </div>
      <div className="card shadow-none border" data-component-card>
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
{"<code class=\"language-html\"><pre><code class=\\\"language-html\\\">&lt;script src=&quot;vendors/dropzone/dropzone-min.js&quot;&gt;&lt;/script&gt;</code></pre></code>"}
            </pre>
          </div>
          <div className="p-4 code-to-copy">
            <pre>
{"<code class=\"language-html\"><script src=\\\"vendors/dropzone/dropzone-min.js\\\"></script></code>"}
            </pre>
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
