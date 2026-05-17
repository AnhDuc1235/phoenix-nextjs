'use client';

import type { CSSProperties } from 'react';
import PhoenixImage from '@/components/ui/phoenix-image';
import PhoenixLink from '@/components/ui/phoenix-link';

export default function Wizard() {
  return (
    <div suppressHydrationWarning>

    <h2 className="mb-2 lh-sm">
Wizard form
    </h2>

    <p className="text-body-tertiary lead mb-2">
A form UI to enable users to achieve a goal through a series of steps.
    </p>

    <div className="row mb-9 g-4 mt-4">
      <div className="col-12 col-xxl-6">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
Progress Tab
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#progress-tab-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="progress-tab-code" aria-expanded="false">
                    <span className="me-2" data-feather={"code"}>                    </span>View code
                  </a>
                  <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                    <span className="me-2" data-feather={"eye"}>                    </span>Hide code
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="collapse code-collapse" id="progress-tab-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card theme-wizard mb-5\\\" data-theme-wizard=\\\"data-theme-wizard\\\"> <div class=\\\"card-header bg-body-highlight pt-3 pb-2 border-bottom-0\\\"> <ul class=\\\"nav justify-content-between nav-wizard nav-wizard-success\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active fw-semibold\\\" href=\\\"#bootstrap-wizard-tab1\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"1\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-lock\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Account</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link fw-semibold\\\" href=\\\"#bootstrap-wizard-tab2\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"2\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-user\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Personal</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link fw-semibold\\\" href=\\\"#bootstrap-wizard-tab3\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"3\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-file-alt\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Billing</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link fw-semibold\\\" href=\\\"#bootstrap-wizard-tab4\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"4\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-check\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Done</span></div> </a></li> </ul> </div> <div class=\\\"card-body pt-4 pb-0\\\"> <div class=\\\"tab-content\\\"> <div class=\\\"tab-pane active\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-tab1\\\" id=\\\"bootstrap-wizard-tab1\\\"> <form id=\\\"wizardForm1\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"1\\\"> <div class=\\\"mb-2\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-wizard-wizard-name\\\">Name</label> <input class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"name\\\" placeholder=\\\"John Smith\\\" id=\\\"bootstrap-wizard-wizard-name\\\" /> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-wizard-email\\\">Email*</label> <input class=\\\"form-control\\\" type=\\\"email\\\" name=\\\"email\\\" placeholder=\\\"Email address\\\" pattern=\\\"^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$\\\" id=\\\"bootstrap-wizard-wizard-email\\\" /> </div> <div class=\\\"row g-3 mb-3\\\"> <div class=\\\"col-sm-6\\\"> <div class=\\\"mb-2 mb-sm-0\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-wizard-wizard-password\\\">Password*</label> <input class=\\\"form-control\\\" type=\\\"password\\\" name=\\\"password\\\" placeholder=\\\"Password\\\" id=\\\"bootstrap-wizard-wizard-password\\\" data-wizard-password=\\\"true\\\" /> </div> </div> <div class=\\\"col-sm-6\\\"> <div class=\\\"mb-2\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-wizard-wizard-confirm-password\\\">Confirm Password*</label> <input class=\\\"form-control\\\" type=\\\"password\\\" name=\\\"confirmPassword\\\" placeholder=\\\"Confirm Password\\\" id=\\\"bootstrap-wizard-wizard-confirm-password\\\" data-wizard-confirm-password=\\\"true\\\" /> </div> </div> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" name=\\\"terms\\\" checked=\\\"checked\\\" id=\\\"bootstrap-wizard-wizard-checkbox\\\" /> <label class=\\\"form-check-label text-body\\\" for=\\\"bootstrap-wizard-wizard-checkbox\\\">I accept the <a href=\\\"#!\\\">terms </a>and <a href=\\\"#!\\\">privacy policy</a></label> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-tab2\\\" id=\\\"bootstrap-wizard-tab2\\\"> <form id=\\\"wizardForm2\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"2\\\"> <div class=\\\"row g-4 mb-4\\\" data-dropzone=\\\"data-dropzone\\\" data-options='{\\\"maxFiles\\\":1,\\\"data\\\":[{\\\"name\\\":\\\"avatar.webp\\\",\\\"size\\\":\\\"54kb\\\",\\\"url\\\":\\\"../../assets/img/team\\\"}]}'> <div class=\\\"fallback\\\"> <input type=\\\"file\\\" name=\\\"file\\\" /> </div> <div class=\\\"col-md-auto\\\"> <div class=\\\"dz-preview dz-preview-single\\\"> <div class=\\\"dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0\\\"> <div class=\\\"avatar avatar-4xl\\\"><img class=\\\"rounded-circle avatar-placeholder\\\" src=\\\"../../assets/img/team/avatar.webp\\\" alt=\\\"...\\\" data-dz-thumbnail=\\\"data-dz-thumbnail\\\" /></div> <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress=\\\"\\\"></span></div> </div> </div> </div> <div class=\\\"col-md\\\"> <div class=\\\"dz-message dropzone-area px-2 py-3\\\" data-dz-message=\\\"data-dz-message\\\"> <div class=\\\"text-center text-body-emphasis\\\"> <h5 class=\\\"mb-2\\\"><span class=\\\"fa-solid fa-upload me-2\\\"></span>Upload Profile Picture</h5> <p class=\\\"mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm\\\">Upload a 300x300 jpg image with <br />a maximum size of 400KB</p> </div> </div> </div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-gender\\\">Gender</label> <select class=\\\"form-select\\\" name=\\\"gender\\\" id=\\\"bootstrap-wizard-gender\\\"> <option value=\\\"\\\">Select your gender ...</option> <option value=\\\"Male\\\">Male</option> <option value=\\\"Female\\\">Female</option> <option value=\\\"Other\\\">Other</option> </select> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-wizard-phone\\\">Phone</label> <input class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"phone\\\" placeholder=\\\"Phone\\\" id=\\\"bootstrap-wizard-wizard-phone\\\" /> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-wizard-datepicker\\\">Date of Birth</label> <input class=\\\"form-control datetimepicker\\\" type=\\\"text\\\" placeholder=\\\"d/m/y\\\" data-options='{\\\"dateFormat\\\":\\\"d/m/y\\\",\\\"disableMobile\\\":true}' id=\\\"bootstrap-wizard-wizard-datepicker\\\" /> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-wizard-address\\\">Address</label> <textarea class=\\\"form-control\\\" rows=\\\"4\\\" id=\\\"bootstrap-wizard-wizard-address\\\" defaultValue=\"\" /> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-tab3\\\" id=\\\"bootstrap-wizard-tab3\\\"> <form class=\\\"mb-2\\\" id=\\\"wizardForm3\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"3\\\"> <div class=\\\"row gx-3 gy-2\\\"> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-card-number\\\">Card Number</label> <input class=\\\"form-control\\\" placeholder=\\\"XXXX XXXX XXXX XXXX\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-card-number\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-card-name\\\">Name</label> <input class=\\\"form-control\\\" placeholder=\\\"John Doe\\\" name=\\\"cardName\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-card-name\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-card-holder-country\\\">Country</label> <select class=\\\"form-select\\\" name=\\\"customSelectCountry\\\" id=\\\"bootstrap-wizard-card-holder-country\\\"> <option value=\\\"\\\">Select your country ...</option> <option value=\\\"Afghanistan\\\">Afghanistan</option> <option value=\\\"Albania\\\">Albania</option> <option value=\\\"Algeria\\\">Algeria</option> <option value=\\\"American Samoa\\\">American Samoa</option> <option value=\\\"Andorra\\\">Andorra</option> <option value=\\\"Angola\\\">Angola</option> <option value=\\\"Anguilla\\\">Anguilla</option> <option value=\\\"Antarctica\\\">Antarctica</option> <option value=\\\"Antigua and Barbuda\\\">Antigua and Barbuda</option> <option value=\\\"Argentina\\\">Argentina</option> <option value=\\\"Armenia\\\">Armenia</option> <option value=\\\"Aruba\\\">Aruba</option> <option value=\\\"Australia\\\">Australia</option> <option value=\\\"Austria\\\">Austria</option> <option value=\\\"Azerbaijan\\\">Azerbaijan</option> <option value=\\\"Bahamas\\\">Bahamas</option> <option value=\\\"Bahrain\\\">Bahrain</option> <option value=\\\"Bangladesh\\\">Bangladesh</option> <option value=\\\"Barbados\\\">Barbados</option> <option value=\\\"Belarus\\\">Belarus</option> <option value=\\\"Belgium\\\">Belgium</option> <option value=\\\"Belize\\\">Belize</option> <option value=\\\"Benin\\\">Benin</option> <option value=\\\"Bermuda\\\">Bermuda</option> <option value=\\\"Bhutan\\\">Bhutan</option> <option value=\\\"Bolivia\\\">Bolivia</option> <option value=\\\"Bosnia and Herzegowina\\\">Bosnia and Herzegowina</option> <option value=\\\"Botswana\\\">Botswana</option> <option value=\\\"Bouvet Island\\\">Bouvet Island</option> <option value=\\\"Brazil\\\">Brazil</option> <option value=\\\"British Indian Ocean Territory\\\">British Indian Ocean Territory</option> <option value=\\\"Brunei Darussalam\\\">Brunei Darussalam</option> <option value=\\\"Bulgaria\\\">Bulgaria</option> <option value=\\\"Burkina Faso\\\">Burkina Faso</option> <option value=\\\"Burundi\\\">Burundi</option> <option value=\\\"Cambodia\\\">Cambodia</option> <option value=\\\"Cameroon\\\">Cameroon</option> <option value=\\\"Canada\\\">Canada</option> <option value=\\\"Cape Verde\\\">Cape Verde</option> <option value=\\\"Cayman Islands\\\">Cayman Islands</option> <option value=\\\"Central African Republic\\\">Central African Republic</option> <option value=\\\"Chad\\\">Chad</option> <option value=\\\"Chile\\\">Chile</option> <option value=\\\"China\\\">China</option> <option value=\\\"Christmas Island\\\">Christmas Island</option> <option value=\\\"Cocos (Keeling) Islands\\\">Cocos (Keeling) Islands</option> <option value=\\\"Colombia\\\">Colombia</option> <option value=\\\"Comoros\\\">Comoros</option> <option value=\\\"Congo\\\">Congo</option> <option value=\\\"Congo, the Democratic Republic of the\\\">Congo, the Democratic Republic of the</option> <option value=\\\"Cook Islands\\\">Cook Islands</option> <option value=\\\"Costa Rica\\\">Costa Rica</option> <option value=\\\"Cote d'Ivoire\\\">Cote d'Ivoire</option> <option value=\\\"Croatia (Hrvatska)\\\">Croatia (Hrvatska)</option> <option value=\\\"Cuba\\\">Cuba</option> <option value=\\\"Cyprus\\\">Cyprus</option> <option value=\\\"Czech Republic\\\">Czech Republic</option> <option value=\\\"Denmark\\\">Denmark</option> <option value=\\\"Djibouti\\\">Djibouti</option> <option value=\\\"Dominica\\\">Dominica</option> <option value=\\\"Dominican Republic\\\">Dominican Republic</option> <option value=\\\"East Timor\\\">East Timor</option> <option value=\\\"Ecuador\\\">Ecuador</option> <option value=\\\"Egypt\\\">Egypt</option> <option value=\\\"El Salvador\\\">El Salvador</option> <option value=\\\"Equatorial Guinea\\\">Equatorial Guinea</option> <option value=\\\"Eritrea\\\">Eritrea</option> <option value=\\\"Estonia\\\">Estonia</option> <option value=\\\"Ethiopia\\\">Ethiopia</option> <option value=\\\"Falkland Islands (Malvinas)\\\">Falkland Islands (Malvinas)</option> <option value=\\\"Faroe Islands\\\">Faroe Islands</option> <option value=\\\"Fiji\\\">Fiji</option> <option value=\\\"Finland\\\">Finland</option> <option value=\\\"France\\\">France</option> <option value=\\\"France Metropolitan\\\">France Metropolitan</option> <option value=\\\"French Guiana\\\">French Guiana</option> <option value=\\\"French Polynesia\\\">French Polynesia</option> <option value=\\\"French Southern Territories\\\">French Southern Territories</option> <option value=\\\"Gabon\\\">Gabon</option> <option value=\\\"Gambia\\\">Gambia</option> <option value=\\\"Georgia\\\">Georgia</option> <option value=\\\"Germany\\\">Germany</option> <option value=\\\"Ghana\\\">Ghana</option> <option value=\\\"Gibraltar\\\">Gibraltar</option> <option value=\\\"Greece\\\">Greece</option> <option value=\\\"Greenland\\\">Greenland</option> <option value=\\\"Grenada\\\">Grenada</option> <option value=\\\"Guadeloupe\\\">Guadeloupe</option> <option value=\\\"Guam\\\">Guam</option> <option value=\\\"Guatemala\\\">Guatemala</option> <option value=\\\"Guinea\\\">Guinea</option> <option value=\\\"Guinea-Bissau\\\">Guinea-Bissau</option> <option value=\\\"Guyana\\\">Guyana</option> <option value=\\\"Haiti\\\">Haiti</option> <option value=\\\"Heard and Mc Donald Islands\\\">Heard and Mc Donald Islands</option> <option value=\\\"Holy See (Vatican City State)\\\">Holy See (Vatican City State)</option> <option value=\\\"Honduras\\\">Honduras</option> <option value=\\\"Hong Kong\\\">Hong Kong</option> <option value=\\\"Hungary\\\">Hungary</option> <option value=\\\"Iceland\\\">Iceland</option> <option value=\\\"India\\\">India</option> <option value=\\\"Indonesia\\\">Indonesia</option> <option value=\\\"Iran (Islamic Republic of)\\\">Iran (Islamic Republic of)</option> <option value=\\\"Iraq\\\">Iraq</option> <option value=\\\"Ireland\\\">Ireland</option> <option value=\\\"Israel\\\">Israel</option> <option value=\\\"Italy\\\">Italy</option> <option value=\\\"Jamaica\\\">Jamaica</option> <option value=\\\"Japan\\\">Japan</option> <option value=\\\"Jordan\\\">Jordan</option> <option value=\\\"Kazakhstan\\\">Kazakhstan</option> <option value=\\\"Kenya\\\">Kenya</option> <option value=\\\"Kiribati\\\">Kiribati</option> <option value=\\\"Korea, Democratic People's Republic of\\\">Korea, Democratic People's Republic of</option> <option value=\\\"Korea, Republic of\\\">Korea, Republic of</option> <option value=\\\"Kuwait\\\">Kuwait</option> <option value=\\\"Kyrgyzstan\\\">Kyrgyzstan</option> <option value=\\\"Lao, People's Democratic Republic\\\">Lao, People's Democratic Republic</option> <option value=\\\"Latvia\\\">Latvia</option> <option value=\\\"Lebanon\\\">Lebanon</option> <option value=\\\"Lesotho\\\">Lesotho</option> <option value=\\\"Liberia\\\">Liberia</option> <option value=\\\"Libyan Arab Jamahiriya\\\">Libyan Arab Jamahiriya</option> <option value=\\\"Liechtenstein\\\">Liechtenstein</option> <option value=\\\"Lithuania\\\">Lithuania</option> <option value=\\\"Luxembourg\\\">Luxembourg</option> <option value=\\\"Macau\\\">Macau</option> <option value=\\\"Macedonia, The Former Yugoslav Republic of\\\">Macedonia, The Former Yugoslav Republic of</option> <option value=\\\"Madagascar\\\">Madagascar</option> <option value=\\\"Malawi\\\">Malawi</option> <option value=\\\"Malaysia\\\">Malaysia</option> <option value=\\\"Maldives\\\">Maldives</option> <option value=\\\"Mali\\\">Mali</option> <option value=\\\"Malta\\\">Malta</option> <option value=\\\"Marshall Islands\\\">Marshall Islands</option> <option value=\\\"Martinique\\\">Martinique</option> <option value=\\\"Mauritania\\\">Mauritania</option> <option value=\\\"Mauritius\\\">Mauritius</option> <option value=\\\"Mayotte\\\">Mayotte</option> <option value=\\\"Mexico\\\">Mexico</option> <option value=\\\"Micronesia, Federated States of\\\">Micronesia, Federated States of</option> <option value=\\\"Moldova, Republic of\\\">Moldova, Republic of</option> <option value=\\\"Monaco\\\">Monaco</option> <option value=\\\"Mongolia\\\">Mongolia</option> <option value=\\\"Montserrat\\\">Montserrat</option> <option value=\\\"Morocco\\\">Morocco</option> <option value=\\\"Mozambique\\\">Mozambique</option> <option value=\\\"Myanmar\\\">Myanmar</option> <option value=\\\"Namibia\\\">Namibia</option> <option value=\\\"Nauru\\\">Nauru</option> <option value=\\\"Nepal\\\">Nepal</option> <option value=\\\"Netherlands\\\">Netherlands</option> <option value=\\\"Netherlands Antilles\\\">Netherlands Antilles</option> <option value=\\\"New Caledonia\\\">New Caledonia</option> <option value=\\\"New Zealand\\\">New Zealand</option> <option value=\\\"Nicaragua\\\">Nicaragua</option> <option value=\\\"Niger\\\">Niger</option> <option value=\\\"Nigeria\\\">Nigeria</option> <option value=\\\"Niue\\\">Niue</option> <option value=\\\"Norfolk Island\\\">Norfolk Island</option> <option value=\\\"Northern Mariana Islands\\\">Northern Mariana Islands</option> <option value=\\\"Norway\\\">Norway</option> <option value=\\\"Oman\\\">Oman</option> <option value=\\\"Pakistan\\\">Pakistan</option> <option value=\\\"Palau\\\">Palau</option> <option value=\\\"Panama\\\">Panama</option> <option value=\\\"Papua New Guinea\\\">Papua New Guinea</option> <option value=\\\"Paraguay\\\">Paraguay</option> <option value=\\\"Peru\\\">Peru</option> <option value=\\\"Philippines\\\">Philippines</option> <option value=\\\"Pitcairn\\\">Pitcairn</option> <option value=\\\"Poland\\\">Poland</option> <option value=\\\"Portugal\\\">Portugal</option> <option value=\\\"Puerto Rico\\\">Puerto Rico</option> <option value=\\\"Qatar\\\">Qatar</option> <option value=\\\"Reunion\\\">Reunion</option> <option value=\\\"Romania\\\">Romania</option> <option value=\\\"Russian Federation\\\">Russian Federation</option> <option value=\\\"Rwanda\\\">Rwanda</option> <option value=\\\"Saint Kitts and Nevis\\\">Saint Kitts and Nevis</option> <option value=\\\"Saint Lucia\\\">Saint Lucia</option> <option value=\\\"Saint Vincent and the Grenadines\\\">Saint Vincent and the Grenadines</option> <option value=\\\"Samoa\\\">Samoa</option> <option value=\\\"San Marino\\\">San Marino</option> <option value=\\\"Sao Tome and Principe\\\">Sao Tome and Principe</option> <option value=\\\"Saudi Arabia\\\">Saudi Arabia</option> <option value=\\\"Senegal\\\">Senegal</option> <option value=\\\"Seychelles\\\">Seychelles</option> <option value=\\\"Sierra Leone\\\">Sierra Leone</option> <option value=\\\"Singapore\\\">Singapore</option> <option value=\\\"Slovakia (Slovak Republic)\\\">Slovakia (Slovak Republic)</option> <option value=\\\"Slovenia\\\">Slovenia</option> <option value=\\\"Solomon Islands\\\">Solomon Islands</option> <option value=\\\"Somalia\\\">Somalia</option> <option value=\\\"South Africa\\\">South Africa</option> <option value=\\\"South Georgia and the South Sandwich Islands\\\">South Georgia and the South Sandwich Islands</option> <option value=\\\"Spain\\\">Spain</option> <option value=\\\"Sri Lanka\\\">Sri Lanka</option> <option value=\\\"St. Helena\\\">St. Helena</option> <option value=\\\"St. Pierre and Miquelon\\\">St. Pierre and Miquelon</option> <option value=\\\"Sudan\\\">Sudan</option> <option value=\\\"Suriname\\\">Suriname</option> <option value=\\\"Svalbard and Jan Mayen Islands\\\">Svalbard and Jan Mayen Islands</option> <option value=\\\"Swaziland\\\">Swaziland</option> <option value=\\\"Sweden\\\">Sweden</option> <option value=\\\"Switzerland\\\">Switzerland</option> <option value=\\\"Syrian Arab Republic\\\">Syrian Arab Republic</option> <option value=\\\"Taiwan, Province of China\\\">Taiwan, Province of China</option> <option value=\\\"Tajikistan\\\">Tajikistan</option> <option value=\\\"Tanzania, United Republic of\\\">Tanzania, United Republic of</option> <option value=\\\"Thailand\\\">Thailand</option> <option value=\\\"Togo\\\">Togo</option> <option value=\\\"Tokelau\\\">Tokelau</option> <option value=\\\"Tonga\\\">Tonga</option> <option value=\\\"Trinidad and Tobago\\\">Trinidad and Tobago</option> <option value=\\\"Tunisia\\\">Tunisia</option> <option value=\\\"Turkey\\\">Turkey</option> <option value=\\\"Turkmenistan\\\">Turkmenistan</option> <option value=\\\"Turks and Caicos Islands\\\">Turks and Caicos Islands</option> <option value=\\\"Tuvalu\\\">Tuvalu</option> <option value=\\\"Uganda\\\">Uganda</option> <option value=\\\"Ukraine\\\">Ukraine</option> <option value=\\\"United Arab Emirates\\\">United Arab Emirates</option> <option value=\\\"United Kingdom\\\">United Kingdom</option> <option value=\\\"United States\\\">United States</option> <option value=\\\"United States Minor Outlying Islands\\\">United States Minor Outlying Islands</option> <option value=\\\"Uruguay\\\">Uruguay</option> <option value=\\\"Uzbekistan\\\">Uzbekistan</option> <option value=\\\"Vanuatu\\\">Vanuatu</option> <option value=\\\"Venezuela\\\">Venezuela</option> <option value=\\\"Vietnam\\\">Vietnam</option> <option value=\\\"Virgin Islands (British)\\\">Virgin Islands (British)</option> <option value=\\\"Virgin Islands (U.S.)\\\">Virgin Islands (U.S.)</option> <option value=\\\"Wallis and Futuna Islands\\\">Wallis and Futuna Islands</option> <option value=\\\"Western Sahara\\\">Western Sahara</option> <option value=\\\"Yemen\\\">Yemen</option> <option value=\\\"Yugoslavia\\\">Yugoslavia</option> <option value=\\\"Zambia\\\">Zambia</option> <option value=\\\"Zimbabwe\\\">Zimbabwe</option> </select> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-card-holder-zip-code\\\">Zip</label> <input class=\\\"form-control\\\" placeholder=\\\"1234\\\" name=\\\"zipCode\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-card-holder-zip-code\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-card-exp-date\\\">Date of Expire</label> <input class=\\\"form-control\\\" placeholder=\\\"15/2024\\\" name=\\\"expDate\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-card-exp-date\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-card-cvv\\\">CVV</label> <input class=\\\"form-control\\\" placeholder=\\\"123\\\" name=\\\"cvv\\\" maxlength=\\\"3\\\" pattern=\\\"[0-9]{3}\\\" type=\\\"number\\\" id=\\\"bootstrap-wizard-card-cvv\\\" /> </div> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-tab4\\\" id=\\\"bootstrap-wizard-tab4\\\"> <div class=\\\"row flex-center pb-8 pt-4 gx-3 gy-4\\\"> <div class=\\\"col-12 col-sm-auto\\\"> <div class=\\\"text-center text-sm-start\\\"><img class=\\\"d-dark-none\\\" src=\\\"../../assets/img/spot-illustrations/38.webp\\\" alt=\\\"\\\" width=\\\"220\\\" /><img class=\\\"d-light-none\\\" src=\\\"../../assets/img/spot-illustrations/dark_38.webp\\\" alt=\\\"\\\" width=\\\"220\\\" /></div> </div> <div class=\\\"col-12 col-sm-auto\\\"> <div class=\\\"text-center text-sm-start\\\"> <h5 class=\\\"mb-3\\\">You are all set!</h5> <p class=\\\"text-body-emphasis fs-9\\\">Now you can access your account<br />anytime anywhere</p><a class=\\\"btn btn-primary px-6\\\" href=\\\"../../modules/forms/wizard.html\\\">Start Over</a> </div> </div> </div> </div> </div> </div> <div class=\\\"card-footer border-top-0\\\" data-wizard-footer=\\\"data-wizard-footer\\\"> <div class=\\\"d-flex pager wizard list-inline mb-0\\\"> <button class=\\\"d-none btn btn-link ps-0\\\" type=\\\"button\\\" data-wizard-prev-btn=\\\"data-wizard-prev-btn\\\"><span class=\\\"fas fa-chevron-left me-1\\\" data-fa-transform=\\\"shrink-3\\\"></span>Previous</button> <div class=\\\"flex-1 text-end\\\"> <button class=\\\"btn btn-primary px-6 px-sm-6\\\" type=\\\"submit\\\" data-wizard-next-btn=\\\"data-wizard-next-btn\\\">Next<span class=\\\"fas fa-chevron-right ms-1\\\" data-fa-transform=\\\"shrink-3\\\"> </span></button> </div> </div> </div> </div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="card theme-wizard mb-5" data-theme-wizard>
                <div className="card-header bg-body-highlight pt-3 pb-2 border-bottom-0">
                  <ul className="nav justify-content-between nav-wizard nav-wizard-success">
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-tab1" className="nav-link active fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"1"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-lock">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Account
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-tab2" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"2"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-user">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Personal
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-tab3" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"3"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-file-alt">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Billing
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-tab4" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"4"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-check">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Done
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pt-4 pb-0">
                  <div className="tab-content">
                    <div className="tab-pane active" role="tabpanel" aria-labelledby="bootstrap-wizard-tab1" id="bootstrap-wizard-tab1">
                      <form id="wizardForm1" noValidate data-wizard-form={"1"}>
                        <div className="mb-2">
                          <label className="form-label text-body" htmlFor="bootstrap-wizard-wizard-name">
Name
                          </label>
                          <input className="form-control" type="text" name placeholder="John Smith" id="bootstrap-wizard-wizard-name" />
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-wizard-email">
Email*
                          </label>
                          <input className="form-control" type="email" name="email" placeholder="Email address" pattern={"^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"} id="bootstrap-wizard-wizard-email" />
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-sm-6">
                            <div className="mb-2 mb-sm-0">
                              <label className="form-label text-body" htmlFor="bootstrap-wizard-wizard-password">
Password*
                              </label>
                              <input className="form-control" type="password" name="password" placeholder="Password" id="bootstrap-wizard-wizard-password" data-wizard-password={"true"} />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-2">
                              <label className="form-label text-body" htmlFor="bootstrap-wizard-wizard-confirm-password">
Confirm Password*
                              </label>
                              <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" id="bootstrap-wizard-wizard-confirm-password" data-wizard-confirm-password={"true"} />
                            </div>
                          </div>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="terms" defaultChecked id="bootstrap-wizard-wizard-checkbox" />
                          <label className="form-check-label text-body" htmlFor="bootstrap-wizard-wizard-checkbox">
I accept the 
                            <a href="#!">
terms 
                            </a>
and 
                            <a href="#!">
privacy policy
                            </a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab2" id="bootstrap-wizard-tab2">
                      <form id="wizardForm2" noValidate data-wizard-form={"2"}>
                        <div className="row g-4 mb-4" data-dropzone data-options={"{\"maxFiles\":1,\"data\":[{\"name\":\"avatar.webp\",\"size\":\"54kb\",\"url\":\"../../assets/img/team\"}]}"}>
                          <div className="fallback">
                            <input type="file" name="file" />
                          </div>
                          <div className="col-md-auto">
                            <div className="dz-preview dz-preview-single">
                              <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                <div className="avatar avatar-4xl">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="..." className="rounded-circle avatar-placeholder" />
                                </div>
                                <div className="dz-progress">
                                  <span className="dz-upload" data-dz-uploadprogress={""}>                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="dz-message dropzone-area px-2 py-3" data-dz-message>
                              <div className="text-center text-body-emphasis">
                                <h5 className="mb-2">
                                  <span className="fa-solid fa-upload me-2">                                  </span>
Upload Profile Picture
                                </h5>
                                <p className="mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm">
Upload a 300x300 jpg image with 
                                  <br />
a maximum size of 400KB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-gender">
Gender
                          </label>
                          <select className="form-select" name="gender" id="bootstrap-wizard-gender">
                            <option value="">
Select your gender ...
                            </option>
                            <option value="Male">
Male
                            </option>
                            <option value="Female">
Female
                            </option>
                            <option value="Other">
Other
                            </option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-wizard-phone">
Phone
                          </label>
                          <input className="form-control" type="text" name="phone" placeholder="Phone" id="bootstrap-wizard-wizard-phone" />
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-wizard-datepicker">
Date of Birth
                          </label>
                          <input className="form-control datetimepicker" type="text" placeholder="d/m/y" data-options={"{\"dateFormat\":\"d/m/y\",\"disableMobile\":true}"} id="bootstrap-wizard-wizard-datepicker" />
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-wizard-address">
Address
                          </label>
                          <textarea className="form-control" rows={4} id="bootstrap-wizard-wizard-address" defaultValue="" />
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab3" id="bootstrap-wizard-tab3">
                      <form className="mb-2" id="wizardForm3" noValidate data-wizard-form={"3"}>
                        <div className="row gx-3 gy-2">
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-card-number">
Card Number
                            </label>
                            <input className="form-control" placeholder="XXXX XXXX XXXX XXXX" type="text" id="bootstrap-wizard-card-number" />
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-card-name">
Name
                            </label>
                            <input className="form-control" placeholder="John Doe" name="cardName" type="text" id="bootstrap-wizard-card-name" />
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-card-holder-country">
Country
                            </label>
                            <select className="form-select" name="customSelectCountry" id="bootstrap-wizard-card-holder-country">
                              <option value="">
Select your country ...
                              </option>
                              <option value="Afghanistan">
Afghanistan
                              </option>
                              <option value="Albania">
Albania
                              </option>
                              <option value="Algeria">
Algeria
                              </option>
                              <option value="American Samoa">
American Samoa
                              </option>
                              <option value="Andorra">
Andorra
                              </option>
                              <option value="Angola">
Angola
                              </option>
                              <option value="Anguilla">
Anguilla
                              </option>
                              <option value="Antarctica">
Antarctica
                              </option>
                              <option value="Antigua and Barbuda">
Antigua and Barbuda
                              </option>
                              <option value="Argentina">
Argentina
                              </option>
                              <option value="Armenia">
Armenia
                              </option>
                              <option value="Aruba">
Aruba
                              </option>
                              <option value="Australia">
Australia
                              </option>
                              <option value="Austria">
Austria
                              </option>
                              <option value="Azerbaijan">
Azerbaijan
                              </option>
                              <option value="Bahamas">
Bahamas
                              </option>
                              <option value="Bahrain">
Bahrain
                              </option>
                              <option value="Bangladesh">
Bangladesh
                              </option>
                              <option value="Barbados">
Barbados
                              </option>
                              <option value="Belarus">
Belarus
                              </option>
                              <option value="Belgium">
Belgium
                              </option>
                              <option value="Belize">
Belize
                              </option>
                              <option value="Benin">
Benin
                              </option>
                              <option value="Bermuda">
Bermuda
                              </option>
                              <option value="Bhutan">
Bhutan
                              </option>
                              <option value="Bolivia">
Bolivia
                              </option>
                              <option value="Bosnia and Herzegowina">
Bosnia and Herzegowina
                              </option>
                              <option value="Botswana">
Botswana
                              </option>
                              <option value="Bouvet Island">
Bouvet Island
                              </option>
                              <option value="Brazil">
Brazil
                              </option>
                              <option value="British Indian Ocean Territory">
British Indian Ocean Territory
                              </option>
                              <option value="Brunei Darussalam">
Brunei Darussalam
                              </option>
                              <option value="Bulgaria">
Bulgaria
                              </option>
                              <option value="Burkina Faso">
Burkina Faso
                              </option>
                              <option value="Burundi">
Burundi
                              </option>
                              <option value="Cambodia">
Cambodia
                              </option>
                              <option value="Cameroon">
Cameroon
                              </option>
                              <option value="Canada">
Canada
                              </option>
                              <option value="Cape Verde">
Cape Verde
                              </option>
                              <option value="Cayman Islands">
Cayman Islands
                              </option>
                              <option value="Central African Republic">
Central African Republic
                              </option>
                              <option value="Chad">
Chad
                              </option>
                              <option value="Chile">
Chile
                              </option>
                              <option value="China">
China
                              </option>
                              <option value="Christmas Island">
Christmas Island
                              </option>
                              <option value="Cocos (Keeling) Islands">
Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">
Colombia
                              </option>
                              <option value="Comoros">
Comoros
                              </option>
                              <option value="Congo">
Congo
                              </option>
                              <option value="Congo, the Democratic Republic of the">
Congo, the Democratic Republic of the
                              </option>
                              <option value="Cook Islands">
Cook Islands
                              </option>
                              <option value="Costa Rica">
Costa Rica
                              </option>
                              <option value={"Cote d'Ivoire"}>
Cote d'Ivoire
                              </option>
                              <option value="Croatia (Hrvatska)">
Croatia (Hrvatska)
                              </option>
                              <option value="Cuba">
Cuba
                              </option>
                              <option value="Cyprus">
Cyprus
                              </option>
                              <option value="Czech Republic">
Czech Republic
                              </option>
                              <option value="Denmark">
Denmark
                              </option>
                              <option value="Djibouti">
Djibouti
                              </option>
                              <option value="Dominica">
Dominica
                              </option>
                              <option value="Dominican Republic">
Dominican Republic
                              </option>
                              <option value="East Timor">
East Timor
                              </option>
                              <option value="Ecuador">
Ecuador
                              </option>
                              <option value="Egypt">
Egypt
                              </option>
                              <option value="El Salvador">
El Salvador
                              </option>
                              <option value="Equatorial Guinea">
Equatorial Guinea
                              </option>
                              <option value="Eritrea">
Eritrea
                              </option>
                              <option value="Estonia">
Estonia
                              </option>
                              <option value="Ethiopia">
Ethiopia
                              </option>
                              <option value="Falkland Islands (Malvinas)">
Falkland Islands (Malvinas)
                              </option>
                              <option value="Faroe Islands">
Faroe Islands
                              </option>
                              <option value="Fiji">
Fiji
                              </option>
                              <option value="Finland">
Finland
                              </option>
                              <option value="France">
France
                              </option>
                              <option value="France Metropolitan">
France Metropolitan
                              </option>
                              <option value="French Guiana">
French Guiana
                              </option>
                              <option value="French Polynesia">
French Polynesia
                              </option>
                              <option value="French Southern Territories">
French Southern Territories
                              </option>
                              <option value="Gabon">
Gabon
                              </option>
                              <option value="Gambia">
Gambia
                              </option>
                              <option value="Georgia">
Georgia
                              </option>
                              <option value="Germany">
Germany
                              </option>
                              <option value="Ghana">
Ghana
                              </option>
                              <option value="Gibraltar">
Gibraltar
                              </option>
                              <option value="Greece">
Greece
                              </option>
                              <option value="Greenland">
Greenland
                              </option>
                              <option value="Grenada">
Grenada
                              </option>
                              <option value="Guadeloupe">
Guadeloupe
                              </option>
                              <option value="Guam">
Guam
                              </option>
                              <option value="Guatemala">
Guatemala
                              </option>
                              <option value="Guinea">
Guinea
                              </option>
                              <option value="Guinea-Bissau">
Guinea-Bissau
                              </option>
                              <option value="Guyana">
Guyana
                              </option>
                              <option value="Haiti">
Haiti
                              </option>
                              <option value="Heard and Mc Donald Islands">
Heard and Mc Donald Islands
                              </option>
                              <option value="Holy See (Vatican City State)">
Holy See (Vatican City State)
                              </option>
                              <option value="Honduras">
Honduras
                              </option>
                              <option value="Hong Kong">
Hong Kong
                              </option>
                              <option value="Hungary">
Hungary
                              </option>
                              <option value="Iceland">
Iceland
                              </option>
                              <option value="India">
India
                              </option>
                              <option value="Indonesia">
Indonesia
                              </option>
                              <option value="Iran (Islamic Republic of)">
Iran (Islamic Republic of)
                              </option>
                              <option value="Iraq">
Iraq
                              </option>
                              <option value="Ireland">
Ireland
                              </option>
                              <option value="Israel">
Israel
                              </option>
                              <option value="Italy">
Italy
                              </option>
                              <option value="Jamaica">
Jamaica
                              </option>
                              <option value="Japan">
Japan
                              </option>
                              <option value="Jordan">
Jordan
                              </option>
                              <option value="Kazakhstan">
Kazakhstan
                              </option>
                              <option value="Kenya">
Kenya
                              </option>
                              <option value="Kiribati">
Kiribati
                              </option>
                              <option value={"Korea, Democratic People's Republic of"}>
Korea, Democratic People's Republic of
                              </option>
                              <option value="Korea, Republic of">
Korea, Republic of
                              </option>
                              <option value="Kuwait">
Kuwait
                              </option>
                              <option value="Kyrgyzstan">
Kyrgyzstan
                              </option>
                              <option value={"Lao, People's Democratic Republic"}>
Lao, People's Democratic Republic
                              </option>
                              <option value="Latvia">
Latvia
                              </option>
                              <option value="Lebanon">
Lebanon
                              </option>
                              <option value="Lesotho">
Lesotho
                              </option>
                              <option value="Liberia">
Liberia
                              </option>
                              <option value="Libyan Arab Jamahiriya">
Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein">
Liechtenstein
                              </option>
                              <option value="Lithuania">
Lithuania
                              </option>
                              <option value="Luxembourg">
Luxembourg
                              </option>
                              <option value="Macau">
Macau
                              </option>
                              <option value="Macedonia, The Former Yugoslav Republic of">
Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="Madagascar">
Madagascar
                              </option>
                              <option value="Malawi">
Malawi
                              </option>
                              <option value="Malaysia">
Malaysia
                              </option>
                              <option value="Maldives">
Maldives
                              </option>
                              <option value="Mali">
Mali
                              </option>
                              <option value="Malta">
Malta
                              </option>
                              <option value="Marshall Islands">
Marshall Islands
                              </option>
                              <option value="Martinique">
Martinique
                              </option>
                              <option value="Mauritania">
Mauritania
                              </option>
                              <option value="Mauritius">
Mauritius
                              </option>
                              <option value="Mayotte">
Mayotte
                              </option>
                              <option value="Mexico">
Mexico
                              </option>
                              <option value="Micronesia, Federated States of">
Micronesia, Federated States of
                              </option>
                              <option value="Moldova, Republic of">
Moldova, Republic of
                              </option>
                              <option value="Monaco">
Monaco
                              </option>
                              <option value="Mongolia">
Mongolia
                              </option>
                              <option value="Montserrat">
Montserrat
                              </option>
                              <option value="Morocco">
Morocco
                              </option>
                              <option value="Mozambique">
Mozambique
                              </option>
                              <option value="Myanmar">
Myanmar
                              </option>
                              <option value="Namibia">
Namibia
                              </option>
                              <option value="Nauru">
Nauru
                              </option>
                              <option value="Nepal">
Nepal
                              </option>
                              <option value="Netherlands">
Netherlands
                              </option>
                              <option value="Netherlands Antilles">
Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
New Caledonia
                              </option>
                              <option value="New Zealand">
New Zealand
                              </option>
                              <option value="Nicaragua">
Nicaragua
                              </option>
                              <option value="Niger">
Niger
                              </option>
                              <option value="Nigeria">
Nigeria
                              </option>
                              <option value="Niue">
Niue
                              </option>
                              <option value="Norfolk Island">
Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
Northern Mariana Islands
                              </option>
                              <option value="Norway">
Norway
                              </option>
                              <option value="Oman">
Oman
                              </option>
                              <option value="Pakistan">
Pakistan
                              </option>
                              <option value="Palau">
Palau
                              </option>
                              <option value="Panama">
Panama
                              </option>
                              <option value="Papua New Guinea">
Papua New Guinea
                              </option>
                              <option value="Paraguay">
Paraguay
                              </option>
                              <option value="Peru">
Peru
                              </option>
                              <option value="Philippines">
Philippines
                              </option>
                              <option value="Pitcairn">
Pitcairn
                              </option>
                              <option value="Poland">
Poland
                              </option>
                              <option value="Portugal">
Portugal
                              </option>
                              <option value="Puerto Rico">
Puerto Rico
                              </option>
                              <option value="Qatar">
Qatar
                              </option>
                              <option value="Reunion">
Reunion
                              </option>
                              <option value="Romania">
Romania
                              </option>
                              <option value="Russian Federation">
Russian Federation
                              </option>
                              <option value="Rwanda">
Rwanda
                              </option>
                              <option value="Saint Kitts and Nevis">
Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia">
Saint Lucia
                              </option>
                              <option value="Saint Vincent and the Grenadines">
Saint Vincent and the Grenadines
                              </option>
                              <option value="Samoa">
Samoa
                              </option>
                              <option value="San Marino">
San Marino
                              </option>
                              <option value="Sao Tome and Principe">
Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">
Saudi Arabia
                              </option>
                              <option value="Senegal">
Senegal
                              </option>
                              <option value="Seychelles">
Seychelles
                              </option>
                              <option value="Sierra Leone">
Sierra Leone
                              </option>
                              <option value="Singapore">
Singapore
                              </option>
                              <option value="Slovakia (Slovak Republic)">
Slovakia (Slovak Republic)
                              </option>
                              <option value="Slovenia">
Slovenia
                              </option>
                              <option value="Solomon Islands">
Solomon Islands
                              </option>
                              <option value="Somalia">
Somalia
                              </option>
                              <option value="South Africa">
South Africa
                              </option>
                              <option value="South Georgia and the South Sandwich Islands">
South Georgia and the South Sandwich Islands
                              </option>
                              <option value="Spain">
Spain
                              </option>
                              <option value="Sri Lanka">
Sri Lanka
                              </option>
                              <option value="St. Helena">
St. Helena
                              </option>
                              <option value="St. Pierre and Miquelon">
St. Pierre and Miquelon
                              </option>
                              <option value="Sudan">
Sudan
                              </option>
                              <option value="Suriname">
Suriname
                              </option>
                              <option value="Svalbard and Jan Mayen Islands">
Svalbard and Jan Mayen Islands
                              </option>
                              <option value="Swaziland">
Swaziland
                              </option>
                              <option value="Sweden">
Sweden
                              </option>
                              <option value="Switzerland">
Switzerland
                              </option>
                              <option value="Syrian Arab Republic">
Syrian Arab Republic
                              </option>
                              <option value="Taiwan, Province of China">
Taiwan, Province of China
                              </option>
                              <option value="Tajikistan">
Tajikistan
                              </option>
                              <option value="Tanzania, United Republic of">
Tanzania, United Republic of
                              </option>
                              <option value="Thailand">
Thailand
                              </option>
                              <option value="Togo">
Togo
                              </option>
                              <option value="Tokelau">
Tokelau
                              </option>
                              <option value="Tonga">
Tonga
                              </option>
                              <option value="Trinidad and Tobago">
Trinidad and Tobago
                              </option>
                              <option value="Tunisia">
Tunisia
                              </option>
                              <option value="Turkey">
Turkey
                              </option>
                              <option value="Turkmenistan">
Turkmenistan
                              </option>
                              <option value="Turks and Caicos Islands">
Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">
Tuvalu
                              </option>
                              <option value="Uganda">
Uganda
                              </option>
                              <option value="Ukraine">
Ukraine
                              </option>
                              <option value="United Arab Emirates">
United Arab Emirates
                              </option>
                              <option value="United Kingdom">
United Kingdom
                              </option>
                              <option value="United States">
United States
                              </option>
                              <option value="United States Minor Outlying Islands">
United States Minor Outlying Islands
                              </option>
                              <option value="Uruguay">
Uruguay
                              </option>
                              <option value="Uzbekistan">
Uzbekistan
                              </option>
                              <option value="Vanuatu">
Vanuatu
                              </option>
                              <option value="Venezuela">
Venezuela
                              </option>
                              <option value="Vietnam">
Vietnam
                              </option>
                              <option value="Virgin Islands (British)">
Virgin Islands (British)
                              </option>
                              <option value="Virgin Islands (U.S.)">
Virgin Islands (U.S.)
                              </option>
                              <option value="Wallis and Futuna Islands">
Wallis and Futuna Islands
                              </option>
                              <option value="Western Sahara">
Western Sahara
                              </option>
                              <option value="Yemen">
Yemen
                              </option>
                              <option value="Yugoslavia">
Yugoslavia
                              </option>
                              <option value="Zambia">
Zambia
                              </option>
                              <option value="Zimbabwe">
Zimbabwe
                              </option>
                            </select>
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-card-holder-zip-code">
Zip
                            </label>
                            <input className="form-control" placeholder="1234" name="zipCode" type="text" id="bootstrap-wizard-card-holder-zip-code" />
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-card-exp-date">
Date of Expire
                            </label>
                            <input className="form-control" placeholder="15/2024" name="expDate" type="text" id="bootstrap-wizard-card-exp-date" />
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-card-cvv">
CVV
                            </label>
                            <input className="form-control" placeholder="123" name="cvv" maxLength={3} pattern={"[0-9]{3}"} type="number" id="bootstrap-wizard-card-cvv" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-tab4" id="bootstrap-wizard-tab4">
                      <div className="row flex-center pb-8 pt-4 gx-3 gy-4">
                        <div className="col-12 col-sm-auto">
                          <div className="text-center text-sm-start">
                            <PhoenixImage src="/assets/img/spot-illustrations/38.webp" alt="" className="d-dark-none" width={220} />
                            <PhoenixImage src="/assets/img/spot-illustrations/dark_38.webp" alt="" className="d-light-none" width={220} />
                          </div>
                        </div>
                        <div className="col-12 col-sm-auto">
                          <div className="text-center text-sm-start">
                            <h5 className="mb-3">
You are all set!
                            </h5>
                            <p className="text-body-emphasis fs-9">
Now you can access your account
                              <br />
anytime anywhere
                            </p>
                            <PhoenixLink href="/modules/forms/wizard" className="btn btn-primary px-6">
Start Over
                            </PhoenixLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top-0" data-wizard-footer>
                  <div className="d-flex pager wizard list-inline mb-0">
                    <button className="d-none btn btn-link ps-0" type="button" data-wizard-prev-btn>
                      <span className="fas fa-chevron-left me-1" data-fa-transform={"shrink-3"}>                      </span>
Previous
                    </button>
                    <div className="flex-1 text-end">
                      <button className="btn btn-primary px-6 px-sm-6" type="submit" data-wizard-next-btn>
Next
                        <span className="fas fa-chevron-right ms-1" data-fa-transform={"shrink-3"}>                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xxl-6">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
With Validation
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#with-validation-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="with-validation-code" aria-expanded="false">
                    <span className="me-2" data-feather={"code"}>                    </span>View code
                  </a>
                  <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                    <span className="me-2" data-feather={"eye"}>                    </span>Hide code
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="collapse code-collapse" id="with-validation-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card theme-wizard mb-5\\\" data-theme-wizard=\\\"data-theme-wizard\\\"> <div class=\\\"card-header bg-body-highlight pt-3 pb-2 border-bottom-0\\\"> <ul class=\\\"nav justify-content-between nav-wizard nav-wizard-success\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active fw-semibold\\\" href=\\\"#bootstrap-wizard-validation-tab1\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"1\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-lock\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Account</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link fw-semibold\\\" href=\\\"#bootstrap-wizard-validation-tab2\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"2\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-user\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Personal</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link fw-semibold\\\" href=\\\"#bootstrap-wizard-validation-tab3\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"3\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-file-alt\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Billing</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link fw-semibold\\\" href=\\\"#bootstrap-wizard-validation-tab4\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"4\\\"> <div class=\\\"text-center d-inline-block\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fas fa-check\\\"></span></span></span><span class=\\\"d-none d-md-block mt-1 fs-9\\\">Done</span></div> </a></li> </ul> </div> <div class=\\\"card-body pt-4 pb-0\\\"> <div class=\\\"tab-content\\\"> <div class=\\\"tab-pane active\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-validation-tab1\\\" id=\\\"bootstrap-wizard-validation-tab1\\\"> <form class=\\\"needs-validation\\\" id=\\\"wizardValidationForm1\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"1\\\"> <div class=\\\"mb-2\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-wizard-validation-wizard-name\\\">Name</label> <input class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"name\\\" placeholder=\\\"John Smith\\\" required=\\\"required\\\" id=\\\"bootstrap-wizard-validation-wizard-name\\\" /> <div class=\\\"invalid-feedback\\\">Please choose a username.</div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-wizard-email\\\">Email*</label> <input class=\\\"form-control\\\" type=\\\"email\\\" name=\\\"email\\\" placeholder=\\\"Email address\\\" pattern=\\\"^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$\\\" required=\\\"required\\\" id=\\\"bootstrap-wizard-validation-wizard-email\\\" /> <div class=\\\"invalid-feedback\\\">You must add email</div> </div> <div class=\\\"row g-3 mb-3\\\"> <div class=\\\"col-sm-6\\\"> <div class=\\\"mb-2 mb-sm-0\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-wizard-validation-wizard-password\\\">Password*</label> <input class=\\\"form-control\\\" type=\\\"password\\\" name=\\\"password\\\" placeholder=\\\"Password\\\" required=\\\"required\\\" id=\\\"bootstrap-wizard-validation-wizard-password\\\" data-wizard-password=\\\"true\\\" /> <div class=\\\"invalid-feedback\\\">Please enter password</div> </div> </div> <div class=\\\"col-sm-6\\\"> <div class=\\\"mb-2\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-wizard-validation-wizard-confirm-password\\\">Confirm Password*</label> <input class=\\\"form-control\\\" type=\\\"password\\\" name=\\\"confirmPassword\\\" placeholder=\\\"Confirm Password\\\" required=\\\"required\\\" id=\\\"bootstrap-wizard-validation-wizard-confirm-password\\\" data-wizard-confirm-password=\\\"true\\\" /> <div class=\\\"invalid-feedback\\\">Passwords need to match</div> </div> </div> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" name=\\\"terms\\\" required=\\\"required\\\" checked=\\\"checked\\\" id=\\\"bootstrap-wizard-validation-wizard-checkbox\\\" /> <label class=\\\"form-check-label text-body\\\" for=\\\"bootstrap-wizard-validation-wizard-checkbox\\\">I accept the <a href=\\\"#!\\\">terms </a>and <a href=\\\"#!\\\">privacy policy</a></label> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-validation-tab2\\\" id=\\\"bootstrap-wizard-validation-tab2\\\"> <form class=\\\"needs-validation\\\" id=\\\"wizardValidationForm2\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"2\\\"> <div class=\\\"row g-4 mb-4\\\" data-dropzone=\\\"data-dropzone\\\" data-options='{\\\"maxFiles\\\":1,\\\"data\\\":[{\\\"name\\\":\\\"avatar.webp\\\",\\\"size\\\":\\\"54kb\\\",\\\"url\\\":\\\"../../assets/img/team\\\"}]}'> <div class=\\\"fallback\\\"> <input type=\\\"file\\\" name=\\\"file\\\" /> </div> <div class=\\\"col-md-auto\\\"> <div class=\\\"dz-preview dz-preview-single\\\"> <div class=\\\"dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0\\\"> <div class=\\\"avatar avatar-4xl\\\"><img class=\\\"rounded-circle avatar-placeholder\\\" src=\\\"../../assets/img/team/avatar.webp\\\" alt=\\\"...\\\" data-dz-thumbnail=\\\"data-dz-thumbnail\\\" /></div> <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress=\\\"\\\"></span></div> </div> </div> </div> <div class=\\\"col-md\\\"> <div class=\\\"dz-message dropzone-area px-2 py-3\\\" data-dz-message=\\\"data-dz-message\\\"> <div class=\\\"text-center text-body-emphasis\\\"> <h5 class=\\\"mb-2\\\"><span class=\\\"fa-solid fa-upload me-2\\\"></span>Upload Profile Picture</h5> <p class=\\\"mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm\\\">Upload a 300x300 jpg image with <br />a maximum size of 400KB</p> </div> </div> </div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-gender\\\">Gender</label> <select class=\\\"form-select\\\" name=\\\"gender\\\" id=\\\"bootstrap-wizard-validation-gender\\\" required=\\\"required\\\"> <option value=\\\"\\\">Select your gender ...</option> <option value=\\\"Male\\\">Male</option> <option value=\\\"Female\\\">Female</option> <option value=\\\"Other\\\">Other</option> </select> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-wizard-phone\\\">Phone</label> <input class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"phone\\\" placeholder=\\\"Phone\\\" id=\\\"bootstrap-wizard-validation-wizard-phone\\\" required=\\\"required\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-wizard-datepicker\\\">Date of Birth</label> <input class=\\\"form-control datetimepicker\\\" type=\\\"text\\\" placeholder=\\\"d/m/y\\\" data-options='{\\\"dateFormat\\\":\\\"d/m/y\\\",\\\"disableMobile\\\":true}' required=\\\"required\\\" id=\\\"bootstrap-wizard-validation-wizard-datepicker\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-wizard-address\\\">Address</label> <textarea class=\\\"form-control\\\" rows=\\\"4\\\" id=\\\"bootstrap-wizard-validation-wizard-address\\\" required=\\\"required\\\" defaultValue=\"\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-validation-tab3\\\" id=\\\"bootstrap-wizard-validation-tab3\\\"> <form class=\\\"mb-2 needs-validation\\\" id=\\\"wizardValidationForm3\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"3\\\"> <div class=\\\"row gx-3 gy-2\\\"> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-card-number\\\">Card Number</label> <input class=\\\"form-control\\\" placeholder=\\\"XXXX XXXX XXXX XXXX\\\" type=\\\"text\\\" required=\\\"required\\\" id=\\\"bootstrap-wizard-validation-card-number\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-card-name\\\">Name</label> <input class=\\\"form-control\\\" placeholder=\\\"John Doe\\\" name=\\\"cardName\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-validation-card-name\\\" required=\\\"required\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-card-holder-country\\\">Country</label> <select class=\\\"form-select\\\" name=\\\"customSelectCountry\\\" id=\\\"bootstrap-wizard-validation-card-holder-country\\\" required=\\\"required\\\"> <option value=\\\"\\\">Select your country ...</option> <option value=\\\"Afghanistan\\\">Afghanistan</option> <option value=\\\"Albania\\\">Albania</option> <option value=\\\"Algeria\\\">Algeria</option> <option value=\\\"American Samoa\\\">American Samoa</option> <option value=\\\"Andorra\\\">Andorra</option> <option value=\\\"Angola\\\">Angola</option> <option value=\\\"Anguilla\\\">Anguilla</option> <option value=\\\"Antarctica\\\">Antarctica</option> <option value=\\\"Antigua and Barbuda\\\">Antigua and Barbuda</option> <option value=\\\"Argentina\\\">Argentina</option> <option value=\\\"Armenia\\\">Armenia</option> <option value=\\\"Aruba\\\">Aruba</option> <option value=\\\"Australia\\\">Australia</option> <option value=\\\"Austria\\\">Austria</option> <option value=\\\"Azerbaijan\\\">Azerbaijan</option> <option value=\\\"Bahamas\\\">Bahamas</option> <option value=\\\"Bahrain\\\">Bahrain</option> <option value=\\\"Bangladesh\\\">Bangladesh</option> <option value=\\\"Barbados\\\">Barbados</option> <option value=\\\"Belarus\\\">Belarus</option> <option value=\\\"Belgium\\\">Belgium</option> <option value=\\\"Belize\\\">Belize</option> <option value=\\\"Benin\\\">Benin</option> <option value=\\\"Bermuda\\\">Bermuda</option> <option value=\\\"Bhutan\\\">Bhutan</option> <option value=\\\"Bolivia\\\">Bolivia</option> <option value=\\\"Bosnia and Herzegowina\\\">Bosnia and Herzegowina</option> <option value=\\\"Botswana\\\">Botswana</option> <option value=\\\"Bouvet Island\\\">Bouvet Island</option> <option value=\\\"Brazil\\\">Brazil</option> <option value=\\\"British Indian Ocean Territory\\\">British Indian Ocean Territory</option> <option value=\\\"Brunei Darussalam\\\">Brunei Darussalam</option> <option value=\\\"Bulgaria\\\">Bulgaria</option> <option value=\\\"Burkina Faso\\\">Burkina Faso</option> <option value=\\\"Burundi\\\">Burundi</option> <option value=\\\"Cambodia\\\">Cambodia</option> <option value=\\\"Cameroon\\\">Cameroon</option> <option value=\\\"Canada\\\">Canada</option> <option value=\\\"Cape Verde\\\">Cape Verde</option> <option value=\\\"Cayman Islands\\\">Cayman Islands</option> <option value=\\\"Central African Republic\\\">Central African Republic</option> <option value=\\\"Chad\\\">Chad</option> <option value=\\\"Chile\\\">Chile</option> <option value=\\\"China\\\">China</option> <option value=\\\"Christmas Island\\\">Christmas Island</option> <option value=\\\"Cocos (Keeling) Islands\\\">Cocos (Keeling) Islands</option> <option value=\\\"Colombia\\\">Colombia</option> <option value=\\\"Comoros\\\">Comoros</option> <option value=\\\"Congo\\\">Congo</option> <option value=\\\"Congo, the Democratic Republic of the\\\">Congo, the Democratic Republic of the</option> <option value=\\\"Cook Islands\\\">Cook Islands</option> <option value=\\\"Costa Rica\\\">Costa Rica</option> <option value=\\\"Cote d'Ivoire\\\">Cote d'Ivoire</option> <option value=\\\"Croatia (Hrvatska)\\\">Croatia (Hrvatska)</option> <option value=\\\"Cuba\\\">Cuba</option> <option value=\\\"Cyprus\\\">Cyprus</option> <option value=\\\"Czech Republic\\\">Czech Republic</option> <option value=\\\"Denmark\\\">Denmark</option> <option value=\\\"Djibouti\\\">Djibouti</option> <option value=\\\"Dominica\\\">Dominica</option> <option value=\\\"Dominican Republic\\\">Dominican Republic</option> <option value=\\\"East Timor\\\">East Timor</option> <option value=\\\"Ecuador\\\">Ecuador</option> <option value=\\\"Egypt\\\">Egypt</option> <option value=\\\"El Salvador\\\">El Salvador</option> <option value=\\\"Equatorial Guinea\\\">Equatorial Guinea</option> <option value=\\\"Eritrea\\\">Eritrea</option> <option value=\\\"Estonia\\\">Estonia</option> <option value=\\\"Ethiopia\\\">Ethiopia</option> <option value=\\\"Falkland Islands (Malvinas)\\\">Falkland Islands (Malvinas)</option> <option value=\\\"Faroe Islands\\\">Faroe Islands</option> <option value=\\\"Fiji\\\">Fiji</option> <option value=\\\"Finland\\\">Finland</option> <option value=\\\"France\\\">France</option> <option value=\\\"France Metropolitan\\\">France Metropolitan</option> <option value=\\\"French Guiana\\\">French Guiana</option> <option value=\\\"French Polynesia\\\">French Polynesia</option> <option value=\\\"French Southern Territories\\\">French Southern Territories</option> <option value=\\\"Gabon\\\">Gabon</option> <option value=\\\"Gambia\\\">Gambia</option> <option value=\\\"Georgia\\\">Georgia</option> <option value=\\\"Germany\\\">Germany</option> <option value=\\\"Ghana\\\">Ghana</option> <option value=\\\"Gibraltar\\\">Gibraltar</option> <option value=\\\"Greece\\\">Greece</option> <option value=\\\"Greenland\\\">Greenland</option> <option value=\\\"Grenada\\\">Grenada</option> <option value=\\\"Guadeloupe\\\">Guadeloupe</option> <option value=\\\"Guam\\\">Guam</option> <option value=\\\"Guatemala\\\">Guatemala</option> <option value=\\\"Guinea\\\">Guinea</option> <option value=\\\"Guinea-Bissau\\\">Guinea-Bissau</option> <option value=\\\"Guyana\\\">Guyana</option> <option value=\\\"Haiti\\\">Haiti</option> <option value=\\\"Heard and Mc Donald Islands\\\">Heard and Mc Donald Islands</option> <option value=\\\"Holy See (Vatican City State)\\\">Holy See (Vatican City State)</option> <option value=\\\"Honduras\\\">Honduras</option> <option value=\\\"Hong Kong\\\">Hong Kong</option> <option value=\\\"Hungary\\\">Hungary</option> <option value=\\\"Iceland\\\">Iceland</option> <option value=\\\"India\\\">India</option> <option value=\\\"Indonesia\\\">Indonesia</option> <option value=\\\"Iran (Islamic Republic of)\\\">Iran (Islamic Republic of)</option> <option value=\\\"Iraq\\\">Iraq</option> <option value=\\\"Ireland\\\">Ireland</option> <option value=\\\"Israel\\\">Israel</option> <option value=\\\"Italy\\\">Italy</option> <option value=\\\"Jamaica\\\">Jamaica</option> <option value=\\\"Japan\\\">Japan</option> <option value=\\\"Jordan\\\">Jordan</option> <option value=\\\"Kazakhstan\\\">Kazakhstan</option> <option value=\\\"Kenya\\\">Kenya</option> <option value=\\\"Kiribati\\\">Kiribati</option> <option value=\\\"Korea, Democratic People's Republic of\\\">Korea, Democratic People's Republic of</option> <option value=\\\"Korea, Republic of\\\">Korea, Republic of</option> <option value=\\\"Kuwait\\\">Kuwait</option> <option value=\\\"Kyrgyzstan\\\">Kyrgyzstan</option> <option value=\\\"Lao, People's Democratic Republic\\\">Lao, People's Democratic Republic</option> <option value=\\\"Latvia\\\">Latvia</option> <option value=\\\"Lebanon\\\">Lebanon</option> <option value=\\\"Lesotho\\\">Lesotho</option> <option value=\\\"Liberia\\\">Liberia</option> <option value=\\\"Libyan Arab Jamahiriya\\\">Libyan Arab Jamahiriya</option> <option value=\\\"Liechtenstein\\\">Liechtenstein</option> <option value=\\\"Lithuania\\\">Lithuania</option> <option value=\\\"Luxembourg\\\">Luxembourg</option> <option value=\\\"Macau\\\">Macau</option> <option value=\\\"Macedonia, The Former Yugoslav Republic of\\\">Macedonia, The Former Yugoslav Republic of</option> <option value=\\\"Madagascar\\\">Madagascar</option> <option value=\\\"Malawi\\\">Malawi</option> <option value=\\\"Malaysia\\\">Malaysia</option> <option value=\\\"Maldives\\\">Maldives</option> <option value=\\\"Mali\\\">Mali</option> <option value=\\\"Malta\\\">Malta</option> <option value=\\\"Marshall Islands\\\">Marshall Islands</option> <option value=\\\"Martinique\\\">Martinique</option> <option value=\\\"Mauritania\\\">Mauritania</option> <option value=\\\"Mauritius\\\">Mauritius</option> <option value=\\\"Mayotte\\\">Mayotte</option> <option value=\\\"Mexico\\\">Mexico</option> <option value=\\\"Micronesia, Federated States of\\\">Micronesia, Federated States of</option> <option value=\\\"Moldova, Republic of\\\">Moldova, Republic of</option> <option value=\\\"Monaco\\\">Monaco</option> <option value=\\\"Mongolia\\\">Mongolia</option> <option value=\\\"Montserrat\\\">Montserrat</option> <option value=\\\"Morocco\\\">Morocco</option> <option value=\\\"Mozambique\\\">Mozambique</option> <option value=\\\"Myanmar\\\">Myanmar</option> <option value=\\\"Namibia\\\">Namibia</option> <option value=\\\"Nauru\\\">Nauru</option> <option value=\\\"Nepal\\\">Nepal</option> <option value=\\\"Netherlands\\\">Netherlands</option> <option value=\\\"Netherlands Antilles\\\">Netherlands Antilles</option> <option value=\\\"New Caledonia\\\">New Caledonia</option> <option value=\\\"New Zealand\\\">New Zealand</option> <option value=\\\"Nicaragua\\\">Nicaragua</option> <option value=\\\"Niger\\\">Niger</option> <option value=\\\"Nigeria\\\">Nigeria</option> <option value=\\\"Niue\\\">Niue</option> <option value=\\\"Norfolk Island\\\">Norfolk Island</option> <option value=\\\"Northern Mariana Islands\\\">Northern Mariana Islands</option> <option value=\\\"Norway\\\">Norway</option> <option value=\\\"Oman\\\">Oman</option> <option value=\\\"Pakistan\\\">Pakistan</option> <option value=\\\"Palau\\\">Palau</option> <option value=\\\"Panama\\\">Panama</option> <option value=\\\"Papua New Guinea\\\">Papua New Guinea</option> <option value=\\\"Paraguay\\\">Paraguay</option> <option value=\\\"Peru\\\">Peru</option> <option value=\\\"Philippines\\\">Philippines</option> <option value=\\\"Pitcairn\\\">Pitcairn</option> <option value=\\\"Poland\\\">Poland</option> <option value=\\\"Portugal\\\">Portugal</option> <option value=\\\"Puerto Rico\\\">Puerto Rico</option> <option value=\\\"Qatar\\\">Qatar</option> <option value=\\\"Reunion\\\">Reunion</option> <option value=\\\"Romania\\\">Romania</option> <option value=\\\"Russian Federation\\\">Russian Federation</option> <option value=\\\"Rwanda\\\">Rwanda</option> <option value=\\\"Saint Kitts and Nevis\\\">Saint Kitts and Nevis</option> <option value=\\\"Saint Lucia\\\">Saint Lucia</option> <option value=\\\"Saint Vincent and the Grenadines\\\">Saint Vincent and the Grenadines</option> <option value=\\\"Samoa\\\">Samoa</option> <option value=\\\"San Marino\\\">San Marino</option> <option value=\\\"Sao Tome and Principe\\\">Sao Tome and Principe</option> <option value=\\\"Saudi Arabia\\\">Saudi Arabia</option> <option value=\\\"Senegal\\\">Senegal</option> <option value=\\\"Seychelles\\\">Seychelles</option> <option value=\\\"Sierra Leone\\\">Sierra Leone</option> <option value=\\\"Singapore\\\">Singapore</option> <option value=\\\"Slovakia (Slovak Republic)\\\">Slovakia (Slovak Republic)</option> <option value=\\\"Slovenia\\\">Slovenia</option> <option value=\\\"Solomon Islands\\\">Solomon Islands</option> <option value=\\\"Somalia\\\">Somalia</option> <option value=\\\"South Africa\\\">South Africa</option> <option value=\\\"South Georgia and the South Sandwich Islands\\\">South Georgia and the South Sandwich Islands</option> <option value=\\\"Spain\\\">Spain</option> <option value=\\\"Sri Lanka\\\">Sri Lanka</option> <option value=\\\"St. Helena\\\">St. Helena</option> <option value=\\\"St. Pierre and Miquelon\\\">St. Pierre and Miquelon</option> <option value=\\\"Sudan\\\">Sudan</option> <option value=\\\"Suriname\\\">Suriname</option> <option value=\\\"Svalbard and Jan Mayen Islands\\\">Svalbard and Jan Mayen Islands</option> <option value=\\\"Swaziland\\\">Swaziland</option> <option value=\\\"Sweden\\\">Sweden</option> <option value=\\\"Switzerland\\\">Switzerland</option> <option value=\\\"Syrian Arab Republic\\\">Syrian Arab Republic</option> <option value=\\\"Taiwan, Province of China\\\">Taiwan, Province of China</option> <option value=\\\"Tajikistan\\\">Tajikistan</option> <option value=\\\"Tanzania, United Republic of\\\">Tanzania, United Republic of</option> <option value=\\\"Thailand\\\">Thailand</option> <option value=\\\"Togo\\\">Togo</option> <option value=\\\"Tokelau\\\">Tokelau</option> <option value=\\\"Tonga\\\">Tonga</option> <option value=\\\"Trinidad and Tobago\\\">Trinidad and Tobago</option> <option value=\\\"Tunisia\\\">Tunisia</option> <option value=\\\"Turkey\\\">Turkey</option> <option value=\\\"Turkmenistan\\\">Turkmenistan</option> <option value=\\\"Turks and Caicos Islands\\\">Turks and Caicos Islands</option> <option value=\\\"Tuvalu\\\">Tuvalu</option> <option value=\\\"Uganda\\\">Uganda</option> <option value=\\\"Ukraine\\\">Ukraine</option> <option value=\\\"United Arab Emirates\\\">United Arab Emirates</option> <option value=\\\"United Kingdom\\\">United Kingdom</option> <option value=\\\"United States\\\">United States</option> <option value=\\\"United States Minor Outlying Islands\\\">United States Minor Outlying Islands</option> <option value=\\\"Uruguay\\\">Uruguay</option> <option value=\\\"Uzbekistan\\\">Uzbekistan</option> <option value=\\\"Vanuatu\\\">Vanuatu</option> <option value=\\\"Venezuela\\\">Venezuela</option> <option value=\\\"Vietnam\\\">Vietnam</option> <option value=\\\"Virgin Islands (British)\\\">Virgin Islands (British)</option> <option value=\\\"Virgin Islands (U.S.)\\\">Virgin Islands (U.S.)</option> <option value=\\\"Wallis and Futuna Islands\\\">Wallis and Futuna Islands</option> <option value=\\\"Western Sahara\\\">Western Sahara</option> <option value=\\\"Yemen\\\">Yemen</option> <option value=\\\"Yugoslavia\\\">Yugoslavia</option> <option value=\\\"Zambia\\\">Zambia</option> <option value=\\\"Zimbabwe\\\">Zimbabwe</option> </select> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-card-holder-zip-code\\\">Zip</label> <input class=\\\"form-control\\\" placeholder=\\\"1234\\\" name=\\\"zipCode\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-validation-card-holder-zip-code\\\" required=\\\"required\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-card-exp-date\\\">Date of Expire</label> <input class=\\\"form-control\\\" placeholder=\\\"15/2024\\\" name=\\\"expDate\\\" type=\\\"text\\\" id=\\\"bootstrap-wizard-validation-card-exp-date\\\" required=\\\"required\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-wizard-validation-card-cvv\\\">CVV</label> <input class=\\\"form-control\\\" placeholder=\\\"123\\\" name=\\\"cvv\\\" maxlength=\\\"3\\\" pattern=\\\"[0-9]{3}\\\" type=\\\"number\\\" id=\\\"bootstrap-wizard-validation-card-cvv\\\" required=\\\"required\\\" /> <div class=\\\"invalid-feedback\\\">This field is required.</div> </div> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-wizard-validation-tab4\\\" id=\\\"bootstrap-wizard-validation-tab4\\\"> <div class=\\\"row flex-center pb-8 pt-4 gx-3 gy-4\\\"> <div class=\\\"col-12 col-sm-auto\\\"> <div class=\\\"text-center text-sm-start\\\"><img class=\\\"d-dark-none\\\" src=\\\"../../assets/img/spot-illustrations/38.webp\\\" alt=\\\"\\\" width=\\\"220\\\" /><img class=\\\"d-light-none\\\" src=\\\"../../assets/img/spot-illustrations/dark_38.webp\\\" alt=\\\"\\\" width=\\\"220\\\" /></div> </div> <div class=\\\"col-12 col-sm-auto\\\"> <div class=\\\"text-center text-sm-start\\\"> <h5 class=\\\"mb-3\\\">You are all set!</h5> <p class=\\\"text-body-emphasis fs-9\\\">Now you can access your account<br />anytime anywhere</p><a class=\\\"btn btn-primary px-6\\\" href=\\\"../../modules/forms/wizard.html\\\">Start Over</a> </div> </div> </div> </div> </div> </div> <div class=\\\"card-footer border-top-0\\\" data-wizard-footer=\\\"data-wizard-footer\\\"> <div class=\\\"d-flex pager wizard list-inline mb-0\\\"> <button class=\\\"d-none btn btn-link ps-0\\\" type=\\\"button\\\" data-wizard-prev-btn=\\\"data-wizard-prev-btn\\\"><span class=\\\"fas fa-chevron-left me-1\\\" data-fa-transform=\\\"shrink-3\\\"></span>Previous</button> <div class=\\\"flex-1 text-end\\\"> <button class=\\\"btn btn-primary px-6 px-sm-6\\\" type=\\\"submit\\\" data-wizard-next-btn=\\\"data-wizard-next-btn\\\">Next<span class=\\\"fas fa-chevron-right ms-1\\\" data-fa-transform=\\\"shrink-3\\\"> </span></button> </div> </div> </div> </div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="card theme-wizard mb-5" data-theme-wizard>
                <div className="card-header bg-body-highlight pt-3 pb-2 border-bottom-0">
                  <ul className="nav justify-content-between nav-wizard nav-wizard-success">
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-validation-tab1" className="nav-link active fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"1"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-lock">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Account
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-validation-tab2" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"2"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-user">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Personal
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-validation-tab3" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"3"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-file-alt">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Billing
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#bootstrap-wizard-validation-tab4" className="nav-link fw-semibold"  data-bs-toggle={"tab"} data-wizard-step={"4"}>
                        <div className="text-center d-inline-block">
                          <span className="nav-item-circle-parent">
                            <span className="nav-item-circle">
                              <span className="fas fa-check">                              </span>
                            </span>
                          </span>
                          <span className="d-none d-md-block mt-1 fs-9">
Done
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pt-4 pb-0">
                  <div className="tab-content">
                    <div className="tab-pane active" role="tabpanel" aria-labelledby="bootstrap-wizard-validation-tab1" id="bootstrap-wizard-validation-tab1">
                      <form className="needs-validation" id="wizardValidationForm1" noValidate data-wizard-form={"1"}>
                        <div className="mb-2">
                          <label className="form-label text-body" htmlFor="bootstrap-wizard-validation-wizard-name">
Name
                          </label>
                          <input className="form-control" type="text" name placeholder="John Smith" required id="bootstrap-wizard-validation-wizard-name" />
                          <div className="invalid-feedback">
Please choose a username.
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-validation-wizard-email">
Email*
                          </label>
                          <input className="form-control" type="email" name="email" placeholder="Email address" pattern={"^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"} required id="bootstrap-wizard-validation-wizard-email" />
                          <div className="invalid-feedback">
You must add email
                          </div>
                        </div>
                        <div className="row g-3 mb-3">
                          <div className="col-sm-6">
                            <div className="mb-2 mb-sm-0">
                              <label className="form-label text-body" htmlFor="bootstrap-wizard-validation-wizard-password">
Password*
                              </label>
                              <input className="form-control" type="password" name="password" placeholder="Password" required id="bootstrap-wizard-validation-wizard-password" data-wizard-password={"true"} />
                              <div className="invalid-feedback">
Please enter password
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="mb-2">
                              <label className="form-label text-body" htmlFor="bootstrap-wizard-validation-wizard-confirm-password">
Confirm Password*
                              </label>
                              <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" required id="bootstrap-wizard-validation-wizard-confirm-password" data-wizard-confirm-password={"true"} />
                              <div className="invalid-feedback">
Passwords need to match
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" name="terms" required defaultChecked id="bootstrap-wizard-validation-wizard-checkbox" />
                          <label className="form-check-label text-body" htmlFor="bootstrap-wizard-validation-wizard-checkbox">
I accept the 
                            <a href="#!">
terms 
                            </a>
and 
                            <a href="#!">
privacy policy
                            </a>
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-validation-tab2" id="bootstrap-wizard-validation-tab2">
                      <form className="needs-validation" id="wizardValidationForm2" noValidate data-wizard-form={"2"}>
                        <div className="row g-4 mb-4" data-dropzone data-options={"{\"maxFiles\":1,\"data\":[{\"name\":\"avatar.webp\",\"size\":\"54kb\",\"url\":\"../../assets/img/team\"}]}"}>
                          <div className="fallback">
                            <input type="file" name="file" />
                          </div>
                          <div className="col-md-auto">
                            <div className="dz-preview dz-preview-single">
                              <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                <div className="avatar avatar-4xl">
                                  <PhoenixImage src="/assets/img/team/avatar.webp" alt="..." className="rounded-circle avatar-placeholder" />
                                </div>
                                <div className="dz-progress">
                                  <span className="dz-upload" data-dz-uploadprogress={""}>                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md">
                            <div className="dz-message dropzone-area px-2 py-3" data-dz-message>
                              <div className="text-center text-body-emphasis">
                                <h5 className="mb-2">
                                  <span className="fa-solid fa-upload me-2">                                  </span>
Upload Profile Picture
                                </h5>
                                <p className="mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm">
Upload a 300x300 jpg image with 
                                  <br />
a maximum size of 400KB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-validation-gender">
Gender
                          </label>
                          <select className="form-select" name="gender" id="bootstrap-wizard-validation-gender" required>
                            <option value="">
Select your gender ...
                            </option>
                            <option value="Male">
Male
                            </option>
                            <option value="Female">
Female
                            </option>
                            <option value="Other">
Other
                            </option>
                          </select>
                          <div className="invalid-feedback">
This field is required.
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-validation-wizard-phone">
Phone
                          </label>
                          <input className="form-control" type="text" name="phone" placeholder="Phone" id="bootstrap-wizard-validation-wizard-phone" required />
                          <div className="invalid-feedback">
This field is required.
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-validation-wizard-datepicker">
Date of Birth
                          </label>
                          <input className="form-control datetimepicker" type="text" placeholder="d/m/y" data-options={"{\"dateFormat\":\"d/m/y\",\"disableMobile\":true}"} required id="bootstrap-wizard-validation-wizard-datepicker" />
                          <div className="invalid-feedback">
This field is required.
                          </div>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="bootstrap-wizard-validation-wizard-address">
Address
                          </label>
                          <textarea className="form-control" rows={4} id="bootstrap-wizard-validation-wizard-address" required defaultValue="" />
                          <div className="invalid-feedback">
This field is required.
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-validation-tab3" id="bootstrap-wizard-validation-tab3">
                      <form className="mb-2 needs-validation" id="wizardValidationForm3" noValidate data-wizard-form={"3"}>
                        <div className="row gx-3 gy-2">
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-validation-card-number">
Card Number
                            </label>
                            <input className="form-control" placeholder="XXXX XXXX XXXX XXXX" type="text" required id="bootstrap-wizard-validation-card-number" />
                            <div className="invalid-feedback">
This field is required.
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-validation-card-name">
Name
                            </label>
                            <input className="form-control" placeholder="John Doe" name="cardName" type="text" id="bootstrap-wizard-validation-card-name" required />
                            <div className="invalid-feedback">
This field is required.
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-validation-card-holder-country">
Country
                            </label>
                            <select className="form-select" name="customSelectCountry" id="bootstrap-wizard-validation-card-holder-country" required>
                              <option value="">
Select your country ...
                              </option>
                              <option value="Afghanistan">
Afghanistan
                              </option>
                              <option value="Albania">
Albania
                              </option>
                              <option value="Algeria">
Algeria
                              </option>
                              <option value="American Samoa">
American Samoa
                              </option>
                              <option value="Andorra">
Andorra
                              </option>
                              <option value="Angola">
Angola
                              </option>
                              <option value="Anguilla">
Anguilla
                              </option>
                              <option value="Antarctica">
Antarctica
                              </option>
                              <option value="Antigua and Barbuda">
Antigua and Barbuda
                              </option>
                              <option value="Argentina">
Argentina
                              </option>
                              <option value="Armenia">
Armenia
                              </option>
                              <option value="Aruba">
Aruba
                              </option>
                              <option value="Australia">
Australia
                              </option>
                              <option value="Austria">
Austria
                              </option>
                              <option value="Azerbaijan">
Azerbaijan
                              </option>
                              <option value="Bahamas">
Bahamas
                              </option>
                              <option value="Bahrain">
Bahrain
                              </option>
                              <option value="Bangladesh">
Bangladesh
                              </option>
                              <option value="Barbados">
Barbados
                              </option>
                              <option value="Belarus">
Belarus
                              </option>
                              <option value="Belgium">
Belgium
                              </option>
                              <option value="Belize">
Belize
                              </option>
                              <option value="Benin">
Benin
                              </option>
                              <option value="Bermuda">
Bermuda
                              </option>
                              <option value="Bhutan">
Bhutan
                              </option>
                              <option value="Bolivia">
Bolivia
                              </option>
                              <option value="Bosnia and Herzegowina">
Bosnia and Herzegowina
                              </option>
                              <option value="Botswana">
Botswana
                              </option>
                              <option value="Bouvet Island">
Bouvet Island
                              </option>
                              <option value="Brazil">
Brazil
                              </option>
                              <option value="British Indian Ocean Territory">
British Indian Ocean Territory
                              </option>
                              <option value="Brunei Darussalam">
Brunei Darussalam
                              </option>
                              <option value="Bulgaria">
Bulgaria
                              </option>
                              <option value="Burkina Faso">
Burkina Faso
                              </option>
                              <option value="Burundi">
Burundi
                              </option>
                              <option value="Cambodia">
Cambodia
                              </option>
                              <option value="Cameroon">
Cameroon
                              </option>
                              <option value="Canada">
Canada
                              </option>
                              <option value="Cape Verde">
Cape Verde
                              </option>
                              <option value="Cayman Islands">
Cayman Islands
                              </option>
                              <option value="Central African Republic">
Central African Republic
                              </option>
                              <option value="Chad">
Chad
                              </option>
                              <option value="Chile">
Chile
                              </option>
                              <option value="China">
China
                              </option>
                              <option value="Christmas Island">
Christmas Island
                              </option>
                              <option value="Cocos (Keeling) Islands">
Cocos (Keeling) Islands
                              </option>
                              <option value="Colombia">
Colombia
                              </option>
                              <option value="Comoros">
Comoros
                              </option>
                              <option value="Congo">
Congo
                              </option>
                              <option value="Congo, the Democratic Republic of the">
Congo, the Democratic Republic of the
                              </option>
                              <option value="Cook Islands">
Cook Islands
                              </option>
                              <option value="Costa Rica">
Costa Rica
                              </option>
                              <option value={"Cote d'Ivoire"}>
Cote d'Ivoire
                              </option>
                              <option value="Croatia (Hrvatska)">
Croatia (Hrvatska)
                              </option>
                              <option value="Cuba">
Cuba
                              </option>
                              <option value="Cyprus">
Cyprus
                              </option>
                              <option value="Czech Republic">
Czech Republic
                              </option>
                              <option value="Denmark">
Denmark
                              </option>
                              <option value="Djibouti">
Djibouti
                              </option>
                              <option value="Dominica">
Dominica
                              </option>
                              <option value="Dominican Republic">
Dominican Republic
                              </option>
                              <option value="East Timor">
East Timor
                              </option>
                              <option value="Ecuador">
Ecuador
                              </option>
                              <option value="Egypt">
Egypt
                              </option>
                              <option value="El Salvador">
El Salvador
                              </option>
                              <option value="Equatorial Guinea">
Equatorial Guinea
                              </option>
                              <option value="Eritrea">
Eritrea
                              </option>
                              <option value="Estonia">
Estonia
                              </option>
                              <option value="Ethiopia">
Ethiopia
                              </option>
                              <option value="Falkland Islands (Malvinas)">
Falkland Islands (Malvinas)
                              </option>
                              <option value="Faroe Islands">
Faroe Islands
                              </option>
                              <option value="Fiji">
Fiji
                              </option>
                              <option value="Finland">
Finland
                              </option>
                              <option value="France">
France
                              </option>
                              <option value="France Metropolitan">
France Metropolitan
                              </option>
                              <option value="French Guiana">
French Guiana
                              </option>
                              <option value="French Polynesia">
French Polynesia
                              </option>
                              <option value="French Southern Territories">
French Southern Territories
                              </option>
                              <option value="Gabon">
Gabon
                              </option>
                              <option value="Gambia">
Gambia
                              </option>
                              <option value="Georgia">
Georgia
                              </option>
                              <option value="Germany">
Germany
                              </option>
                              <option value="Ghana">
Ghana
                              </option>
                              <option value="Gibraltar">
Gibraltar
                              </option>
                              <option value="Greece">
Greece
                              </option>
                              <option value="Greenland">
Greenland
                              </option>
                              <option value="Grenada">
Grenada
                              </option>
                              <option value="Guadeloupe">
Guadeloupe
                              </option>
                              <option value="Guam">
Guam
                              </option>
                              <option value="Guatemala">
Guatemala
                              </option>
                              <option value="Guinea">
Guinea
                              </option>
                              <option value="Guinea-Bissau">
Guinea-Bissau
                              </option>
                              <option value="Guyana">
Guyana
                              </option>
                              <option value="Haiti">
Haiti
                              </option>
                              <option value="Heard and Mc Donald Islands">
Heard and Mc Donald Islands
                              </option>
                              <option value="Holy See (Vatican City State)">
Holy See (Vatican City State)
                              </option>
                              <option value="Honduras">
Honduras
                              </option>
                              <option value="Hong Kong">
Hong Kong
                              </option>
                              <option value="Hungary">
Hungary
                              </option>
                              <option value="Iceland">
Iceland
                              </option>
                              <option value="India">
India
                              </option>
                              <option value="Indonesia">
Indonesia
                              </option>
                              <option value="Iran (Islamic Republic of)">
Iran (Islamic Republic of)
                              </option>
                              <option value="Iraq">
Iraq
                              </option>
                              <option value="Ireland">
Ireland
                              </option>
                              <option value="Israel">
Israel
                              </option>
                              <option value="Italy">
Italy
                              </option>
                              <option value="Jamaica">
Jamaica
                              </option>
                              <option value="Japan">
Japan
                              </option>
                              <option value="Jordan">
Jordan
                              </option>
                              <option value="Kazakhstan">
Kazakhstan
                              </option>
                              <option value="Kenya">
Kenya
                              </option>
                              <option value="Kiribati">
Kiribati
                              </option>
                              <option value={"Korea, Democratic People's Republic of"}>
Korea, Democratic People's Republic of
                              </option>
                              <option value="Korea, Republic of">
Korea, Republic of
                              </option>
                              <option value="Kuwait">
Kuwait
                              </option>
                              <option value="Kyrgyzstan">
Kyrgyzstan
                              </option>
                              <option value={"Lao, People's Democratic Republic"}>
Lao, People's Democratic Republic
                              </option>
                              <option value="Latvia">
Latvia
                              </option>
                              <option value="Lebanon">
Lebanon
                              </option>
                              <option value="Lesotho">
Lesotho
                              </option>
                              <option value="Liberia">
Liberia
                              </option>
                              <option value="Libyan Arab Jamahiriya">
Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein">
Liechtenstein
                              </option>
                              <option value="Lithuania">
Lithuania
                              </option>
                              <option value="Luxembourg">
Luxembourg
                              </option>
                              <option value="Macau">
Macau
                              </option>
                              <option value="Macedonia, The Former Yugoslav Republic of">
Macedonia, The Former Yugoslav Republic of
                              </option>
                              <option value="Madagascar">
Madagascar
                              </option>
                              <option value="Malawi">
Malawi
                              </option>
                              <option value="Malaysia">
Malaysia
                              </option>
                              <option value="Maldives">
Maldives
                              </option>
                              <option value="Mali">
Mali
                              </option>
                              <option value="Malta">
Malta
                              </option>
                              <option value="Marshall Islands">
Marshall Islands
                              </option>
                              <option value="Martinique">
Martinique
                              </option>
                              <option value="Mauritania">
Mauritania
                              </option>
                              <option value="Mauritius">
Mauritius
                              </option>
                              <option value="Mayotte">
Mayotte
                              </option>
                              <option value="Mexico">
Mexico
                              </option>
                              <option value="Micronesia, Federated States of">
Micronesia, Federated States of
                              </option>
                              <option value="Moldova, Republic of">
Moldova, Republic of
                              </option>
                              <option value="Monaco">
Monaco
                              </option>
                              <option value="Mongolia">
Mongolia
                              </option>
                              <option value="Montserrat">
Montserrat
                              </option>
                              <option value="Morocco">
Morocco
                              </option>
                              <option value="Mozambique">
Mozambique
                              </option>
                              <option value="Myanmar">
Myanmar
                              </option>
                              <option value="Namibia">
Namibia
                              </option>
                              <option value="Nauru">
Nauru
                              </option>
                              <option value="Nepal">
Nepal
                              </option>
                              <option value="Netherlands">
Netherlands
                              </option>
                              <option value="Netherlands Antilles">
Netherlands Antilles
                              </option>
                              <option value="New Caledonia">
New Caledonia
                              </option>
                              <option value="New Zealand">
New Zealand
                              </option>
                              <option value="Nicaragua">
Nicaragua
                              </option>
                              <option value="Niger">
Niger
                              </option>
                              <option value="Nigeria">
Nigeria
                              </option>
                              <option value="Niue">
Niue
                              </option>
                              <option value="Norfolk Island">
Norfolk Island
                              </option>
                              <option value="Northern Mariana Islands">
Northern Mariana Islands
                              </option>
                              <option value="Norway">
Norway
                              </option>
                              <option value="Oman">
Oman
                              </option>
                              <option value="Pakistan">
Pakistan
                              </option>
                              <option value="Palau">
Palau
                              </option>
                              <option value="Panama">
Panama
                              </option>
                              <option value="Papua New Guinea">
Papua New Guinea
                              </option>
                              <option value="Paraguay">
Paraguay
                              </option>
                              <option value="Peru">
Peru
                              </option>
                              <option value="Philippines">
Philippines
                              </option>
                              <option value="Pitcairn">
Pitcairn
                              </option>
                              <option value="Poland">
Poland
                              </option>
                              <option value="Portugal">
Portugal
                              </option>
                              <option value="Puerto Rico">
Puerto Rico
                              </option>
                              <option value="Qatar">
Qatar
                              </option>
                              <option value="Reunion">
Reunion
                              </option>
                              <option value="Romania">
Romania
                              </option>
                              <option value="Russian Federation">
Russian Federation
                              </option>
                              <option value="Rwanda">
Rwanda
                              </option>
                              <option value="Saint Kitts and Nevis">
Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia">
Saint Lucia
                              </option>
                              <option value="Saint Vincent and the Grenadines">
Saint Vincent and the Grenadines
                              </option>
                              <option value="Samoa">
Samoa
                              </option>
                              <option value="San Marino">
San Marino
                              </option>
                              <option value="Sao Tome and Principe">
Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia">
Saudi Arabia
                              </option>
                              <option value="Senegal">
Senegal
                              </option>
                              <option value="Seychelles">
Seychelles
                              </option>
                              <option value="Sierra Leone">
Sierra Leone
                              </option>
                              <option value="Singapore">
Singapore
                              </option>
                              <option value="Slovakia (Slovak Republic)">
Slovakia (Slovak Republic)
                              </option>
                              <option value="Slovenia">
Slovenia
                              </option>
                              <option value="Solomon Islands">
Solomon Islands
                              </option>
                              <option value="Somalia">
Somalia
                              </option>
                              <option value="South Africa">
South Africa
                              </option>
                              <option value="South Georgia and the South Sandwich Islands">
South Georgia and the South Sandwich Islands
                              </option>
                              <option value="Spain">
Spain
                              </option>
                              <option value="Sri Lanka">
Sri Lanka
                              </option>
                              <option value="St. Helena">
St. Helena
                              </option>
                              <option value="St. Pierre and Miquelon">
St. Pierre and Miquelon
                              </option>
                              <option value="Sudan">
Sudan
                              </option>
                              <option value="Suriname">
Suriname
                              </option>
                              <option value="Svalbard and Jan Mayen Islands">
Svalbard and Jan Mayen Islands
                              </option>
                              <option value="Swaziland">
Swaziland
                              </option>
                              <option value="Sweden">
Sweden
                              </option>
                              <option value="Switzerland">
Switzerland
                              </option>
                              <option value="Syrian Arab Republic">
Syrian Arab Republic
                              </option>
                              <option value="Taiwan, Province of China">
Taiwan, Province of China
                              </option>
                              <option value="Tajikistan">
Tajikistan
                              </option>
                              <option value="Tanzania, United Republic of">
Tanzania, United Republic of
                              </option>
                              <option value="Thailand">
Thailand
                              </option>
                              <option value="Togo">
Togo
                              </option>
                              <option value="Tokelau">
Tokelau
                              </option>
                              <option value="Tonga">
Tonga
                              </option>
                              <option value="Trinidad and Tobago">
Trinidad and Tobago
                              </option>
                              <option value="Tunisia">
Tunisia
                              </option>
                              <option value="Turkey">
Turkey
                              </option>
                              <option value="Turkmenistan">
Turkmenistan
                              </option>
                              <option value="Turks and Caicos Islands">
Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu">
Tuvalu
                              </option>
                              <option value="Uganda">
Uganda
                              </option>
                              <option value="Ukraine">
Ukraine
                              </option>
                              <option value="United Arab Emirates">
United Arab Emirates
                              </option>
                              <option value="United Kingdom">
United Kingdom
                              </option>
                              <option value="United States">
United States
                              </option>
                              <option value="United States Minor Outlying Islands">
United States Minor Outlying Islands
                              </option>
                              <option value="Uruguay">
Uruguay
                              </option>
                              <option value="Uzbekistan">
Uzbekistan
                              </option>
                              <option value="Vanuatu">
Vanuatu
                              </option>
                              <option value="Venezuela">
Venezuela
                              </option>
                              <option value="Vietnam">
Vietnam
                              </option>
                              <option value="Virgin Islands (British)">
Virgin Islands (British)
                              </option>
                              <option value="Virgin Islands (U.S.)">
Virgin Islands (U.S.)
                              </option>
                              <option value="Wallis and Futuna Islands">
Wallis and Futuna Islands
                              </option>
                              <option value="Western Sahara">
Western Sahara
                              </option>
                              <option value="Yemen">
Yemen
                              </option>
                              <option value="Yugoslavia">
Yugoslavia
                              </option>
                              <option value="Zambia">
Zambia
                              </option>
                              <option value="Zimbabwe">
Zimbabwe
                              </option>
                            </select>
                            <div className="invalid-feedback">
This field is required.
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-validation-card-holder-zip-code">
Zip
                            </label>
                            <input className="form-control" placeholder="1234" name="zipCode" type="text" id="bootstrap-wizard-validation-card-holder-zip-code" required />
                            <div className="invalid-feedback">
This field is required.
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-validation-card-exp-date">
Date of Expire
                            </label>
                            <input className="form-control" placeholder="15/2024" name="expDate" type="text" id="bootstrap-wizard-validation-card-exp-date" required />
                            <div className="invalid-feedback">
This field is required.
                            </div>
                          </div>
                          <div className="col-6">
                            <label className="form-label" htmlFor="bootstrap-wizard-validation-card-cvv">
CVV
                            </label>
                            <input className="form-control" placeholder="123" name="cvv" maxLength={3} pattern={"[0-9]{3}"} type="number" id="bootstrap-wizard-validation-card-cvv" required />
                            <div className="invalid-feedback">
This field is required.
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-wizard-validation-tab4" id="bootstrap-wizard-validation-tab4">
                      <div className="row flex-center pb-8 pt-4 gx-3 gy-4">
                        <div className="col-12 col-sm-auto">
                          <div className="text-center text-sm-start">
                            <PhoenixImage src="/assets/img/spot-illustrations/38.webp" alt="" className="d-dark-none" width={220} />
                            <PhoenixImage src="/assets/img/spot-illustrations/dark_38.webp" alt="" className="d-light-none" width={220} />
                          </div>
                        </div>
                        <div className="col-12 col-sm-auto">
                          <div className="text-center text-sm-start">
                            <h5 className="mb-3">
You are all set!
                            </h5>
                            <p className="text-body-emphasis fs-9">
Now you can access your account
                              <br />
anytime anywhere
                            </p>
                            <PhoenixLink href="/modules/forms/wizard" className="btn btn-primary px-6">
Start Over
                            </PhoenixLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top-0" data-wizard-footer>
                  <div className="d-flex pager wizard list-inline mb-0">
                    <button className="d-none btn btn-link ps-0" type="button" data-wizard-prev-btn>
                      <span className="fas fa-chevron-left me-1" data-fa-transform={"shrink-3"}>                      </span>
Previous
                    </button>
                    <div className="flex-1 text-end">
                      <button className="btn btn-primary px-6 px-sm-6" type="submit" data-wizard-next-btn>
Next
                        <span className="fas fa-chevron-right ms-1" data-fa-transform={"shrink-3"}>                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-xxl-8">
        <div className="card shadow-none border" data-component-card>
          <div className="card-header p-4 border-bottom bg-body">
            <div className="row g-3 justify-content-between align-items-center">
              <div className="col-12 col-md">
                <h4 className="text-body mb-0" data-anchor>
Vertical wizard
                </h4>
              </div>
              <div className="col col-md-auto">
                <nav className="nav justify-content-end doc-tab-nav align-items-center" role="tablist">
                  <button className="btn btn-link px-2 text-body copy-code-btn" type="button">
                    <span className="fas fa-copy me-1">                    </span>
Copy Code
                  </button>
                  <a href="#vertical-wizard-code" className="btn btn-sm btn-phoenix-primary code-btn ms-2" data-bs-toggle={"collapse"}  role="button" aria-controls="vertical-wizard-code" aria-expanded="false">
                    <span className="me-2" data-feather={"code"}>                    </span>View code
                  </a>
                  <a href="#" className="btn btn-sm btn-phoenix-primary preview-btn ms-2">
                    <span className="me-2" data-feather={"eye"}>                    </span>Hide code
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="collapse code-collapse" id="vertical-wizard-code">
              <pre className="scrollbar" style={{"maxHeight":"420px"} as CSSProperties}>
{"<code class=\"language-html\"><div class=\\\"card theme-wizard mb-5\\\" data-theme-wizard=\\\"data-theme-wizard\\\"> <div class=\\\"card-body pt-4 pb-0\\\"> <div class=\\\"row justify-content-between\\\"> <div class=\\\"col-md-3 order-md-1\\\"> <div class=\\\"scrollbar mb-4\\\"> <ul class=\\\"nav justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-md\\\"> <li class=\\\"nav-item\\\"><a class=\\\"nav-link active py-0 py-md-3\\\" href=\\\"#bootstrap-vertical-wizard-tab1\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"1\\\"> <div class=\\\"text-center d-inline-block d-md-flex align-items-center gap-3\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fa-solid fa-file nav-item-icon\\\"></span><span class=\\\"fa-solid fa-check check-icon\\\"></span></span></span><span class=\\\"nav-item-title fs-9 fs-xl-8\\\">Account</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link py-0 py-md-3\\\" href=\\\"#bootstrap-vertical-wizard-tab2\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"2\\\"> <div class=\\\"text-center d-inline-block d-md-flex align-items-center gap-3\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fa-solid fa-location-dot nav-item-icon\\\"></span><span class=\\\"fa-solid fa-check check-icon\\\"></span></span></span><span class=\\\"nav-item-title fs-9 fs-xl-8\\\">Personal</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link py-0 py-md-3\\\" href=\\\"#bootstrap-vertical-wizard-tab3\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"3\\\"> <div class=\\\"text-center d-inline-block d-md-flex align-items-center gap-3\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fa-solid fa-mug-saucer nav-item-icon\\\"></span><span class=\\\"fa-solid fa-check check-icon\\\"></span></span></span><span class=\\\"nav-item-title fs-9 fs-xl-8\\\">Billing</span></div> </a></li> <li class=\\\"nav-item\\\"><a class=\\\"nav-link py-0 py-md-3\\\" href=\\\"#bootstrap-vertical-wizard-tab4\\\" data-bs-toggle=\\\"tab\\\" data-wizard-step=\\\"4\\\"> <div class=\\\"text-center d-inline-block d-md-flex align-items-center gap-3\\\"><span class=\\\"nav-item-circle-parent\\\"><span class=\\\"nav-item-circle\\\"><span class=\\\"fa-solid fa-images nav-item-icon\\\"></span><span class=\\\"fa-solid fa-check check-icon\\\"></span></span></span><span class=\\\"nav-item-title fs-9 fs-xl-8\\\">Done</span></div> </a></li> </ul> </div> </div> <div class=\\\"col-md-8\\\"> <div class=\\\"tab-content\\\"> <div class=\\\"tab-pane active\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-vertical-wizard-tab1\\\" id=\\\"bootstrap-vertical-wizard-tab1\\\"> <form id=\\\"wizardVerticalForm1\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"1\\\"> <div class=\\\"mb-2\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-vertical-wizard-wizard-name\\\">Name</label> <input class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"name\\\" placeholder=\\\"John Smith\\\" id=\\\"bootstrap-vertical-wizard-wizard-name\\\" /> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-wizard-email\\\">Email*</label> <input class=\\\"form-control\\\" type=\\\"email\\\" name=\\\"email\\\" placeholder=\\\"Email address\\\" pattern=\\\"^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$\\\" id=\\\"bootstrap-vertical-wizard-wizard-email\\\" /> </div> <div class=\\\"row g-3 mb-3\\\"> <div class=\\\"col-sm-6\\\"> <div class=\\\"mb-2 mb-sm-0\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-vertical-wizard-wizard-password\\\">Password*</label> <input class=\\\"form-control\\\" type=\\\"password\\\" name=\\\"password\\\" placeholder=\\\"Password\\\" id=\\\"bootstrap-vertical-wizard-wizard-password\\\" data-wizard-password=\\\"true\\\" /> </div> </div> <div class=\\\"col-sm-6\\\"> <div class=\\\"mb-2\\\"> <label class=\\\"form-label text-body\\\" for=\\\"bootstrap-vertical-wizard-wizard-confirm-password\\\">Confirm Password*</label> <input class=\\\"form-control\\\" type=\\\"password\\\" name=\\\"confirmPassword\\\" placeholder=\\\"Confirm Password\\\" id=\\\"bootstrap-vertical-wizard-wizard-confirm-password\\\" data-wizard-confirm-password=\\\"true\\\" /> </div> </div> </div> <div class=\\\"form-check\\\"> <input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" name=\\\"terms\\\" checked=\\\"checked\\\" id=\\\"bootstrap-vertical-wizard-wizard-checkbox\\\" /> <label class=\\\"form-check-label text-body\\\" for=\\\"bootstrap-vertical-wizard-wizard-checkbox\\\">I accept the <a href=\\\"#!\\\">terms </a>and <a href=\\\"#!\\\">privacy policy</a></label> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-vertical-wizard-tab2\\\" id=\\\"bootstrap-vertical-wizard-tab2\\\"> <form id=\\\"wizardVerticalForm2\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"2\\\"> <div class=\\\"row g-4 mb-4\\\" data-dropzone=\\\"data-dropzone\\\" data-options='{\\\"maxFiles\\\":1,\\\"data\\\":[{\\\"name\\\":\\\"avatar.webp\\\",\\\"size\\\":\\\"54kb\\\",\\\"url\\\":\\\"../../assets/img/team\\\"}]}'> <div class=\\\"fallback\\\"> <input type=\\\"file\\\" name=\\\"file\\\" /> </div> <div class=\\\"col-md-auto\\\"> <div class=\\\"dz-preview dz-preview-single\\\"> <div class=\\\"dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0\\\"> <div class=\\\"avatar avatar-4xl\\\"><img class=\\\"rounded-circle avatar-placeholder\\\" src=\\\"../../assets/img/team/avatar.webp\\\" alt=\\\"...\\\" data-dz-thumbnail=\\\"data-dz-thumbnail\\\" /></div> <div class=\\\"dz-progress\\\"><span class=\\\"dz-upload\\\" data-dz-uploadprogress=\\\"\\\"></span></div> </div> </div> </div> <div class=\\\"col-md\\\"> <div class=\\\"dz-message dropzone-area px-2 py-3\\\" data-dz-message=\\\"data-dz-message\\\"> <div class=\\\"text-center text-body-emphasis\\\"> <h5 class=\\\"mb-2\\\"><span class=\\\"fa-solid fa-upload me-2\\\"></span>Upload Profile Picture</h5> <p class=\\\"mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm\\\">Upload a 300x300 jpg image with <br />a maximum size of 400KB</p> </div> </div> </div> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-gender\\\">Gender</label> <select class=\\\"form-select\\\" name=\\\"gender\\\" id=\\\"bootstrap-vertical-wizard-gender\\\"> <option value=\\\"\\\">Select your gender ...</option> <option value=\\\"Male\\\">Male</option> <option value=\\\"Female\\\">Female</option> <option value=\\\"Other\\\">Other</option> </select> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-wizard-phone\\\">Phone</label> <input class=\\\"form-control\\\" type=\\\"text\\\" name=\\\"phone\\\" placeholder=\\\"Phone\\\" id=\\\"bootstrap-vertical-wizard-wizard-phone\\\" /> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-wizard-datepicker\\\">Date of Birth</label> <input class=\\\"form-control datetimepicker\\\" type=\\\"text\\\" placeholder=\\\"d/m/y\\\" data-options='{\\\"dateFormat\\\":\\\"d/m/y\\\",\\\"disableMobile\\\":true}' id=\\\"bootstrap-vertical-wizard-wizard-datepicker\\\" /> </div> <div class=\\\"mb-2\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-wizard-address\\\">Address</label> <textarea class=\\\"form-control\\\" rows=\\\"4\\\" id=\\\"bootstrap-vertical-wizard-wizard-address\\\" defaultValue=\"\" /> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-vertical-wizard-tab3\\\" id=\\\"bootstrap-vertical-wizard-tab3\\\"> <form class=\\\"mb-2\\\" id=\\\"wizardVerticalForm3\\\" novalidate=\\\"novalidate\\\" data-wizard-form=\\\"3\\\"> <div class=\\\"row gx-3 gy-2\\\"> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-card-number\\\">Card Number</label> <input class=\\\"form-control\\\" placeholder=\\\"XXXX XXXX XXXX XXXX\\\" type=\\\"text\\\" id=\\\"bootstrap-vertical-wizard-card-number\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-card-name\\\">Name</label> <input class=\\\"form-control\\\" placeholder=\\\"John Doe\\\" name=\\\"cardName\\\" type=\\\"text\\\" id=\\\"bootstrap-vertical-wizard-card-name\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-card-holder-country\\\">Country</label> <select class=\\\"form-select\\\" name=\\\"customSelectCountry\\\" id=\\\"bootstrap-vertical-wizard-card-holder-country\\\"> <option value=\\\"\\\">Select your country ...</option> <option value=\\\"Afghanistan\\\">Afghanistan</option> <option value=\\\"Albania\\\">Albania</option> <option value=\\\"Algeria\\\">Algeria</option> <option value=\\\"American Samoa\\\">American Samoa</option> <option value=\\\"Andorra\\\">Andorra</option> <option value=\\\"Angola\\\">Angola</option> <option value=\\\"Anguilla\\\">Anguilla</option> <option value=\\\"Antarctica\\\">Antarctica</option> <option value=\\\"Antigua and Barbuda\\\">Antigua and Barbuda</option> <option value=\\\"Argentina\\\">Argentina</option> <option value=\\\"Armenia\\\">Armenia</option> <option value=\\\"Aruba\\\">Aruba</option> <option value=\\\"Australia\\\">Australia</option> <option value=\\\"Austria\\\">Austria</option> <option value=\\\"Azerbaijan\\\">Azerbaijan</option> <option value=\\\"Bahamas\\\">Bahamas</option> <option value=\\\"Bahrain\\\">Bahrain</option> <option value=\\\"Bangladesh\\\">Bangladesh</option> <option value=\\\"Barbados\\\">Barbados</option> <option value=\\\"Belarus\\\">Belarus</option> <option value=\\\"Belgium\\\">Belgium</option> <option value=\\\"Belize\\\">Belize</option> <option value=\\\"Benin\\\">Benin</option> <option value=\\\"Bermuda\\\">Bermuda</option> <option value=\\\"Bhutan\\\">Bhutan</option> <option value=\\\"Bolivia\\\">Bolivia</option> <option value=\\\"Bosnia and Herzegowina\\\">Bosnia and Herzegowina</option> <option value=\\\"Botswana\\\">Botswana</option> <option value=\\\"Bouvet Island\\\">Bouvet Island</option> <option value=\\\"Brazil\\\">Brazil</option> <option value=\\\"British Indian Ocean Territory\\\">British Indian Ocean Territory</option> <option value=\\\"Brunei Darussalam\\\">Brunei Darussalam</option> <option value=\\\"Bulgaria\\\">Bulgaria</option> <option value=\\\"Burkina Faso\\\">Burkina Faso</option> <option value=\\\"Burundi\\\">Burundi</option> <option value=\\\"Cambodia\\\">Cambodia</option> <option value=\\\"Cameroon\\\">Cameroon</option> <option value=\\\"Canada\\\">Canada</option> <option value=\\\"Cape Verde\\\">Cape Verde</option> <option value=\\\"Cayman Islands\\\">Cayman Islands</option> <option value=\\\"Central African Republic\\\">Central African Republic</option> <option value=\\\"Chad\\\">Chad</option> <option value=\\\"Chile\\\">Chile</option> <option value=\\\"China\\\">China</option> <option value=\\\"Christmas Island\\\">Christmas Island</option> <option value=\\\"Cocos (Keeling) Islands\\\">Cocos (Keeling) Islands</option> <option value=\\\"Colombia\\\">Colombia</option> <option value=\\\"Comoros\\\">Comoros</option> <option value=\\\"Congo\\\">Congo</option> <option value=\\\"Congo, the Democratic Republic of the\\\">Congo, the Democratic Republic of the</option> <option value=\\\"Cook Islands\\\">Cook Islands</option> <option value=\\\"Costa Rica\\\">Costa Rica</option> <option value=\\\"Cote d'Ivoire\\\">Cote d'Ivoire</option> <option value=\\\"Croatia (Hrvatska)\\\">Croatia (Hrvatska)</option> <option value=\\\"Cuba\\\">Cuba</option> <option value=\\\"Cyprus\\\">Cyprus</option> <option value=\\\"Czech Republic\\\">Czech Republic</option> <option value=\\\"Denmark\\\">Denmark</option> <option value=\\\"Djibouti\\\">Djibouti</option> <option value=\\\"Dominica\\\">Dominica</option> <option value=\\\"Dominican Republic\\\">Dominican Republic</option> <option value=\\\"East Timor\\\">East Timor</option> <option value=\\\"Ecuador\\\">Ecuador</option> <option value=\\\"Egypt\\\">Egypt</option> <option value=\\\"El Salvador\\\">El Salvador</option> <option value=\\\"Equatorial Guinea\\\">Equatorial Guinea</option> <option value=\\\"Eritrea\\\">Eritrea</option> <option value=\\\"Estonia\\\">Estonia</option> <option value=\\\"Ethiopia\\\">Ethiopia</option> <option value=\\\"Falkland Islands (Malvinas)\\\">Falkland Islands (Malvinas)</option> <option value=\\\"Faroe Islands\\\">Faroe Islands</option> <option value=\\\"Fiji\\\">Fiji</option> <option value=\\\"Finland\\\">Finland</option> <option value=\\\"France\\\">France</option> <option value=\\\"France Metropolitan\\\">France Metropolitan</option> <option value=\\\"French Guiana\\\">French Guiana</option> <option value=\\\"French Polynesia\\\">French Polynesia</option> <option value=\\\"French Southern Territories\\\">French Southern Territories</option> <option value=\\\"Gabon\\\">Gabon</option> <option value=\\\"Gambia\\\">Gambia</option> <option value=\\\"Georgia\\\">Georgia</option> <option value=\\\"Germany\\\">Germany</option> <option value=\\\"Ghana\\\">Ghana</option> <option value=\\\"Gibraltar\\\">Gibraltar</option> <option value=\\\"Greece\\\">Greece</option> <option value=\\\"Greenland\\\">Greenland</option> <option value=\\\"Grenada\\\">Grenada</option> <option value=\\\"Guadeloupe\\\">Guadeloupe</option> <option value=\\\"Guam\\\">Guam</option> <option value=\\\"Guatemala\\\">Guatemala</option> <option value=\\\"Guinea\\\">Guinea</option> <option value=\\\"Guinea-Bissau\\\">Guinea-Bissau</option> <option value=\\\"Guyana\\\">Guyana</option> <option value=\\\"Haiti\\\">Haiti</option> <option value=\\\"Heard and Mc Donald Islands\\\">Heard and Mc Donald Islands</option> <option value=\\\"Holy See (Vatican City State)\\\">Holy See (Vatican City State)</option> <option value=\\\"Honduras\\\">Honduras</option> <option value=\\\"Hong Kong\\\">Hong Kong</option> <option value=\\\"Hungary\\\">Hungary</option> <option value=\\\"Iceland\\\">Iceland</option> <option value=\\\"India\\\">India</option> <option value=\\\"Indonesia\\\">Indonesia</option> <option value=\\\"Iran (Islamic Republic of)\\\">Iran (Islamic Republic of)</option> <option value=\\\"Iraq\\\">Iraq</option> <option value=\\\"Ireland\\\">Ireland</option> <option value=\\\"Israel\\\">Israel</option> <option value=\\\"Italy\\\">Italy</option> <option value=\\\"Jamaica\\\">Jamaica</option> <option value=\\\"Japan\\\">Japan</option> <option value=\\\"Jordan\\\">Jordan</option> <option value=\\\"Kazakhstan\\\">Kazakhstan</option> <option value=\\\"Kenya\\\">Kenya</option> <option value=\\\"Kiribati\\\">Kiribati</option> <option value=\\\"Korea, Democratic People's Republic of\\\">Korea, Democratic People's Republic of</option> <option value=\\\"Korea, Republic of\\\">Korea, Republic of</option> <option value=\\\"Kuwait\\\">Kuwait</option> <option value=\\\"Kyrgyzstan\\\">Kyrgyzstan</option> <option value=\\\"Lao, People's Democratic Republic\\\">Lao, People's Democratic Republic</option> <option value=\\\"Latvia\\\">Latvia</option> <option value=\\\"Lebanon\\\">Lebanon</option> <option value=\\\"Lesotho\\\">Lesotho</option> <option value=\\\"Liberia\\\">Liberia</option> <option value=\\\"Libyan Arab Jamahiriya\\\">Libyan Arab Jamahiriya</option> <option value=\\\"Liechtenstein\\\">Liechtenstein</option> <option value=\\\"Lithuania\\\">Lithuania</option> <option value=\\\"Luxembourg\\\">Luxembourg</option> <option value=\\\"Macau\\\">Macau</option> <option value=\\\"Macedonia, The Former Yugoslav Republic of\\\">Macedonia, The Former Yugoslav Republic of</option> <option value=\\\"Madagascar\\\">Madagascar</option> <option value=\\\"Malawi\\\">Malawi</option> <option value=\\\"Malaysia\\\">Malaysia</option> <option value=\\\"Maldives\\\">Maldives</option> <option value=\\\"Mali\\\">Mali</option> <option value=\\\"Malta\\\">Malta</option> <option value=\\\"Marshall Islands\\\">Marshall Islands</option> <option value=\\\"Martinique\\\">Martinique</option> <option value=\\\"Mauritania\\\">Mauritania</option> <option value=\\\"Mauritius\\\">Mauritius</option> <option value=\\\"Mayotte\\\">Mayotte</option> <option value=\\\"Mexico\\\">Mexico</option> <option value=\\\"Micronesia, Federated States of\\\">Micronesia, Federated States of</option> <option value=\\\"Moldova, Republic of\\\">Moldova, Republic of</option> <option value=\\\"Monaco\\\">Monaco</option> <option value=\\\"Mongolia\\\">Mongolia</option> <option value=\\\"Montserrat\\\">Montserrat</option> <option value=\\\"Morocco\\\">Morocco</option> <option value=\\\"Mozambique\\\">Mozambique</option> <option value=\\\"Myanmar\\\">Myanmar</option> <option value=\\\"Namibia\\\">Namibia</option> <option value=\\\"Nauru\\\">Nauru</option> <option value=\\\"Nepal\\\">Nepal</option> <option value=\\\"Netherlands\\\">Netherlands</option> <option value=\\\"Netherlands Antilles\\\">Netherlands Antilles</option> <option value=\\\"New Caledonia\\\">New Caledonia</option> <option value=\\\"New Zealand\\\">New Zealand</option> <option value=\\\"Nicaragua\\\">Nicaragua</option> <option value=\\\"Niger\\\">Niger</option> <option value=\\\"Nigeria\\\">Nigeria</option> <option value=\\\"Niue\\\">Niue</option> <option value=\\\"Norfolk Island\\\">Norfolk Island</option> <option value=\\\"Northern Mariana Islands\\\">Northern Mariana Islands</option> <option value=\\\"Norway\\\">Norway</option> <option value=\\\"Oman\\\">Oman</option> <option value=\\\"Pakistan\\\">Pakistan</option> <option value=\\\"Palau\\\">Palau</option> <option value=\\\"Panama\\\">Panama</option> <option value=\\\"Papua New Guinea\\\">Papua New Guinea</option> <option value=\\\"Paraguay\\\">Paraguay</option> <option value=\\\"Peru\\\">Peru</option> <option value=\\\"Philippines\\\">Philippines</option> <option value=\\\"Pitcairn\\\">Pitcairn</option> <option value=\\\"Poland\\\">Poland</option> <option value=\\\"Portugal\\\">Portugal</option> <option value=\\\"Puerto Rico\\\">Puerto Rico</option> <option value=\\\"Qatar\\\">Qatar</option> <option value=\\\"Reunion\\\">Reunion</option> <option value=\\\"Romania\\\">Romania</option> <option value=\\\"Russian Federation\\\">Russian Federation</option> <option value=\\\"Rwanda\\\">Rwanda</option> <option value=\\\"Saint Kitts and Nevis\\\">Saint Kitts and Nevis</option> <option value=\\\"Saint Lucia\\\">Saint Lucia</option> <option value=\\\"Saint Vincent and the Grenadines\\\">Saint Vincent and the Grenadines</option> <option value=\\\"Samoa\\\">Samoa</option> <option value=\\\"San Marino\\\">San Marino</option> <option value=\\\"Sao Tome and Principe\\\">Sao Tome and Principe</option> <option value=\\\"Saudi Arabia\\\">Saudi Arabia</option> <option value=\\\"Senegal\\\">Senegal</option> <option value=\\\"Seychelles\\\">Seychelles</option> <option value=\\\"Sierra Leone\\\">Sierra Leone</option> <option value=\\\"Singapore\\\">Singapore</option> <option value=\\\"Slovakia (Slovak Republic)\\\">Slovakia (Slovak Republic)</option> <option value=\\\"Slovenia\\\">Slovenia</option> <option value=\\\"Solomon Islands\\\">Solomon Islands</option> <option value=\\\"Somalia\\\">Somalia</option> <option value=\\\"South Africa\\\">South Africa</option> <option value=\\\"South Georgia and the South Sandwich Islands\\\">South Georgia and the South Sandwich Islands</option> <option value=\\\"Spain\\\">Spain</option> <option value=\\\"Sri Lanka\\\">Sri Lanka</option> <option value=\\\"St. Helena\\\">St. Helena</option> <option value=\\\"St. Pierre and Miquelon\\\">St. Pierre and Miquelon</option> <option value=\\\"Sudan\\\">Sudan</option> <option value=\\\"Suriname\\\">Suriname</option> <option value=\\\"Svalbard and Jan Mayen Islands\\\">Svalbard and Jan Mayen Islands</option> <option value=\\\"Swaziland\\\">Swaziland</option> <option value=\\\"Sweden\\\">Sweden</option> <option value=\\\"Switzerland\\\">Switzerland</option> <option value=\\\"Syrian Arab Republic\\\">Syrian Arab Republic</option> <option value=\\\"Taiwan, Province of China\\\">Taiwan, Province of China</option> <option value=\\\"Tajikistan\\\">Tajikistan</option> <option value=\\\"Tanzania, United Republic of\\\">Tanzania, United Republic of</option> <option value=\\\"Thailand\\\">Thailand</option> <option value=\\\"Togo\\\">Togo</option> <option value=\\\"Tokelau\\\">Tokelau</option> <option value=\\\"Tonga\\\">Tonga</option> <option value=\\\"Trinidad and Tobago\\\">Trinidad and Tobago</option> <option value=\\\"Tunisia\\\">Tunisia</option> <option value=\\\"Turkey\\\">Turkey</option> <option value=\\\"Turkmenistan\\\">Turkmenistan</option> <option value=\\\"Turks and Caicos Islands\\\">Turks and Caicos Islands</option> <option value=\\\"Tuvalu\\\">Tuvalu</option> <option value=\\\"Uganda\\\">Uganda</option> <option value=\\\"Ukraine\\\">Ukraine</option> <option value=\\\"United Arab Emirates\\\">United Arab Emirates</option> <option value=\\\"United Kingdom\\\">United Kingdom</option> <option value=\\\"United States\\\">United States</option> <option value=\\\"United States Minor Outlying Islands\\\">United States Minor Outlying Islands</option> <option value=\\\"Uruguay\\\">Uruguay</option> <option value=\\\"Uzbekistan\\\">Uzbekistan</option> <option value=\\\"Vanuatu\\\">Vanuatu</option> <option value=\\\"Venezuela\\\">Venezuela</option> <option value=\\\"Vietnam\\\">Vietnam</option> <option value=\\\"Virgin Islands (British)\\\">Virgin Islands (British)</option> <option value=\\\"Virgin Islands (U.S.)\\\">Virgin Islands (U.S.)</option> <option value=\\\"Wallis and Futuna Islands\\\">Wallis and Futuna Islands</option> <option value=\\\"Western Sahara\\\">Western Sahara</option> <option value=\\\"Yemen\\\">Yemen</option> <option value=\\\"Yugoslavia\\\">Yugoslavia</option> <option value=\\\"Zambia\\\">Zambia</option> <option value=\\\"Zimbabwe\\\">Zimbabwe</option> </select> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-card-holder-zip-code\\\">Zip</label> <input class=\\\"form-control\\\" placeholder=\\\"1234\\\" name=\\\"zipCode\\\" type=\\\"text\\\" id=\\\"bootstrap-vertical-wizard-card-holder-zip-code\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-card-exp-date\\\">Date of Expire</label> <input class=\\\"form-control\\\" placeholder=\\\"15/2024\\\" name=\\\"expDate\\\" type=\\\"text\\\" id=\\\"bootstrap-vertical-wizard-card-exp-date\\\" /> </div> <div class=\\\"col-6\\\"> <label class=\\\"form-label\\\" for=\\\"bootstrap-vertical-wizard-card-cvv\\\">CVV</label> <input class=\\\"form-control\\\" placeholder=\\\"123\\\" name=\\\"cvv\\\" maxlength=\\\"3\\\" pattern=\\\"[0-9]{3}\\\" type=\\\"number\\\" id=\\\"bootstrap-vertical-wizard-card-cvv\\\" /> </div> </div> </form> </div> <div class=\\\"tab-pane\\\" role=\\\"tabpanel\\\" aria-labelledby=\\\"bootstrap-vertical-wizard-tab4\\\" id=\\\"bootstrap-vertical-wizard-tab4\\\"> <div class=\\\"row flex-center pb-8 pt-4 gx-3 gy-4\\\"> <div class=\\\"col-12 col-sm-auto\\\"> <div class=\\\"text-center text-sm-start\\\"><img class=\\\"d-dark-none\\\" src=\\\"../../assets/img/spot-illustrations/38.webp\\\" alt=\\\"\\\" width=\\\"220\\\" /><img class=\\\"d-light-none\\\" src=\\\"../../assets/img/spot-illustrations/dark_38.webp\\\" alt=\\\"\\\" width=\\\"220\\\" /></div> </div> <div class=\\\"col-12 col-sm-auto\\\"> <div class=\\\"text-center text-sm-start\\\"> <h5 class=\\\"mb-3\\\">You are all set!</h5> <p class=\\\"text-body-emphasis fs-9\\\">Now you can access your account<br />anytime anywhere</p><a class=\\\"btn btn-primary px-6\\\" href=\\\"../../modules/forms/wizard.html\\\">Start Over</a> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\\\"card-footer border-top-0\\\" data-wizard-footer=\\\"data-wizard-footer\\\"> <div class=\\\"d-flex pager wizard list-inline mb-0\\\"> <button class=\\\"d-none btn btn-link ps-0\\\" type=\\\"button\\\" data-wizard-prev-btn=\\\"data-wizard-prev-btn\\\"><span class=\\\"fas fa-chevron-left me-1\\\" data-fa-transform=\\\"shrink-3\\\"></span>Previous</button> <div class=\\\"flex-1 text-end\\\"> <button class=\\\"btn btn-primary px-6 px-sm-6\\\" type=\\\"submit\\\" data-wizard-next-btn=\\\"data-wizard-next-btn\\\">Next<span class=\\\"fas fa-chevron-right ms-1\\\" data-fa-transform=\\\"shrink-3\\\"> </span></button> </div> </div> </div> </div></code>"}
              </pre>
            </div>
            <div className="p-4 code-to-copy">
              <div className="card theme-wizard mb-5" data-theme-wizard>
                <div className="card-body pt-4 pb-0">
                  <div className="row justify-content-between">
                    <div className="col-md-3 order-md-1">
                      <div className="scrollbar mb-4">
                        <ul className="nav justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-md">
                          <li className="nav-item">
                            <a href="#bootstrap-vertical-wizard-tab1" className="nav-link active py-0 py-md-3"  data-bs-toggle={"tab"} data-wizard-step={"1"}>
                              <div className="text-center d-inline-block d-md-flex align-items-center gap-3">
                                <span className="nav-item-circle-parent">
                                  <span className="nav-item-circle">
                                    <span className="fa-solid fa-file nav-item-icon">                                    </span>
                                    <span className="fa-solid fa-check check-icon">                                    </span>
                                  </span>
                                </span>
                                <span className="nav-item-title fs-9 fs-xl-8">
Account
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#bootstrap-vertical-wizard-tab2" className="nav-link py-0 py-md-3"  data-bs-toggle={"tab"} data-wizard-step={"2"}>
                              <div className="text-center d-inline-block d-md-flex align-items-center gap-3">
                                <span className="nav-item-circle-parent">
                                  <span className="nav-item-circle">
                                    <span className="fa-solid fa-location-dot nav-item-icon">                                    </span>
                                    <span className="fa-solid fa-check check-icon">                                    </span>
                                  </span>
                                </span>
                                <span className="nav-item-title fs-9 fs-xl-8">
Personal
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#bootstrap-vertical-wizard-tab3" className="nav-link py-0 py-md-3"  data-bs-toggle={"tab"} data-wizard-step={"3"}>
                              <div className="text-center d-inline-block d-md-flex align-items-center gap-3">
                                <span className="nav-item-circle-parent">
                                  <span className="nav-item-circle">
                                    <span className="fa-solid fa-mug-saucer nav-item-icon">                                    </span>
                                    <span className="fa-solid fa-check check-icon">                                    </span>
                                  </span>
                                </span>
                                <span className="nav-item-title fs-9 fs-xl-8">
Billing
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#bootstrap-vertical-wizard-tab4" className="nav-link py-0 py-md-3"  data-bs-toggle={"tab"} data-wizard-step={"4"}>
                              <div className="text-center d-inline-block d-md-flex align-items-center gap-3">
                                <span className="nav-item-circle-parent">
                                  <span className="nav-item-circle">
                                    <span className="fa-solid fa-images nav-item-icon">                                    </span>
                                    <span className="fa-solid fa-check check-icon">                                    </span>
                                  </span>
                                </span>
                                <span className="nav-item-title fs-9 fs-xl-8">
Done
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="tab-content">
                        <div className="tab-pane active" role="tabpanel" aria-labelledby="bootstrap-vertical-wizard-tab1" id="bootstrap-vertical-wizard-tab1">
                          <form id="wizardVerticalForm1" noValidate data-wizard-form={"1"}>
                            <div className="mb-2">
                              <label className="form-label text-body" htmlFor="bootstrap-vertical-wizard-wizard-name">
Name
                              </label>
                              <input className="form-control" type="text" name placeholder="John Smith" id="bootstrap-vertical-wizard-wizard-name" />
                            </div>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="bootstrap-vertical-wizard-wizard-email">
Email*
                              </label>
                              <input className="form-control" type="email" name="email" placeholder="Email address" pattern={"^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"} id="bootstrap-vertical-wizard-wizard-email" />
                            </div>
                            <div className="row g-3 mb-3">
                              <div className="col-sm-6">
                                <div className="mb-2 mb-sm-0">
                                  <label className="form-label text-body" htmlFor="bootstrap-vertical-wizard-wizard-password">
Password*
                                  </label>
                                  <input className="form-control" type="password" name="password" placeholder="Password" id="bootstrap-vertical-wizard-wizard-password" data-wizard-password={"true"} />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-2">
                                  <label className="form-label text-body" htmlFor="bootstrap-vertical-wizard-wizard-confirm-password">
Confirm Password*
                                  </label>
                                  <input className="form-control" type="password" name="confirmPassword" placeholder="Confirm Password" id="bootstrap-vertical-wizard-wizard-confirm-password" data-wizard-confirm-password={"true"} />
                                </div>
                              </div>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="terms" defaultChecked id="bootstrap-vertical-wizard-wizard-checkbox" />
                              <label className="form-check-label text-body" htmlFor="bootstrap-vertical-wizard-wizard-checkbox">
I accept the 
                                <a href="#!">
terms 
                                </a>
and 
                                <a href="#!">
privacy policy
                                </a>
                              </label>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-vertical-wizard-tab2" id="bootstrap-vertical-wizard-tab2">
                          <form id="wizardVerticalForm2" noValidate data-wizard-form={"2"}>
                            <div className="row g-4 mb-4" data-dropzone data-options={"{\"maxFiles\":1,\"data\":[{\"name\":\"avatar.webp\",\"size\":\"54kb\",\"url\":\"../../assets/img/team\"}]}"}>
                              <div className="fallback">
                                <input type="file" name="file" />
                              </div>
                              <div className="col-md-auto">
                                <div className="dz-preview dz-preview-single">
                                  <div className="dz-preview-cover d-flex align-items-center justify-content-center mb-2 mb-md-0">
                                    <div className="avatar avatar-4xl">
                                      <PhoenixImage src="/assets/img/team/avatar.webp" alt="..." className="rounded-circle avatar-placeholder" />
                                    </div>
                                    <div className="dz-progress">
                                      <span className="dz-upload" data-dz-uploadprogress={""}>                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md">
                                <div className="dz-message dropzone-area px-2 py-3" data-dz-message>
                                  <div className="text-center text-body-emphasis">
                                    <h5 className="mb-2">
                                      <span className="fa-solid fa-upload me-2">                                      </span>
Upload Profile Picture
                                    </h5>
                                    <p className="mb-0 fs-9 text-body-tertiary text-opacity-85 lh-sm">
Upload a 300x300 jpg image with 
                                      <br />
a maximum size of 400KB
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="bootstrap-vertical-wizard-gender">
Gender
                              </label>
                              <select className="form-select" name="gender" id="bootstrap-vertical-wizard-gender">
                                <option value="">
Select your gender ...
                                </option>
                                <option value="Male">
Male
                                </option>
                                <option value="Female">
Female
                                </option>
                                <option value="Other">
Other
                                </option>
                              </select>
                            </div>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="bootstrap-vertical-wizard-wizard-phone">
Phone
                              </label>
                              <input className="form-control" type="text" name="phone" placeholder="Phone" id="bootstrap-vertical-wizard-wizard-phone" />
                            </div>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="bootstrap-vertical-wizard-wizard-datepicker">
Date of Birth
                              </label>
                              <input className="form-control datetimepicker" type="text" placeholder="d/m/y" data-options={"{\"dateFormat\":\"d/m/y\",\"disableMobile\":true}"} id="bootstrap-vertical-wizard-wizard-datepicker" />
                            </div>
                            <div className="mb-2">
                              <label className="form-label" htmlFor="bootstrap-vertical-wizard-wizard-address">
Address
                              </label>
                              <textarea className="form-control" rows={4} id="bootstrap-vertical-wizard-wizard-address" defaultValue="" />
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-vertical-wizard-tab3" id="bootstrap-vertical-wizard-tab3">
                          <form className="mb-2" id="wizardVerticalForm3" noValidate data-wizard-form={"3"}>
                            <div className="row gx-3 gy-2">
                              <div className="col-6">
                                <label className="form-label" htmlFor="bootstrap-vertical-wizard-card-number">
Card Number
                                </label>
                                <input className="form-control" placeholder="XXXX XXXX XXXX XXXX" type="text" id="bootstrap-vertical-wizard-card-number" />
                              </div>
                              <div className="col-6">
                                <label className="form-label" htmlFor="bootstrap-vertical-wizard-card-name">
Name
                                </label>
                                <input className="form-control" placeholder="John Doe" name="cardName" type="text" id="bootstrap-vertical-wizard-card-name" />
                              </div>
                              <div className="col-6">
                                <label className="form-label" htmlFor="bootstrap-vertical-wizard-card-holder-country">
Country
                                </label>
                                <select className="form-select" name="customSelectCountry" id="bootstrap-vertical-wizard-card-holder-country">
                                  <option value="">
Select your country ...
                                  </option>
                                  <option value="Afghanistan">
Afghanistan
                                  </option>
                                  <option value="Albania">
Albania
                                  </option>
                                  <option value="Algeria">
Algeria
                                  </option>
                                  <option value="American Samoa">
American Samoa
                                  </option>
                                  <option value="Andorra">
Andorra
                                  </option>
                                  <option value="Angola">
Angola
                                  </option>
                                  <option value="Anguilla">
Anguilla
                                  </option>
                                  <option value="Antarctica">
Antarctica
                                  </option>
                                  <option value="Antigua and Barbuda">
Antigua and Barbuda
                                  </option>
                                  <option value="Argentina">
Argentina
                                  </option>
                                  <option value="Armenia">
Armenia
                                  </option>
                                  <option value="Aruba">
Aruba
                                  </option>
                                  <option value="Australia">
Australia
                                  </option>
                                  <option value="Austria">
Austria
                                  </option>
                                  <option value="Azerbaijan">
Azerbaijan
                                  </option>
                                  <option value="Bahamas">
Bahamas
                                  </option>
                                  <option value="Bahrain">
Bahrain
                                  </option>
                                  <option value="Bangladesh">
Bangladesh
                                  </option>
                                  <option value="Barbados">
Barbados
                                  </option>
                                  <option value="Belarus">
Belarus
                                  </option>
                                  <option value="Belgium">
Belgium
                                  </option>
                                  <option value="Belize">
Belize
                                  </option>
                                  <option value="Benin">
Benin
                                  </option>
                                  <option value="Bermuda">
Bermuda
                                  </option>
                                  <option value="Bhutan">
Bhutan
                                  </option>
                                  <option value="Bolivia">
Bolivia
                                  </option>
                                  <option value="Bosnia and Herzegowina">
Bosnia and Herzegowina
                                  </option>
                                  <option value="Botswana">
Botswana
                                  </option>
                                  <option value="Bouvet Island">
Bouvet Island
                                  </option>
                                  <option value="Brazil">
Brazil
                                  </option>
                                  <option value="British Indian Ocean Territory">
British Indian Ocean Territory
                                  </option>
                                  <option value="Brunei Darussalam">
Brunei Darussalam
                                  </option>
                                  <option value="Bulgaria">
Bulgaria
                                  </option>
                                  <option value="Burkina Faso">
Burkina Faso
                                  </option>
                                  <option value="Burundi">
Burundi
                                  </option>
                                  <option value="Cambodia">
Cambodia
                                  </option>
                                  <option value="Cameroon">
Cameroon
                                  </option>
                                  <option value="Canada">
Canada
                                  </option>
                                  <option value="Cape Verde">
Cape Verde
                                  </option>
                                  <option value="Cayman Islands">
Cayman Islands
                                  </option>
                                  <option value="Central African Republic">
Central African Republic
                                  </option>
                                  <option value="Chad">
Chad
                                  </option>
                                  <option value="Chile">
Chile
                                  </option>
                                  <option value="China">
China
                                  </option>
                                  <option value="Christmas Island">
Christmas Island
                                  </option>
                                  <option value="Cocos (Keeling) Islands">
Cocos (Keeling) Islands
                                  </option>
                                  <option value="Colombia">
Colombia
                                  </option>
                                  <option value="Comoros">
Comoros
                                  </option>
                                  <option value="Congo">
Congo
                                  </option>
                                  <option value="Congo, the Democratic Republic of the">
Congo, the Democratic Republic of the
                                  </option>
                                  <option value="Cook Islands">
Cook Islands
                                  </option>
                                  <option value="Costa Rica">
Costa Rica
                                  </option>
                                  <option value={"Cote d'Ivoire"}>
Cote d'Ivoire
                                  </option>
                                  <option value="Croatia (Hrvatska)">
Croatia (Hrvatska)
                                  </option>
                                  <option value="Cuba">
Cuba
                                  </option>
                                  <option value="Cyprus">
Cyprus
                                  </option>
                                  <option value="Czech Republic">
Czech Republic
                                  </option>
                                  <option value="Denmark">
Denmark
                                  </option>
                                  <option value="Djibouti">
Djibouti
                                  </option>
                                  <option value="Dominica">
Dominica
                                  </option>
                                  <option value="Dominican Republic">
Dominican Republic
                                  </option>
                                  <option value="East Timor">
East Timor
                                  </option>
                                  <option value="Ecuador">
Ecuador
                                  </option>
                                  <option value="Egypt">
Egypt
                                  </option>
                                  <option value="El Salvador">
El Salvador
                                  </option>
                                  <option value="Equatorial Guinea">
Equatorial Guinea
                                  </option>
                                  <option value="Eritrea">
Eritrea
                                  </option>
                                  <option value="Estonia">
Estonia
                                  </option>
                                  <option value="Ethiopia">
Ethiopia
                                  </option>
                                  <option value="Falkland Islands (Malvinas)">
Falkland Islands (Malvinas)
                                  </option>
                                  <option value="Faroe Islands">
Faroe Islands
                                  </option>
                                  <option value="Fiji">
Fiji
                                  </option>
                                  <option value="Finland">
Finland
                                  </option>
                                  <option value="France">
France
                                  </option>
                                  <option value="France Metropolitan">
France Metropolitan
                                  </option>
                                  <option value="French Guiana">
French Guiana
                                  </option>
                                  <option value="French Polynesia">
French Polynesia
                                  </option>
                                  <option value="French Southern Territories">
French Southern Territories
                                  </option>
                                  <option value="Gabon">
Gabon
                                  </option>
                                  <option value="Gambia">
Gambia
                                  </option>
                                  <option value="Georgia">
Georgia
                                  </option>
                                  <option value="Germany">
Germany
                                  </option>
                                  <option value="Ghana">
Ghana
                                  </option>
                                  <option value="Gibraltar">
Gibraltar
                                  </option>
                                  <option value="Greece">
Greece
                                  </option>
                                  <option value="Greenland">
Greenland
                                  </option>
                                  <option value="Grenada">
Grenada
                                  </option>
                                  <option value="Guadeloupe">
Guadeloupe
                                  </option>
                                  <option value="Guam">
Guam
                                  </option>
                                  <option value="Guatemala">
Guatemala
                                  </option>
                                  <option value="Guinea">
Guinea
                                  </option>
                                  <option value="Guinea-Bissau">
Guinea-Bissau
                                  </option>
                                  <option value="Guyana">
Guyana
                                  </option>
                                  <option value="Haiti">
Haiti
                                  </option>
                                  <option value="Heard and Mc Donald Islands">
Heard and Mc Donald Islands
                                  </option>
                                  <option value="Holy See (Vatican City State)">
Holy See (Vatican City State)
                                  </option>
                                  <option value="Honduras">
Honduras
                                  </option>
                                  <option value="Hong Kong">
Hong Kong
                                  </option>
                                  <option value="Hungary">
Hungary
                                  </option>
                                  <option value="Iceland">
Iceland
                                  </option>
                                  <option value="India">
India
                                  </option>
                                  <option value="Indonesia">
Indonesia
                                  </option>
                                  <option value="Iran (Islamic Republic of)">
Iran (Islamic Republic of)
                                  </option>
                                  <option value="Iraq">
Iraq
                                  </option>
                                  <option value="Ireland">
Ireland
                                  </option>
                                  <option value="Israel">
Israel
                                  </option>
                                  <option value="Italy">
Italy
                                  </option>
                                  <option value="Jamaica">
Jamaica
                                  </option>
                                  <option value="Japan">
Japan
                                  </option>
                                  <option value="Jordan">
Jordan
                                  </option>
                                  <option value="Kazakhstan">
Kazakhstan
                                  </option>
                                  <option value="Kenya">
Kenya
                                  </option>
                                  <option value="Kiribati">
Kiribati
                                  </option>
                                  <option value={"Korea, Democratic People's Republic of"}>
Korea, Democratic People's Republic of
                                  </option>
                                  <option value="Korea, Republic of">
Korea, Republic of
                                  </option>
                                  <option value="Kuwait">
Kuwait
                                  </option>
                                  <option value="Kyrgyzstan">
Kyrgyzstan
                                  </option>
                                  <option value={"Lao, People's Democratic Republic"}>
Lao, People's Democratic Republic
                                  </option>
                                  <option value="Latvia">
Latvia
                                  </option>
                                  <option value="Lebanon">
Lebanon
                                  </option>
                                  <option value="Lesotho">
Lesotho
                                  </option>
                                  <option value="Liberia">
Liberia
                                  </option>
                                  <option value="Libyan Arab Jamahiriya">
Libyan Arab Jamahiriya
                                  </option>
                                  <option value="Liechtenstein">
Liechtenstein
                                  </option>
                                  <option value="Lithuania">
Lithuania
                                  </option>
                                  <option value="Luxembourg">
Luxembourg
                                  </option>
                                  <option value="Macau">
Macau
                                  </option>
                                  <option value="Macedonia, The Former Yugoslav Republic of">
Macedonia, The Former Yugoslav Republic of
                                  </option>
                                  <option value="Madagascar">
Madagascar
                                  </option>
                                  <option value="Malawi">
Malawi
                                  </option>
                                  <option value="Malaysia">
Malaysia
                                  </option>
                                  <option value="Maldives">
Maldives
                                  </option>
                                  <option value="Mali">
Mali
                                  </option>
                                  <option value="Malta">
Malta
                                  </option>
                                  <option value="Marshall Islands">
Marshall Islands
                                  </option>
                                  <option value="Martinique">
Martinique
                                  </option>
                                  <option value="Mauritania">
Mauritania
                                  </option>
                                  <option value="Mauritius">
Mauritius
                                  </option>
                                  <option value="Mayotte">
Mayotte
                                  </option>
                                  <option value="Mexico">
Mexico
                                  </option>
                                  <option value="Micronesia, Federated States of">
Micronesia, Federated States of
                                  </option>
                                  <option value="Moldova, Republic of">
Moldova, Republic of
                                  </option>
                                  <option value="Monaco">
Monaco
                                  </option>
                                  <option value="Mongolia">
Mongolia
                                  </option>
                                  <option value="Montserrat">
Montserrat
                                  </option>
                                  <option value="Morocco">
Morocco
                                  </option>
                                  <option value="Mozambique">
Mozambique
                                  </option>
                                  <option value="Myanmar">
Myanmar
                                  </option>
                                  <option value="Namibia">
Namibia
                                  </option>
                                  <option value="Nauru">
Nauru
                                  </option>
                                  <option value="Nepal">
Nepal
                                  </option>
                                  <option value="Netherlands">
Netherlands
                                  </option>
                                  <option value="Netherlands Antilles">
Netherlands Antilles
                                  </option>
                                  <option value="New Caledonia">
New Caledonia
                                  </option>
                                  <option value="New Zealand">
New Zealand
                                  </option>
                                  <option value="Nicaragua">
Nicaragua
                                  </option>
                                  <option value="Niger">
Niger
                                  </option>
                                  <option value="Nigeria">
Nigeria
                                  </option>
                                  <option value="Niue">
Niue
                                  </option>
                                  <option value="Norfolk Island">
Norfolk Island
                                  </option>
                                  <option value="Northern Mariana Islands">
Northern Mariana Islands
                                  </option>
                                  <option value="Norway">
Norway
                                  </option>
                                  <option value="Oman">
Oman
                                  </option>
                                  <option value="Pakistan">
Pakistan
                                  </option>
                                  <option value="Palau">
Palau
                                  </option>
                                  <option value="Panama">
Panama
                                  </option>
                                  <option value="Papua New Guinea">
Papua New Guinea
                                  </option>
                                  <option value="Paraguay">
Paraguay
                                  </option>
                                  <option value="Peru">
Peru
                                  </option>
                                  <option value="Philippines">
Philippines
                                  </option>
                                  <option value="Pitcairn">
Pitcairn
                                  </option>
                                  <option value="Poland">
Poland
                                  </option>
                                  <option value="Portugal">
Portugal
                                  </option>
                                  <option value="Puerto Rico">
Puerto Rico
                                  </option>
                                  <option value="Qatar">
Qatar
                                  </option>
                                  <option value="Reunion">
Reunion
                                  </option>
                                  <option value="Romania">
Romania
                                  </option>
                                  <option value="Russian Federation">
Russian Federation
                                  </option>
                                  <option value="Rwanda">
Rwanda
                                  </option>
                                  <option value="Saint Kitts and Nevis">
Saint Kitts and Nevis
                                  </option>
                                  <option value="Saint Lucia">
Saint Lucia
                                  </option>
                                  <option value="Saint Vincent and the Grenadines">
Saint Vincent and the Grenadines
                                  </option>
                                  <option value="Samoa">
Samoa
                                  </option>
                                  <option value="San Marino">
San Marino
                                  </option>
                                  <option value="Sao Tome and Principe">
Sao Tome and Principe
                                  </option>
                                  <option value="Saudi Arabia">
Saudi Arabia
                                  </option>
                                  <option value="Senegal">
Senegal
                                  </option>
                                  <option value="Seychelles">
Seychelles
                                  </option>
                                  <option value="Sierra Leone">
Sierra Leone
                                  </option>
                                  <option value="Singapore">
Singapore
                                  </option>
                                  <option value="Slovakia (Slovak Republic)">
Slovakia (Slovak Republic)
                                  </option>
                                  <option value="Slovenia">
Slovenia
                                  </option>
                                  <option value="Solomon Islands">
Solomon Islands
                                  </option>
                                  <option value="Somalia">
Somalia
                                  </option>
                                  <option value="South Africa">
South Africa
                                  </option>
                                  <option value="South Georgia and the South Sandwich Islands">
South Georgia and the South Sandwich Islands
                                  </option>
                                  <option value="Spain">
Spain
                                  </option>
                                  <option value="Sri Lanka">
Sri Lanka
                                  </option>
                                  <option value="St. Helena">
St. Helena
                                  </option>
                                  <option value="St. Pierre and Miquelon">
St. Pierre and Miquelon
                                  </option>
                                  <option value="Sudan">
Sudan
                                  </option>
                                  <option value="Suriname">
Suriname
                                  </option>
                                  <option value="Svalbard and Jan Mayen Islands">
Svalbard and Jan Mayen Islands
                                  </option>
                                  <option value="Swaziland">
Swaziland
                                  </option>
                                  <option value="Sweden">
Sweden
                                  </option>
                                  <option value="Switzerland">
Switzerland
                                  </option>
                                  <option value="Syrian Arab Republic">
Syrian Arab Republic
                                  </option>
                                  <option value="Taiwan, Province of China">
Taiwan, Province of China
                                  </option>
                                  <option value="Tajikistan">
Tajikistan
                                  </option>
                                  <option value="Tanzania, United Republic of">
Tanzania, United Republic of
                                  </option>
                                  <option value="Thailand">
Thailand
                                  </option>
                                  <option value="Togo">
Togo
                                  </option>
                                  <option value="Tokelau">
Tokelau
                                  </option>
                                  <option value="Tonga">
Tonga
                                  </option>
                                  <option value="Trinidad and Tobago">
Trinidad and Tobago
                                  </option>
                                  <option value="Tunisia">
Tunisia
                                  </option>
                                  <option value="Turkey">
Turkey
                                  </option>
                                  <option value="Turkmenistan">
Turkmenistan
                                  </option>
                                  <option value="Turks and Caicos Islands">
Turks and Caicos Islands
                                  </option>
                                  <option value="Tuvalu">
Tuvalu
                                  </option>
                                  <option value="Uganda">
Uganda
                                  </option>
                                  <option value="Ukraine">
Ukraine
                                  </option>
                                  <option value="United Arab Emirates">
United Arab Emirates
                                  </option>
                                  <option value="United Kingdom">
United Kingdom
                                  </option>
                                  <option value="United States">
United States
                                  </option>
                                  <option value="United States Minor Outlying Islands">
United States Minor Outlying Islands
                                  </option>
                                  <option value="Uruguay">
Uruguay
                                  </option>
                                  <option value="Uzbekistan">
Uzbekistan
                                  </option>
                                  <option value="Vanuatu">
Vanuatu
                                  </option>
                                  <option value="Venezuela">
Venezuela
                                  </option>
                                  <option value="Vietnam">
Vietnam
                                  </option>
                                  <option value="Virgin Islands (British)">
Virgin Islands (British)
                                  </option>
                                  <option value="Virgin Islands (U.S.)">
Virgin Islands (U.S.)
                                  </option>
                                  <option value="Wallis and Futuna Islands">
Wallis and Futuna Islands
                                  </option>
                                  <option value="Western Sahara">
Western Sahara
                                  </option>
                                  <option value="Yemen">
Yemen
                                  </option>
                                  <option value="Yugoslavia">
Yugoslavia
                                  </option>
                                  <option value="Zambia">
Zambia
                                  </option>
                                  <option value="Zimbabwe">
Zimbabwe
                                  </option>
                                </select>
                              </div>
                              <div className="col-6">
                                <label className="form-label" htmlFor="bootstrap-vertical-wizard-card-holder-zip-code">
Zip
                                </label>
                                <input className="form-control" placeholder="1234" name="zipCode" type="text" id="bootstrap-vertical-wizard-card-holder-zip-code" />
                              </div>
                              <div className="col-6">
                                <label className="form-label" htmlFor="bootstrap-vertical-wizard-card-exp-date">
Date of Expire
                                </label>
                                <input className="form-control" placeholder="15/2024" name="expDate" type="text" id="bootstrap-vertical-wizard-card-exp-date" />
                              </div>
                              <div className="col-6">
                                <label className="form-label" htmlFor="bootstrap-vertical-wizard-card-cvv">
CVV
                                </label>
                                <input className="form-control" placeholder="123" name="cvv" maxLength={3} pattern={"[0-9]{3}"} type="number" id="bootstrap-vertical-wizard-card-cvv" />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane" role="tabpanel" aria-labelledby="bootstrap-vertical-wizard-tab4" id="bootstrap-vertical-wizard-tab4">
                          <div className="row flex-center pb-8 pt-4 gx-3 gy-4">
                            <div className="col-12 col-sm-auto">
                              <div className="text-center text-sm-start">
                                <PhoenixImage src="/assets/img/spot-illustrations/38.webp" alt="" className="d-dark-none" width={220} />
                                <PhoenixImage src="/assets/img/spot-illustrations/dark_38.webp" alt="" className="d-light-none" width={220} />
                              </div>
                            </div>
                            <div className="col-12 col-sm-auto">
                              <div className="text-center text-sm-start">
                                <h5 className="mb-3">
You are all set!
                                </h5>
                                <p className="text-body-emphasis fs-9">
Now you can access your account
                                  <br />
anytime anywhere
                                </p>
                                <PhoenixLink href="/modules/forms/wizard" className="btn btn-primary px-6">
Start Over
                                </PhoenixLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer border-top-0" data-wizard-footer>
                  <div className="d-flex pager wizard list-inline mb-0">
                    <button className="d-none btn btn-link ps-0" type="button" data-wizard-prev-btn>
                      <span className="fas fa-chevron-left me-1" data-fa-transform={"shrink-3"}>                      </span>
Previous
                    </button>
                    <div className="flex-1 text-end">
                      <button className="btn btn-primary px-6 px-sm-6" type="submit" data-wizard-next-btn>
Next
                        <span className="fas fa-chevron-right ms-1" data-fa-transform={"shrink-3"}>                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="error-modal" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document" style={{"maxWidth":"500px"} as CSSProperties}>
          <div className="modal-content position-relative">
            <div className="modal-header justify-content-between border-gray-100 p-3">
              <h4 className="text-body-secondary mb-0">
Access Denied!
              </h4>
              <button className="btn p-0 btn-link text-danger" data-bs-dismiss={"modal"}>
                <span className="fas fa-times">                </span>
              </button>
            </div>
            <div className="modal-body px-4 py-6">
              <div className="d-flex align-items-center">
                <PhoenixImage src="/assets/img/icons/stop.png" alt="" className="me-4" />
                <div className="flex-1">
                  <p className="mb-0 fw-semibold text-body-tertiary">
You do not have the link to access. Please start 
                    <br />
over to get access for the next session.
                    <br />
Thank You!
                  </p>
                </div>
              </div>
            </div>
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
