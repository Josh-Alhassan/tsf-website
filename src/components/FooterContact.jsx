import React from "react";

import "./FooterContact.css";

function FooterContact() {
  return (
    <div className="footer__contact">
      <div className="footer__contact-infos">
        <h3 className="footer__contact-title">Contact</h3>

        {/* Email Contact */}
        <div className="footer__contact-email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M3.60481 20H6.00801H18.5047C20.1869 20 21.6288 18.9186 21.9893 17.2363L23.1909 12.4299C23.4312 11.3485 23.1909 10.267 22.5901 9.30574C21.8692 8.46462 20.9079 7.86382 19.7063 7.86382H16.3418L17.1829 6.06141C17.7837 5.22029 18.024 4.01869 18.024 2.93725C18.024 1.85581 17.4232 0.894526 16.4619 0.534045L15.9813 0.293725C14.8999 -0.307076 13.4579 0.0534045 12.6168 1.01469L6.48865 8.2243C6.36849 7.98398 6.24833 7.98398 6.00801 7.98398H3.60481C1.56208 7.98398 0 9.54606 0 11.5888V16.3952C0 18.4379 1.56208 20 3.60481 20ZM7.20961 10.988L14.5394 2.45661C14.6595 2.33645 14.7797 2.33645 14.8999 2.33645L15.3805 2.57677C15.5007 2.57677 15.6208 2.69693 15.6208 2.93725C15.6208 3.65821 15.3805 4.49933 15.1402 5.10013L13.3378 8.58478C13.0975 8.94526 13.2176 9.4259 13.3378 9.78638C13.5781 10.1469 13.9386 10.3872 14.4192 10.3872H19.7063C20.0668 10.3872 20.4272 10.5073 20.6676 10.8678C20.9079 11.1081 21.028 11.5888 20.9079 11.9493L19.7063 16.7557C19.5861 17.2363 19.1055 17.717 18.5047 17.717H7.20961V10.988ZM2.4032 11.5888C2.4032 10.8678 2.88384 10.3872 3.60481 10.3872H4.80641V10.6275V17.5968H3.60481C2.88384 17.5968 2.4032 17.1162 2.4032 16.3952V11.5888Z"
              fill="url(#paint0_linear_173_645)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_645"
                x1="11.4021"
                y1="-0.535715"
                x2="20.5019"
                y2="38.0987"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
          <p className="footer__contact-email--text">
            Support@traderssupportfunds.com
          </p>
        </div>

        {/* Live Chat Contact */}
        <div className="footer__contact-live-chat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18 8.66667H17.3333V7.33333C17.3333 5.38841 16.5607 3.52315 15.1855 2.14788C13.8102 0.772617 11.9449 0 10 0C8.05508 0 6.18982 0.772617 4.81455 2.14788C3.43928 3.52315 2.66667 5.38841 2.66667 7.33333V8.66667H2C1.46957 8.66667 0.960859 8.87738 0.585786 9.25245C0.210714 9.62753 0 10.1362 0 10.6667V13.3333C0 13.8638 0.210714 14.3725 0.585786 14.7475C0.960859 15.1226 1.46957 15.3333 2 15.3333H2.66667C2.66667 15.8638 2.87738 16.3725 3.25245 16.7475C3.62753 17.1226 4.13623 17.3333 4.66667 17.3333C5.1971 17.3333 5.70581 17.1226 6.08088 16.7475C6.45595 16.3725 6.66667 15.8638 6.66667 15.3333V8.66667C6.66683 8.34662 6.59019 8.0312 6.44318 7.74691C6.29616 7.46263 6.08307 7.21778 5.8218 7.03293C5.56052 6.84808 5.25871 6.72863 4.9417 6.68462C4.62469 6.64061 4.30175 6.67332 4 6.78C4.14065 5.29316 4.83075 3.91222 5.93541 2.90713C7.04007 1.90204 8.47986 1.34506 9.97333 1.34506C11.4668 1.34506 12.9066 1.90204 14.0113 2.90713C15.1159 3.91222 15.806 5.29316 15.9467 6.78C15.648 6.68376 15.3309 6.65915 15.021 6.70814C14.711 6.75714 14.417 6.87837 14.1626 7.06203C13.9082 7.2457 13.7006 7.48665 13.5565 7.76541C13.4124 8.04416 13.336 8.3529 13.3333 8.66667V15.3333C13.3342 15.6528 13.4117 15.9674 13.5591 16.2509C13.7066 16.5343 13.9198 16.7782 14.1809 16.9623C14.442 17.1464 14.7435 17.2653 15.06 17.3089C15.3764 17.3526 15.6988 17.3198 16 17.2133V18.6667H13.9333C13.838 19.1512 13.6327 19.6073 13.3333 20H16.6667C16.8435 20 17.013 19.9298 17.1381 19.8047C17.2631 19.6797 17.3333 19.5101 17.3333 19.3333V15.3333H18C18.5304 15.3333 19.0391 15.1226 19.4142 14.7475C19.7893 14.3725 20 13.8638 20 13.3333V10.6667C20 10.1362 19.7893 9.62753 19.4142 9.25245C19.0391 8.87738 18.5304 8.66667 18 8.66667Z"
              fill="url(#paint0_linear_173_641)"
            />
            <path
              d="M10.6667 16H9.33334C8.80291 16 8.2942 16.2107 7.91913 16.5858C7.54406 16.9609 7.33334 17.4696 7.33334 18C7.33334 18.5304 7.54406 19.0391 7.91913 19.4142C8.2942 19.7893 8.80291 20 9.33334 20H10.6667C11.1971 20 11.7058 19.7893 12.0809 19.4142C12.456 19.0391 12.6667 18.5304 12.6667 18C12.6667 17.4696 12.456 16.9609 12.0809 16.5858C11.7058 16.2107 11.1971 16 10.6667 16Z"
              fill="url(#paint1_linear_173_641)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_641"
                x1="9.79435"
                y1="-0.535715"
                x2="20.1937"
                y2="37.3905"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_173_641"
                x1="9.94517"
                y1="15.8929"
                x2="11.5543"
                y2="23.7175"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>

          <p className="footer__contact-live-chat--text">Live Chat</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="footer__line">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="381"
          height="2"
          viewBox="0 0 381 2"
          fill="none"
        >
          <path
            d="M1 1L380 1.00003"
            stroke="url(#paint0_linear_130_392)"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_130_392"
              x1="-7.04295"
              y1="0.907102"
              x2="-5.1501"
              y2="28.4596"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0773651" stop-color="#0076FC" />
              <stop offset="0.292329" stop-color="#DDB4C2" />
              <stop offset="0.494244" stop-color="#9B8AEA" />
              <stop offset="0.696093" stop-color="#189DC8" />
              <stop offset="0.869577" stop-color="#020212" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* ............. */}
      {/* Socials */}
      <div className="footer__socials">
        {/* FACEBOOK */}
        <div className="facebook__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
          >
            <path
              d="M7.43465 5.18087H4.90267V3.52027C4.90267 2.89663 5.316 2.75123 5.60712 2.75123C5.89758 2.75123 7.39391 2.75123 7.39391 2.75123V0.00960457L4.93314 0C2.20145 0 1.5798 2.04479 1.5798 3.35334V5.18087H0V8.00596H1.5798C1.5798 11.6315 1.5798 16 1.5798 16H4.90267C4.90267 16 4.90267 11.5885 4.90267 8.00596H7.14486L7.43465 5.18087Z"
              fill="url(#paint0_linear_130_395)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_130_395"
                x1="3.64088"
                y1="-0.428572"
                x2="17.9193"
                y2="23.7679"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Instagram */}
        <div className="instagram__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.43473 3.83887C6.17666 3.83887 4.30569 5.67758 4.30569 7.9679C4.30569 10.2582 6.1444 12.0969 8.43473 12.0969C10.725 12.0969 12.5638 10.226 12.5638 7.9679C12.5638 5.70983 10.6928 3.83887 8.43473 3.83887ZM8.43473 10.6131C6.98311 10.6131 5.78957 9.41951 5.78957 7.9679C5.78957 6.51629 6.98311 5.32274 8.43473 5.32274C9.88634 5.32274 11.0799 6.51629 11.0799 7.9679C11.0799 9.41951 9.88634 10.6131 8.43473 10.6131Z"
              fill="url(#paint0_linear_130_396)"
            />
            <path
              d="M12.7251 4.6781C13.2417 4.6781 13.6605 4.25927 13.6605 3.74261C13.6605 3.22596 13.2417 2.80713 12.7251 2.80713C12.2084 2.80713 11.7896 3.22596 11.7896 3.74261C11.7896 4.25927 12.2084 4.6781 12.7251 4.6781Z"
              fill="url(#paint1_linear_130_396)"
            />
            <path
              d="M15.1443 1.32258C14.3056 0.451613 13.1121 0 11.7572 0H5.11208C2.30563 0 0.434662 1.87097 0.434662 4.67742V11.2903C0.434662 12.6774 0.886275 13.871 1.7895 14.7419C2.66047 15.5806 3.82176 16 5.14434 16H11.725C13.1121 16 14.2734 15.5484 15.1121 14.7419C15.983 13.9032 16.4347 12.7097 16.4347 11.3226V4.67742C16.4347 3.32258 15.983 2.16129 15.1443 1.32258ZM15.0153 11.3226C15.0153 12.3226 14.6605 13.129 14.0798 13.6774C13.4992 14.2258 12.6927 14.5161 11.725 14.5161H5.14434C4.1766 14.5161 3.37015 14.2258 2.7895 13.6774C2.20886 13.0968 1.91853 12.2903 1.91853 11.2903V4.67742C1.91853 3.70968 2.20886 2.90323 2.7895 2.32258C3.33789 1.77419 4.1766 1.48387 5.14434 1.48387H11.7895C12.7572 1.48387 13.5637 1.77419 14.1443 2.35484C14.6927 2.93548 15.0153 3.74194 15.0153 4.67742V11.3226Z"
              fill="url(#paint2_linear_130_396)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_130_396"
                x1="8.34981"
                y1="3.61767"
                x2="12.6438"
                y2="19.2775"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_130_396"
                x1="12.7058"
                y1="2.75701"
                x2="13.6787"
                y2="6.30495"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_130_396"
                x1="8.27014"
                y1="-0.428572"
                x2="16.5896"
                y2="29.9124"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Twitter */}
        <div className="twitter__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M8.43496 0C4.0165 0 0.434631 3.58252 0.434631 8.00033C0.434631 12.4188 4.0165 16 8.43496 16C12.8534 16 16.4346 12.4188 16.4346 8.00033C16.4346 3.58252 12.8531 0 8.43496 0ZM12.4648 6.38727C12.4691 6.47368 12.4707 6.56043 12.4707 6.64815C12.4707 9.31254 10.4428 12.3843 6.7345 12.3843C5.5961 12.3843 4.536 12.0507 3.64386 11.4789C3.80175 11.4974 3.96192 11.5068 4.12469 11.5068C5.06946 11.5068 5.93886 11.1845 6.62859 10.6439C5.74652 10.6274 5.00221 10.0442 4.74555 9.24334C4.86836 9.26738 4.99474 9.2794 5.12469 9.2794C5.30858 9.2794 5.48661 9.25536 5.65588 9.2089C4.7332 9.02372 4.03827 8.20825 4.03827 7.23229C4.03827 7.22352 4.03827 7.21508 4.0386 7.2063C4.3102 7.35738 4.62112 7.44802 4.95185 7.45874C4.41059 7.09649 4.05484 6.48018 4.05484 5.78038C4.05484 5.41098 4.15425 5.06433 4.32774 4.76673C5.32222 5.98636 6.80793 6.78915 8.48369 6.87297C8.44925 6.7258 8.43138 6.57148 8.43138 6.41358C8.43138 5.30052 9.33392 4.39766 10.4476 4.39766C11.0275 4.39766 11.5513 4.64263 11.919 5.03411C12.3784 4.94412 12.8099 4.77583 13.1994 4.54484C13.0483 5.01592 12.729 5.41098 12.3125 5.66017C12.7209 5.61144 13.1094 5.50292 13.4707 5.34276C13.201 5.74789 12.8589 6.10299 12.4648 6.38727Z"
              fill="url(#paint0_linear_130_401)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_130_401"
                x1="8.27011"
                y1="-0.428572"
                x2="16.5896"
                y2="29.9124"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Discord  */}
        <div className="discord__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
          >
            <path
              d="M18.1314 1.35131C18.1256 1.34 18.116 1.33114 18.1043 1.32631C16.751 0.701617 15.3229 0.256162 13.8557 0.00109263C13.8424 -0.00140062 13.8286 0.000398044 13.8164 0.00623282C13.8041 0.0120676 13.794 0.0216414 13.7875 0.0335927C13.593 0.388697 13.4165 0.753448 13.2585 1.12645C11.677 0.88491 10.0683 0.88491 8.48669 1.12645C8.32773 0.7525 8.14837 0.387659 7.94943 0.0335927C7.94261 0.0219011 7.93245 0.0125478 7.92026 0.00675094C7.90808 0.000954065 7.89445 -0.00101767 7.88113 0.00109263C6.41378 0.255627 4.98558 0.701115 3.63246 1.32635C3.62087 1.33129 3.6111 1.33972 3.60449 1.35049C0.898514 5.41614 0.157246 9.38183 0.520886 13.2984C0.521909 13.308 0.524841 13.3173 0.529506 13.3257C0.534171 13.3342 0.540475 13.3416 0.548042 13.3475C2.1237 14.5213 3.8861 15.4172 5.76003 15.9971C5.77322 16.0011 5.78732 16.0009 5.80041 15.9966C5.8135 15.9923 5.82496 15.9841 5.83326 15.973C6.23574 15.422 6.59236 14.8386 6.89951 14.2286C6.90373 14.2203 6.90614 14.2111 6.90658 14.2017C6.90702 14.1923 6.90548 14.183 6.90206 14.1742C6.89865 14.1655 6.89343 14.1576 6.88675 14.151C6.88008 14.1445 6.8721 14.1394 6.86334 14.1362C6.30097 13.9197 5.75652 13.6587 5.23512 13.3557C5.22565 13.3501 5.21769 13.3423 5.21196 13.3328C5.20622 13.3234 5.20288 13.3127 5.20223 13.3017C5.20158 13.2906 5.20365 13.2796 5.20824 13.2696C5.21283 13.2595 5.2198 13.2508 5.22855 13.2441C5.33796 13.1616 5.44743 13.0758 5.5519 12.9892C5.56118 12.9815 5.57242 12.9766 5.58433 12.975C5.59625 12.9733 5.60838 12.9751 5.61935 12.9801C9.03528 14.5485 12.7335 14.5485 16.109 12.9801C16.12 12.9748 16.1322 12.9728 16.1443 12.9743C16.1564 12.9757 16.1679 12.9806 16.1773 12.9884C16.2818 13.075 16.3912 13.1616 16.5015 13.2441C16.5103 13.2507 16.5173 13.2594 16.522 13.2694C16.5266 13.2794 16.5288 13.2904 16.5282 13.3015C16.5276 13.3125 16.5244 13.3232 16.5187 13.3327C16.513 13.3422 16.5051 13.3501 16.4957 13.3557C15.9755 13.6613 15.4305 13.9221 14.8667 14.1354C14.8579 14.1387 14.85 14.1439 14.8434 14.1506C14.8367 14.1572 14.8316 14.1652 14.8282 14.174C14.8249 14.1828 14.8234 14.1922 14.8239 14.2016C14.8244 14.2111 14.8269 14.2203 14.8312 14.2286C15.1435 14.8352 15.4996 15.4179 15.8966 15.972C15.9047 15.9834 15.9161 15.9919 15.9292 15.9964C15.9424 16.0009 15.9566 16.0011 15.9699 15.997C17.8472 15.4191 19.6126 14.5231 21.1903 13.3475C21.198 13.3419 21.2043 13.3347 21.209 13.3263C21.2137 13.318 21.2166 13.3088 21.2174 13.2992C21.6528 8.77126 20.4886 4.83807 18.1314 1.35131ZM7.40965 10.9136C6.38121 10.9136 5.5338 9.96409 5.5338 8.79794C5.5338 7.63179 6.36477 6.68218 7.40965 6.68218C8.4627 6.68218 9.30191 7.64004 9.28547 8.79787C9.28547 9.96408 8.45446 10.9136 7.40965 10.9136ZM14.3452 10.9136C13.3168 10.9136 12.4694 9.96409 12.4694 8.79794C12.4694 7.63179 13.3004 6.68218 14.3452 6.68218C15.3984 6.68218 16.2375 7.64004 16.2211 8.79787C16.2211 9.96408 15.3984 10.9136 14.3452 10.9136Z"
              fill="url(#paint0_linear_173_658)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_658"
                x1="10.6564"
                y1="-0.428572"
                x2="17.2231"
                y2="30.8134"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Telegram */}
        <div className="telegram__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M19.4402 1.45659L16.5447 15.0342C16.3262 15.9924 15.7565 16.2309 14.947 15.7795L10.5352 12.5469L8.4064 14.5827C8.17082 14.817 7.97378 15.0129 7.51975 15.0129L7.83672 10.5452L16.0135 3.19851C16.3691 2.88334 15.9364 2.70873 15.461 3.02389L5.3524 9.35271L1.00057 7.99836C0.0539588 7.70449 0.0368255 7.05713 1.1976 6.60568L18.2194 0.0852048C19.0076 -0.208664 19.6972 0.259822 19.4402 1.45659Z"
              fill="url(#paint0_linear_173_659)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_659"
                x1="9.70381"
                y1="-0.428572"
                x2="16.7923"
                y2="30.5728"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Tiktok */}
        <div className="tiktok__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
          >
            <path
              d="M14.4662 6.56135C13.0928 6.56464 11.7531 6.13547 10.6363 5.33448V10.9209C10.636 11.9556 10.3204 12.9654 9.73172 13.8155C9.14307 14.6656 8.30946 15.3154 7.34234 15.6779C6.37521 16.0404 5.32068 16.0985 4.31975 15.8443C3.31882 15.59 2.4192 15.0357 1.74117 14.2553C1.06315 13.475 0.63904 12.5058 0.525561 11.4774C0.412082 10.449 0.61464 9.41041 1.10615 8.50048C1.59766 7.59055 2.35469 6.85266 3.27602 6.38548C4.19736 5.91831 5.23907 5.74411 6.26187 5.88618V8.69595C5.79383 8.54844 5.29125 8.55288 4.82588 8.70865C4.36052 8.86442 3.95617 9.16355 3.67059 9.56332C3.38501 9.96309 3.23279 10.4431 3.23568 10.9347C3.23857 11.4263 3.39642 11.9044 3.68668 12.3008C3.97694 12.6972 4.38478 12.9915 4.85194 13.1418C5.31911 13.2921 5.82171 13.2906 6.28798 13.1375C6.75425 12.9845 7.16034 12.6878 7.44826 12.2897C7.73618 11.8916 7.8912 11.4125 7.89119 10.9209V0H10.6363C10.6344 0.23229 10.6539 0.464263 10.6944 0.692988C10.7898 1.20358 10.9881 1.68931 11.2773 2.12045C11.5664 2.5516 11.9403 2.91911 12.3761 3.2005C12.9961 3.61126 13.7229 3.83019 14.4662 3.83003V6.56135Z"
              fill="url(#paint0_linear_173_653)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_653"
                x1="7.33684"
                y1="-0.428572"
                x2="16.6613"
                y2="29.2656"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* YOUTUBE */}
        <div className="youtube__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
          >
            <path
              d="M22.8458 2.49844C22.5829 1.51496 21.8085 0.740536 20.825 0.477678C19.0423 -1.27724e-07 11.8947 0 11.8947 0C11.8947 0 4.74709 -1.27724e-07 2.96441 0.477678C1.98111 0.740536 1.20651 1.51496 0.943701 2.49844C0.466156 4.28094 0.466156 8.00013 0.466156 8.00013C0.466156 8.00013 0.466156 11.7192 0.943701 13.5016C1.20651 14.485 1.98111 15.2597 2.96441 15.5225C4.74709 16 11.8947 16 11.8947 16C11.8947 16 19.0423 16 20.825 15.5225C21.8085 15.2597 22.5829 14.485 22.8458 13.5016C23.3233 11.7192 23.3233 8.00013 23.3233 8.00013C23.3233 8.00013 23.3233 4.28094 22.8458 2.49844ZM9.60888 11.4287V4.57147L15.5472 8.00013L9.60888 11.4287Z"
              fill="url(#paint0_linear_173_649)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_649"
                x1="11.6597"
                y1="-0.428572"
                x2="17.6987"
                y2="31.0345"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Whatsapp */}
        <div className="whatsapp__icon social__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9329 9.5881C11.7348 9.48895 10.7608 9.00976 10.5792 8.94357C10.3977 8.87745 10.2656 8.84446 10.1335 9.04272C10.0015 9.24102 9.62181 9.68728 9.50624 9.81949C9.39071 9.9517 9.27514 9.9683 9.07706 9.86906C8.87895 9.76995 8.24061 9.56076 7.48393 8.88579C6.89504 8.3605 6.49742 7.71178 6.38189 7.51345C6.26632 7.31512 6.36954 7.20792 6.46872 7.10914C6.55788 7.02038 6.66686 6.87775 6.76588 6.76206C6.86497 6.64643 6.89797 6.56373 6.96399 6.43159C7.03002 6.29935 6.99702 6.18368 6.94745 6.08454C6.89797 5.98539 6.50178 5.01026 6.3367 4.61354C6.17588 4.22731 6.01257 4.27962 5.89096 4.27349C5.77555 4.26777 5.64331 4.26655 5.51129 4.26655C5.37924 4.26655 5.16458 4.31613 4.98299 4.51439C4.80142 4.71272 4.28966 5.19204 4.28966 6.16708C4.28966 7.14223 4.9995 8.08417 5.09855 8.21641C5.19761 8.34865 6.49546 10.3496 8.48279 11.2077C8.95539 11.4118 9.32443 11.5337 9.61211 11.625C10.0867 11.7758 10.5185 11.7545 10.8599 11.7035C11.2405 11.6467 12.0319 11.2243 12.1971 10.7616C12.3621 10.2987 12.3621 9.90212 12.3126 9.81949C12.2631 9.73686 12.131 9.68728 11.9329 9.5881ZM8.3183 14.5235H8.31562C7.13312 14.5231 5.97335 14.2054 4.96159 13.605L4.72093 13.4622L2.22686 14.1164L2.89256 11.6847L2.73591 11.4353C2.07624 10.3862 1.72782 9.17353 1.72835 7.92836C1.72981 4.29504 4.68601 1.33909 8.32091 1.33909C10.081 1.33969 11.7356 2.02604 12.9798 3.27165C14.224 4.51723 14.9087 6.17289 14.9081 7.93368C14.9066 11.5673 11.9504 14.5235 8.3183 14.5235ZM13.9267 2.32517C12.4298 0.826558 10.4392 0.000870814 8.3182 0C3.94815 0 0.391461 3.55647 0.389688 7.92786C0.389128 9.32527 0.754186 10.6892 1.44804 11.8916L0.323257 16L4.52621 14.8975C5.68427 15.5291 6.9881 15.8621 8.31506 15.8625H8.31833C12.6879 15.8625 16.2449 12.3057 16.2467 7.93421C16.2475 5.81573 15.4236 3.82378 13.9267 2.32517Z"
              fill="url(#paint0_linear_173_655)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_173_655"
                x1="8.12125"
                y1="-0.428572"
                x2="16.4751"
                y2="29.892"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.279473" stop-color="#0076FC" />
                <stop offset="1" stop-color="#102595" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;