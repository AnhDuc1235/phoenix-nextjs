'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Plugin() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Plugin
    </h2>

    <p className="text-body-tertiary lead mb-2">
List of third-party plugins that Phoenix uses
    </p>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Simple approach(without npm)
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="simple-approachwithout-npm-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Place your new plugin in <code>public/vendors</code> folder. Eg: to add the <code>flatpickr</code> plugin, we will download it from <a href=\\\"https://flatpickr.js.org/\\\" target=\\\"_blank\\\">here,</a> unzip it and place the <code>flatpickr-master</code> folder in <code>public/vendors</code> folder. You can now simply link the plugin files to your HTML and use them.</p></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
Place your new plugin in 
            <code>
public/vendors
            </code>
 folder. Eg: to add the 
            <code>
flatpickr
            </code>
 plugin, we will download it from 
            <a href="https://flatpickr.js.org/" target="_blank">
here,
            </a>
 unzip it and place the 
            <code>
flatpickr-master
            </code>
 folder in 
            <code>
public/vendors
            </code>
 folder. You can now simply link the plugin files to your HTML and use them.
          </p>
        </div>
      </div>
    </div>

    <div className="card shadow-none border my-4" data-component-card>
      <div className="card-header p-4 border-bottom bg-body">
        <div className="row g-3 justify-content-between align-items-center">
          <div className="col-12 col-md">
            <h4 className="text-body mb-0" data-anchor>
Using npm
            </h4>
          </div>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="collapse code-collapse" id="using-npm-code">
          <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><p>Suppose we are installing the <code>flatpickr</code> plugin. Here are the steps:</p> <p class=\\\"fw-bold mb-0\\\">Step 1:</p> <p>run npm command for install plugin. for <code>flatpickr </code>we can run </p> <Pre> <code class=\\\"lang-js\\\">npm i flatpickr</code></Pre> <p class=\\\"fw-bold mb-0 mt-3\\\">Step 2:</p> <p>Go to <code>vendors.json </code>file and give the path directory from node_modules as follow</p> <pre><code class=\\\"language-js\\\">&quot;flatpickr&quot;: { &quot;src&quot;: [&quot;dist/flatpickr.min.js&quot;, &quot;dist/flatpickr.min.css&quot;], &quot;dest&quot;: &quot;flatpickr&quot; }</code></pre> <p>Here, <code>dest</code> refers to <code>public/vendors/</code>, where gulp will copy files from the <code>flatpickr</code> plugin. We actually use the <code>vendors</code> folder to store neccassary plugins. And all the plugins folder name will be as we give the dest value</p> <p class=\\\"fw-bold mb-0 mt-3\\\">Step 3:</p> <p>Run the following command:</p> <pre><code class=\\\"lang-js\\\">gulp vendor:move</code></pre></code>"}
          </pre>
        </div>
        <div className="p-4 code-to-copy">
          <p>
Suppose we are installing the 
            <code>
flatpickr
            </code>
 plugin. Here are the steps:
          </p>
          <p className="fw-bold mb-0">
Step 1:
          </p>
          <p>
run npm command for install plugin. for 
            <code>
flatpickr 
            </code>
we can run 
          </p>
          <pre>
{" <code class=\"lang-js\">npm i flatpickr</code>"}
          </pre>
          <p className="fw-bold mb-0 mt-3">
Step 2:
          </p>
          <p>
Go to 
            <code>
vendors.json 
            </code>
file and give the path directory from node_modules as follow
          </p>
          <pre>
{"<code class=\"language-js\">\"flatpickr\": { \"src\": [\"dist/flatpickr.min.js\", \"dist/flatpickr.min.css\"], \"dest\": \"flatpickr\" }</code>"}
          </pre>
          <p>
Here, 
            <code>
dest
            </code>
 refers to 
            <code>
public/vendors/
            </code>
, where gulp will copy files from the 
            <code>
flatpickr
            </code>
 plugin. We actually use the 
            <code>
vendors
            </code>
 folder to store neccassary plugins. And all the plugins folder name will be as we give the dest value
          </p>
          <p className="fw-bold mb-0 mt-3">
Step 3:
          </p>
          <p>
Run the following command:
          </p>
          <pre>
{"<code class=\"lang-js\">gulp vendor:move</code>"}
          </pre>
        </div>
      </div>
    </div>

    <h2 className="mt-5 mb-3">
Built-in plugins
    </h2>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Anchor.js
        </h5>
      </div>
      <div className="card-body">
        <p>
A JavaScript utility for adding deep anchor links to existing page content. AnchorJS is lightweight, accessible, and has no dependencies.
        </p>
        <a href="https://www.bryanbraun.com/anchorjs/#basic-usage" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
CountUp
        </h5>
      </div>
      <div className="card-body">
        <p>
CountUp.js is a dependency-free, lightweight JavaScript class that can be used to quickly create animations that display numerical data in a more interesting way.
        </p>
        <a href="https://github.com/inorganik/CountUp.js" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Dayjs
        </h5>
      </div>
      <div className="card-body">
        <p>
Day.js 2KB immutable date-time library alternative to Moment.js with the same modern API.
        </p>
        <a href="https://day.js.org/docs/en/installation/installation" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Dropzone
        </h5>
      </div>
      <div className="card-body">
        <p>
Dropzone.js is one of the most popular drag and drop JavaScript libraries. It is free, fully open source, and makes it easy for you to handle dropped files on your website.
        </p>
        <a href="https://www.dropzone.dev/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Echarts.js
        </h5>
      </div>
      <div className="card-body">
        <p>
A powerful, interactive charting and visualization library for browser.
        </p>
        <a href="https://echarts.apache.org/en/option.html" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Flatpickr
        </h5>
      </div>
      <div className="card-body">
        <p>
Lightweight, powerful javascript datetimepicker with no dependencies.
        </p>
        <a href="https://flatpickr.js.org/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
FontAwesome 5
        </h5>
      </div>
      <div className="card-body">
        <p>
Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.
        </p>
        <a href="https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
FullCalendar
        </h5>
      </div>
      <div className="card-body">
        <p>
FullCalendar generates real React virtual DOM nodes so you can leverage Fiber, React's highly optimized rendering engine.
        </p>
        <a href="https://fullcalendar.io/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Glightbox
        </h5>
      </div>
      <div className="card-body">
        <p>
Glightbox is a pure javascript lightbox. It can display images, iframes, inline content and videos with optional autoplay for YouTube, Vimeo and even self hosted videos.
        </p>
        <a href="https://github.com/biati-digital/glightbox" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Google Map
        </h5>
      </div>
      <div className="card-body">
        <p>
Phoenix uses Google map with Snazzy Maps, with different color schemes aimed towards web designers and developers.
        </p>
        <a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Is.js
        </h5>
      </div>
      <div className="card-body">
        <p>
Micro check plugin. Check types, regexps, presence, time and more...
        </p>
        <a href="http://is.js.org/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
List.js
        </h5>
      </div>
      <div className="card-body">
        <p>
Tiny, invisible and simple, yet powerful and incredibly fast vanilla JavaScript that adds search, sort, filters and flexibility to plain HTML lists, tables, or anything.
        </p>
        <a href="https://listjs.com/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Lodash
        </h5>
      </div>
      <div className="card-body">
        <p>
{"A modern JavaScript utility library delivering modularity, performance, & extras."}
        </p>
        <a href="https://lodash.com" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Rater
        </h5>
      </div>
      <div className="card-body">
        <p>
Star rating widget for the browser. Unlimited number of stars. No dependencies. No Jquery required.
        </p>
        <a href="https://fredolss.github.io/rater-js/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Sortablejs
        </h5>
      </div>
      <div className="card-body">
        <p>
Reorderable drag-and-drop lists for modern browsers and touch devices. No jQuery or framework required.
        </p>
        <a href="https://sortablejs.github.io/Sortable/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Swiper
        </h5>
      </div>
      <div className="card-body">
        <p>
Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.
        </p>
        <a href="https://swiperjs.com" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Tinymce
        </h5>
      </div>
      <div className="card-body">
        <p>
The world's most popular JavaScript library for rich text editing.
        </p>
        <a href="https://www.tiny.cloud/docs/quick-start/" target="_blank">
Full Documentation
        </a>
      </div>
    </div>

    <div className="card shadow-none border my-3">
      <div className="card-header border-bottom bg-body">
        <h5 className="mb-0" data-anchor>
Typed Text
        </h5>
      </div>
      <div className="card-body">
        <p>
A JavaScript library that types out, deletes them, and then types again.
        </p>
        <a href="https://mattboldt.com/demos/typed-js/" target="_blank">
Full Documentation
        </a>
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
