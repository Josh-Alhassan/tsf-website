import React from "react";

import linearLine from "../utilities/Line-4.svg";

import "./ModelPricing.css";
import DirectFundedAccount from "../components/DirectFundedAccount";
import CurrencyBtn from "../components/CurrencyBtn";
import CurrentBtnAlt from "../components/CurrentBtnAlt";

function ModelPricing() {
  const USAFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
    >
      <path
        d="M20.9999 14H0.368437C0.164979 14 0 13.835 0 13.6316V0.368437C0 0.164979 0.164979 0 0.368437 0H21C21.2034 0 21.3684 0.164979 21.3684 0.368437V13.6316C21.3684 13.8351 21.2034 14 20.9999 14Z"
        fill="#F5F5F5"
      />
      <path
        d="M21.3684 0.368437C21.3684 0.759758 21.0512 1.07697 20.6598 1.07697H0.708536C0.317222 1.07697 0 0.759751 0 0.368437C0 0.164979 0.164979 0 0.368437 0H21C21.2034 0 21.3684 0.164979 21.3684 0.368437Z"
        fill="#FF4B55"
      />
      <path
        d="M21.3684 4.84608C21.3684 4.5487 21.1273 4.30762 20.8299 4.30762H0.538467C0.24108 4.30762 0 4.5487 0 4.84608C0 5.14347 0.241081 5.38455 0.538468 5.38455H20.8299C21.1273 5.38455 21.3684 5.14347 21.3684 4.84608Z"
        fill="#FF4B55"
      />
      <path
        d="M21.3684 2.69227C21.3684 2.39489 21.1273 2.15381 20.8299 2.15381H0.538466C0.24108 2.15381 0 2.39489 0 2.69227C0 2.98966 0.24108 3.23074 0.538467 3.23074H20.8299C21.1273 3.23074 21.3684 2.98966 21.3684 2.69227Z"
        fill="#FF4B55"
      />
      <path
        d="M21.3684 6.99991C21.3684 7.29731 21.1273 7.5384 20.8299 7.5384H0.368437C0.164979 7.5384 0 7.37342 0 7.16996C0 6.77865 0.317223 6.46143 0.708537 6.46143H20.8299C21.1273 6.46143 21.3684 6.70251 21.3684 6.99991Z"
        fill="#FF4B55"
      />
      <path
        d="M21.3684 11.308C21.3684 11.0106 21.1273 10.7695 20.8299 10.7695H0.538466C0.24108 10.7695 0 11.0106 0 11.308C0 11.6054 0.24108 11.8465 0.538467 11.8465H20.8299C21.1273 11.8465 21.3684 11.6054 21.3684 11.308Z"
        fill="#FF4B55"
      />
      <path
        d="M20.9999 14H0.368437C0.164979 14 0 13.8351 0 13.6316C0 13.2403 0.317205 12.9231 0.708496 12.9231H20.6598C21.0511 12.9231 21.3684 13.2403 21.3684 13.6316C21.3684 13.8351 21.2034 14 20.9999 14Z"
        fill="#FF4B55"
      />
      <path
        d="M21.3684 9.15395C21.3684 8.85656 21.1273 8.61548 20.8299 8.61548H0.538467C0.24108 8.61548 0 8.85656 0 9.15395C0 9.45133 0.241081 9.69241 0.538468 9.69241H20.8299C21.1273 9.69241 21.3684 9.45133 21.3684 9.15395Z"
        fill="#FF4B55"
      />
      <path
        d="M9.57892 0.000244141H0.368437C0.164979 0.000244141 0 0.165181 0 0.36864V7.17021C0 7.37367 0.164979 7.53865 0.368437 7.53865H9.57896C9.78242 7.53865 9.94739 7.37367 9.94739 7.17021V0.36864C9.94735 0.165181 9.78237 0.000244141 9.57892 0.000244141Z"
        fill="#41479B"
      />
      <path
        d="M1.0348 0.845774C1.08357 0.99205 1.21996 1.09113 1.37415 1.0923C1.40753 1.0926 1.42135 1.13516 1.39451 1.15499C1.27048 1.2466 1.2184 1.40693 1.26493 1.55393C1.27503 1.58574 1.23876 1.61211 1.21159 1.59266C1.08615 1.50302 0.917578 1.50305 0.79215 1.59271C0.764981 1.61211 0.728797 1.58578 0.738813 1.55398C0.785343 1.40697 0.733257 1.24664 0.609225 1.15503C0.58239 1.13516 0.596204 1.09264 0.629592 1.09234C0.783782 1.09117 0.920165 0.992092 0.96894 0.845816C0.979458 0.814097 1.0242 0.814097 1.0348 0.845774Z"
        fill="#F5F5F5"
      />
      <path
        d="M1.03495 2.12528C1.08373 2.27156 1.22011 2.37064 1.3743 2.37181C1.40769 2.37211 1.4215 2.41468 1.39467 2.4345C1.27063 2.52611 1.21855 2.68644 1.26508 2.83345C1.27518 2.86525 1.23891 2.89162 1.21174 2.87218C1.0863 2.78253 0.917731 2.78256 0.792303 2.87222C0.765133 2.89162 0.728949 2.86529 0.738966 2.83349C0.785496 2.68648 0.733409 2.52615 0.609378 2.43454C0.582542 2.41468 0.596357 2.37215 0.629745 2.37186C0.783934 2.37068 0.920317 2.2716 0.969093 2.12533C0.97961 2.09365 1.02435 2.09365 1.03495 2.12528Z"
        fill="#F5F5F5"
      />
      <path
        d="M1.03495 3.40458C1.08373 3.55086 1.22011 3.64994 1.3743 3.65111C1.40769 3.6514 1.4215 3.69397 1.39467 3.7138C1.27064 3.8054 1.21855 3.96574 1.26508 4.11274C1.27518 4.14454 1.23891 4.17092 1.21174 4.15147C1.0863 4.06183 0.917731 4.06185 0.792303 4.15151C0.765133 4.17092 0.728949 4.14459 0.738966 4.11278C0.785496 3.96578 0.733409 3.80544 0.609378 3.71384C0.582542 3.69397 0.596357 3.65144 0.629745 3.65115C0.783934 3.64998 0.920317 3.5509 0.969093 3.40462C0.97961 3.37295 1.02435 3.37295 1.03495 3.40458Z"
        fill="#F5F5F5"
      />
      <path
        d="M1.03495 4.68391C1.08373 4.83019 1.22011 4.92926 1.3743 4.93044C1.40769 4.93073 1.4215 4.9733 1.39467 4.99312C1.27063 5.08473 1.21855 5.24507 1.26508 5.39207C1.27518 5.42387 1.23891 5.45025 1.21174 5.4308C1.0863 5.34116 0.917731 5.34118 0.792303 5.43084C0.765133 5.45025 0.728949 5.42391 0.738966 5.39211C0.785496 5.24511 0.733409 5.08477 0.609378 4.99317C0.582542 4.9733 0.596357 4.93077 0.629745 4.93048C0.783934 4.92931 0.920318 4.83023 0.969093 4.68395C0.97961 4.65223 1.02435 4.65223 1.03495 4.68391Z"
        fill="#F5F5F5"
      />
      <path
        d="M1.03495 5.96324C1.08373 6.10951 1.22011 6.20859 1.3743 6.20977C1.40769 6.21006 1.4215 6.25263 1.39467 6.27245C1.27063 6.36406 1.21855 6.52439 1.26508 6.6714C1.27518 6.7032 1.23891 6.72958 1.21174 6.71013C1.0863 6.62049 0.917731 6.62051 0.792303 6.71017C0.765133 6.72958 0.728949 6.70324 0.738966 6.67144C0.785496 6.52443 0.733409 6.3641 0.609378 6.27249C0.582542 6.25263 0.596357 6.2101 0.629745 6.20981C0.783934 6.20863 0.920317 6.10956 0.969093 5.96328C0.97961 5.93152 1.02435 5.93152 1.03495 5.96324Z"
        fill="#F5F5F5"
      />
      <path
        d="M2.02714 1.47319C2.07591 1.61947 2.2123 1.71855 2.36649 1.71972C2.39987 1.72001 2.41369 1.76258 2.38685 1.7824C2.26282 1.87401 2.21074 2.03435 2.25727 2.18135C2.26737 2.21315 2.2311 2.23953 2.20393 2.22008C2.07849 2.13042 1.90993 2.13042 1.78449 2.22008C1.75732 2.23949 1.72114 2.21315 1.73115 2.18135C1.77768 2.03435 1.7256 1.87401 1.60157 1.7824C1.57473 1.76254 1.58854 1.72001 1.62193 1.71972C1.77612 1.71855 1.9125 1.61947 1.96128 1.47319C1.97176 1.44155 2.01658 1.44155 2.02714 1.47319Z"
        fill="#F5F5F5"
      />
      <path
        d="M2.02714 2.75252C2.07591 2.89879 2.2123 2.99787 2.36649 2.99905C2.39987 2.99934 2.41369 3.04191 2.38685 3.06173C2.26282 3.15334 2.21074 3.31367 2.25727 3.46068C2.26737 3.49248 2.2311 3.51886 2.20393 3.49941C2.07849 3.40974 1.90993 3.40974 1.78449 3.49941C1.75732 3.51881 1.72114 3.49252 1.73115 3.46068C1.77768 3.31367 1.7256 3.15334 1.60157 3.06173C1.57473 3.04187 1.58854 2.99934 1.62193 2.99905C1.77612 2.99787 1.9125 2.89879 1.96128 2.75252C1.97176 2.72084 2.01658 2.72084 2.02714 2.75252Z"
        fill="#F5F5F5"
      />
      <path
        d="M2.02714 4.03181C2.07591 4.17809 2.2123 4.27717 2.36649 4.27834C2.39987 4.27864 2.41369 4.32121 2.38685 4.34103C2.26282 4.43264 2.21074 4.59297 2.25727 4.73998C2.26737 4.77178 2.2311 4.79815 2.20393 4.77871C2.07849 4.68904 1.90993 4.68904 1.78449 4.77871C1.75732 4.79811 1.72114 4.77178 1.73115 4.73998C1.77768 4.59297 1.7256 4.43264 1.60157 4.34103C1.57473 4.32116 1.58854 4.27864 1.62193 4.27834C1.77612 4.27717 1.9125 4.17809 1.96128 4.03181C1.97176 4.00014 2.01658 4.00014 2.02714 4.03181Z"
        fill="#F5F5F5"
      />
      <path
        d="M2.02714 5.31108C2.07591 5.45736 2.2123 5.55644 2.36649 5.55761C2.39987 5.5579 2.41369 5.60047 2.38685 5.6203C2.26282 5.7119 2.21074 5.87224 2.25727 6.01924C2.26737 6.05104 2.2311 6.07742 2.20393 6.05797C2.07849 5.96831 1.90993 5.96831 1.78449 6.05797C1.75732 6.07738 1.72114 6.05104 1.73115 6.01924C1.77768 5.87224 1.7256 5.7119 1.60157 5.6203C1.57473 5.60043 1.58854 5.5579 1.62193 5.55761C1.77612 5.55644 1.9125 5.45736 1.96128 5.31108C1.97176 5.27944 2.01658 5.27944 2.02714 5.31108Z"
        fill="#F5F5F5"
      />
      <path
        d="M3.02076 0.845779C3.06954 0.992055 3.20592 1.09113 3.36011 1.09231C3.3935 1.0926 3.40731 1.13517 3.38048 1.15499C3.25644 1.2466 3.20436 1.40693 3.25089 1.55394C3.26099 1.58574 3.22472 1.61212 3.19755 1.59267C3.07211 1.503 2.90355 1.503 2.77811 1.59267C2.75094 1.61208 2.71476 1.58574 2.72477 1.55394C2.77131 1.40693 2.71922 1.2466 2.59519 1.15499C2.56835 1.13513 2.58217 1.0926 2.61555 1.09231C2.76974 1.09113 2.90613 0.992056 2.9549 0.845779C2.96542 0.814102 3.0102 0.814102 3.02076 0.845779Z"
        fill="#F5F5F5"
      />
      <path
        d="M3.02076 2.12529C3.06954 2.27157 3.20592 2.37064 3.36011 2.37182C3.3935 2.37211 3.40731 2.41468 3.38048 2.4345C3.25644 2.52611 3.20436 2.68644 3.25089 2.83345C3.26099 2.86525 3.22472 2.89163 3.19755 2.87218C3.07211 2.78251 2.90355 2.78251 2.77811 2.87218C2.75094 2.89159 2.71476 2.86525 2.72477 2.83345C2.77131 2.68644 2.71922 2.52611 2.59519 2.4345C2.56835 2.41464 2.58217 2.37211 2.61555 2.37182C2.76974 2.37064 2.90613 2.27157 2.9549 2.12529C2.96542 2.09365 3.0102 2.09365 3.02076 2.12529Z"
        fill="#F5F5F5"
      />
      <path
        d="M3.02076 3.40459C3.06954 3.55086 3.20592 3.64994 3.36011 3.65112C3.3935 3.65141 3.40731 3.69398 3.38048 3.7138C3.25644 3.80541 3.20436 3.96574 3.25089 4.11275C3.26099 4.14455 3.22472 4.17093 3.19755 4.15148C3.07211 4.06181 2.90355 4.06181 2.77811 4.15148C2.75094 4.17089 2.71476 4.14455 2.72477 4.11275C2.77131 3.96574 2.71922 3.80541 2.59519 3.7138C2.56835 3.69394 2.58217 3.65141 2.61555 3.65112C2.76974 3.64994 2.90613 3.55086 2.9549 3.40459C2.96542 3.37295 3.0102 3.37295 3.02076 3.40459Z"
        fill="#F5F5F5"
      />
      <path
        d="M3.02076 4.68391C3.06954 4.83019 3.20592 4.92927 3.36011 4.93044C3.3935 4.93074 3.40731 4.9733 3.38048 4.99313C3.25644 5.08474 3.20436 5.24507 3.25089 5.39207C3.26099 5.42388 3.22472 5.45025 3.19755 5.4308C3.07211 5.34114 2.90355 5.34114 2.77811 5.4308C2.75094 5.45021 2.71476 5.42388 2.72477 5.39207C2.77131 5.24507 2.71922 5.08474 2.59519 4.99313C2.56835 4.97326 2.58217 4.93074 2.61555 4.93044C2.76974 4.92927 2.90613 4.83019 2.9549 4.68391C2.96542 4.65224 3.0102 4.65224 3.02076 4.68391Z"
        fill="#F5F5F5"
      />
      <path
        d="M3.02076 5.96324C3.06954 6.10952 3.20592 6.2086 3.36011 6.20977C3.3935 6.21006 3.40731 6.25263 3.38048 6.27246C3.25644 6.36406 3.20436 6.5244 3.25089 6.6714C3.26099 6.7032 3.22472 6.72958 3.19755 6.71013C3.07211 6.62047 2.90355 6.62047 2.77811 6.71013C2.75094 6.72954 2.71476 6.7032 2.72477 6.6714C2.77131 6.5244 2.71922 6.36406 2.59519 6.27246C2.56835 6.25259 2.58217 6.21006 2.61555 6.20977C2.76974 6.2086 2.90613 6.10952 2.9549 5.96324C2.96542 5.93152 3.0102 5.93152 3.02076 5.96324Z"
        fill="#F5F5F5"
      />
      <path
        d="M4.01344 1.47319C4.06221 1.61947 4.19859 1.71855 4.35278 1.71972C4.38617 1.72001 4.39999 1.76258 4.37315 1.7824C4.24912 1.87401 4.19703 2.03435 4.24356 2.18135C4.25366 2.21315 4.2174 2.23953 4.19023 2.22008C4.06479 2.13042 3.89622 2.13042 3.77079 2.22008C3.74362 2.23949 3.70743 2.21315 3.71745 2.18135C3.76398 2.03435 3.71189 1.87401 3.58786 1.7824C3.56103 1.76254 3.57484 1.72001 3.60823 1.71972C3.76242 1.71855 3.8988 1.61947 3.94758 1.47319C3.95805 1.44155 4.00288 1.44155 4.01344 1.47319Z"
        fill="#F5F5F5"
      />
      <path
        d="M4.01344 2.75252C4.06221 2.89879 4.19859 2.99787 4.35278 2.99905C4.38617 2.99934 4.39999 3.04191 4.37315 3.06173C4.24912 3.15334 4.19703 3.31367 4.24356 3.46068C4.25366 3.49248 4.2174 3.51886 4.19023 3.49941C4.06479 3.40974 3.89622 3.40974 3.77079 3.49941C3.74362 3.51881 3.70743 3.49252 3.71745 3.46068C3.76398 3.31367 3.71189 3.15334 3.58786 3.06173C3.56103 3.04187 3.57484 2.99934 3.60823 2.99905C3.76242 2.99787 3.8988 2.89879 3.94758 2.75252C3.95805 2.72084 4.00288 2.72084 4.01344 2.75252Z"
        fill="#F5F5F5"
      />
      <path
        d="M4.01344 4.03181C4.06221 4.17809 4.19859 4.27717 4.35278 4.27834C4.38617 4.27864 4.39999 4.32121 4.37315 4.34103C4.24912 4.43264 4.19703 4.59297 4.24356 4.73998C4.25366 4.77178 4.2174 4.79815 4.19023 4.77871C4.06479 4.68904 3.89622 4.68904 3.77079 4.77871C3.74362 4.79811 3.70743 4.77178 3.71745 4.73998C3.76398 4.59297 3.71189 4.43264 3.58786 4.34103C3.56103 4.32116 3.57484 4.27864 3.60823 4.27834C3.76242 4.27717 3.8988 4.17809 3.94758 4.03181C3.95805 4.00014 4.00288 4.00014 4.01344 4.03181Z"
        fill="#F5F5F5"
      />
      <path
        d="M4.01344 5.31108C4.06221 5.45736 4.19859 5.55644 4.35278 5.55761C4.38617 5.5579 4.39999 5.60047 4.37315 5.6203C4.24912 5.7119 4.19703 5.87224 4.24356 6.01924C4.25366 6.05104 4.2174 6.07742 4.19023 6.05797C4.06479 5.96831 3.89622 5.96831 3.77079 6.05797C3.74362 6.07738 3.70743 6.05104 3.71745 6.01924C3.76398 5.87224 3.71189 5.7119 3.58786 5.6203C3.56103 5.60043 3.57484 5.5579 3.60823 5.55761C3.76242 5.55644 3.8988 5.45736 3.94758 5.31108C3.95805 5.27944 4.00288 5.27944 4.01344 5.31108Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.00664 0.845779C5.05542 0.992055 5.1918 1.09113 5.34599 1.09231C5.37938 1.0926 5.39319 1.13517 5.36636 1.15499C5.24232 1.2466 5.19024 1.40693 5.23677 1.55394C5.24687 1.58574 5.2106 1.61212 5.18343 1.59267C5.05798 1.50301 4.88939 1.503 4.76395 1.59267C4.73678 1.61208 4.7006 1.58574 4.71061 1.55394C4.75714 1.40693 4.70506 1.2466 4.58103 1.15499C4.55419 1.13513 4.56801 1.0926 4.60139 1.09231C4.75558 1.09113 4.89197 0.992055 4.94074 0.845779C4.9513 0.814102 4.99608 0.814102 5.00664 0.845779Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.00664 2.12529C5.05542 2.27157 5.1918 2.37064 5.34599 2.37182C5.37938 2.37211 5.39319 2.41468 5.36636 2.4345C5.24232 2.52611 5.19024 2.68644 5.23677 2.83345C5.24687 2.86525 5.2106 2.89163 5.18343 2.87218C5.05798 2.78252 4.88939 2.78251 4.76395 2.87218C4.73678 2.89159 4.7006 2.86525 4.71061 2.83345C4.75714 2.68644 4.70506 2.52611 4.58103 2.4345C4.55419 2.41464 4.56801 2.37211 4.60139 2.37182C4.75558 2.37064 4.89197 2.27157 4.94074 2.12529C4.9513 2.09365 4.99608 2.09365 5.00664 2.12529Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.00664 3.40459C5.05542 3.55086 5.1918 3.64994 5.34599 3.65112C5.37938 3.65141 5.39319 3.69398 5.36636 3.7138C5.24232 3.80541 5.19024 3.96574 5.23677 4.11275C5.24687 4.14455 5.2106 4.17093 5.18343 4.15148C5.05798 4.06182 4.88939 4.06181 4.76395 4.15148C4.73678 4.17089 4.7006 4.14455 4.71061 4.11275C4.75714 3.96574 4.70506 3.80541 4.58103 3.7138C4.55419 3.69394 4.56801 3.65141 4.60139 3.65112C4.75558 3.64994 4.89197 3.55086 4.94074 3.40459C4.9513 3.37295 4.99608 3.37295 5.00664 3.40459Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.00664 4.68391C5.05542 4.83019 5.1918 4.92927 5.34599 4.93044C5.37938 4.93074 5.39319 4.9733 5.36636 4.99313C5.24233 5.08474 5.19024 5.24507 5.23677 5.39207C5.24687 5.42388 5.2106 5.45025 5.18343 5.4308C5.05798 5.34115 4.88939 5.34114 4.76395 5.4308C4.73678 5.45021 4.7006 5.42388 4.71061 5.39207C4.75714 5.24507 4.70506 5.08474 4.58103 4.99313C4.55419 4.97326 4.56801 4.93074 4.60139 4.93044C4.75558 4.92927 4.89197 4.83019 4.94074 4.68391C4.9513 4.65224 4.99608 4.65224 5.00664 4.68391Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.00664 5.96324C5.05542 6.10952 5.1918 6.2086 5.34599 6.20977C5.37938 6.21006 5.39319 6.25263 5.36636 6.27246C5.24232 6.36406 5.19024 6.5244 5.23677 6.6714C5.24687 6.7032 5.2106 6.72958 5.18343 6.71013C5.05798 6.62048 4.88939 6.62047 4.76395 6.71013C4.73678 6.72954 4.7006 6.7032 4.71061 6.6714C4.75714 6.5244 4.70506 6.36406 4.58103 6.27246C4.55419 6.25259 4.56801 6.21006 4.60139 6.20977C4.75558 6.2086 4.89197 6.10952 4.94074 5.96324C4.9513 5.93152 4.99608 5.93152 5.00664 5.96324Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.99973 1.47319C6.04851 1.61947 6.18489 1.71855 6.33908 1.71972C6.37247 1.72001 6.38628 1.76258 6.35945 1.7824C6.23542 1.87401 6.18333 2.03435 6.22986 2.18135C6.23996 2.21315 6.20369 2.23953 6.17652 2.22008C6.05109 2.13042 5.88252 2.13042 5.75709 2.22008C5.72992 2.23949 5.69373 2.21315 5.70375 2.18135C5.75028 2.03435 5.69819 1.87401 5.57416 1.7824C5.54732 1.76254 5.56114 1.72001 5.59453 1.71972C5.74872 1.71855 5.8851 1.61947 5.93388 1.47319C5.94443 1.44155 5.98917 1.44155 5.99973 1.47319Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.99973 2.75252C6.04851 2.89879 6.18489 2.99787 6.33908 2.99905C6.37247 2.99934 6.38628 3.04191 6.35945 3.06173C6.23542 3.15334 6.18333 3.31367 6.22986 3.46068C6.23996 3.49248 6.20369 3.51886 6.17652 3.49941C6.05109 3.40974 5.88252 3.40974 5.75709 3.49941C5.72992 3.51881 5.69373 3.49252 5.70375 3.46068C5.75028 3.31367 5.69819 3.15334 5.57416 3.06173C5.54732 3.04187 5.56114 2.99934 5.59453 2.99905C5.74872 2.99787 5.8851 2.89879 5.93388 2.75252C5.94443 2.72084 5.98917 2.72084 5.99973 2.75252Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.99973 4.03181C6.04851 4.17809 6.18489 4.27717 6.33908 4.27834C6.37247 4.27864 6.38628 4.32121 6.35945 4.34103C6.23542 4.43264 6.18333 4.59297 6.22986 4.73998C6.23996 4.77178 6.20369 4.79815 6.17652 4.77871C6.05109 4.68904 5.88252 4.68904 5.75709 4.77871C5.72992 4.79811 5.69373 4.77178 5.70375 4.73998C5.75028 4.59297 5.69819 4.43264 5.57416 4.34103C5.54732 4.32116 5.56114 4.27864 5.59453 4.27834C5.74872 4.27717 5.8851 4.17809 5.93388 4.03181C5.94443 4.00014 5.98917 4.00014 5.99973 4.03181Z"
        fill="#F5F5F5"
      />
      <path
        d="M5.99973 5.31108C6.04851 5.45736 6.18489 5.55644 6.33908 5.55761C6.37247 5.5579 6.38628 5.60047 6.35945 5.6203C6.23542 5.7119 6.18333 5.87224 6.22986 6.01924C6.23996 6.05104 6.20369 6.07742 6.17652 6.05797C6.05109 5.96831 5.88252 5.96831 5.75709 6.05797C5.72992 6.07738 5.69373 6.05104 5.70375 6.01924C5.75028 5.87224 5.69819 5.7119 5.57416 5.6203C5.54732 5.60043 5.56114 5.5579 5.59453 5.55761C5.74872 5.55644 5.8851 5.45736 5.93388 5.31108C5.94443 5.27944 5.98917 5.27944 5.99973 5.31108Z"
        fill="#F5F5F5"
      />
      <path
        d="M6.99241 0.845779C7.04119 0.992055 7.17757 1.09113 7.33176 1.09231C7.36515 1.0926 7.37896 1.13517 7.35213 1.15499C7.22809 1.2466 7.17601 1.40693 7.22254 1.55394C7.23264 1.58574 7.19637 1.61212 7.1692 1.59267C7.04376 1.503 6.8752 1.503 6.74976 1.59267C6.72259 1.61208 6.68641 1.58574 6.69642 1.55394C6.74295 1.40693 6.69087 1.2466 6.56684 1.15499C6.54 1.13513 6.55381 1.0926 6.5872 1.09231C6.74139 1.09113 6.87778 0.992056 6.92655 0.845779C6.93703 0.814102 6.98185 0.814102 6.99241 0.845779Z"
        fill="#F5F5F5"
      />
      <path
        d="M6.99241 2.12529C7.04119 2.27157 7.17757 2.37064 7.33176 2.37182C7.36515 2.37211 7.37896 2.41468 7.35213 2.4345C7.22809 2.52611 7.17601 2.68644 7.22254 2.83345C7.23264 2.86525 7.19637 2.89163 7.1692 2.87218C7.04376 2.78251 6.8752 2.78251 6.74976 2.87218C6.72259 2.89159 6.68641 2.86525 6.69642 2.83345C6.74295 2.68644 6.69087 2.52611 6.56684 2.4345C6.54 2.41464 6.55381 2.37211 6.5872 2.37182C6.74139 2.37064 6.87778 2.27157 6.92655 2.12529C6.93703 2.09365 6.98185 2.09365 6.99241 2.12529Z"
        fill="#F5F5F5"
      />
      <path
        d="M6.99241 3.40459C7.04119 3.55086 7.17757 3.64994 7.33176 3.65112C7.36515 3.65141 7.37896 3.69398 7.35213 3.7138C7.22809 3.80541 7.17601 3.96574 7.22254 4.11275C7.23264 4.14455 7.19637 4.17093 7.1692 4.15148C7.04376 4.06181 6.8752 4.06181 6.74976 4.15148C6.72259 4.17089 6.68641 4.14455 6.69642 4.11275C6.74295 3.96574 6.69087 3.80541 6.56684 3.7138C6.54 3.69394 6.55381 3.65141 6.5872 3.65112C6.74139 3.64994 6.87778 3.55086 6.92655 3.40459C6.93703 3.37295 6.98185 3.37295 6.99241 3.40459Z"
        fill="#F5F5F5"
      />
      <path
        d="M6.99241 4.68391C7.04119 4.83019 7.17757 4.92927 7.33176 4.93044C7.36515 4.93074 7.37896 4.9733 7.35213 4.99313C7.22809 5.08474 7.17601 5.24507 7.22254 5.39207C7.23264 5.42388 7.19637 5.45025 7.1692 5.4308C7.04376 5.34114 6.8752 5.34114 6.74976 5.4308C6.72259 5.45021 6.68641 5.42388 6.69642 5.39207C6.74295 5.24507 6.69087 5.08474 6.56684 4.99313C6.54 4.97326 6.55381 4.93074 6.5872 4.93044C6.74139 4.92927 6.87778 4.83019 6.92655 4.68391C6.93703 4.65224 6.98185 4.65224 6.99241 4.68391Z"
        fill="#F5F5F5"
      />
      <path
        d="M6.99241 5.96324C7.04119 6.10952 7.17757 6.2086 7.33176 6.20977C7.36515 6.21006 7.37896 6.25263 7.35213 6.27246C7.22809 6.36406 7.17601 6.5244 7.22254 6.6714C7.23264 6.7032 7.19637 6.72958 7.1692 6.71013C7.04376 6.62047 6.8752 6.62047 6.74976 6.71013C6.72259 6.72954 6.68641 6.7032 6.69642 6.6714C6.74295 6.5244 6.69087 6.36406 6.56684 6.27246C6.54 6.25259 6.55381 6.21006 6.5872 6.20977C6.74139 6.2086 6.87778 6.10952 6.92655 5.96324C6.93703 5.93152 6.98185 5.93152 6.99241 5.96324Z"
        fill="#F5F5F5"
      />
      <path
        d="M7.98606 1.47319C8.03484 1.61947 8.17122 1.71855 8.32541 1.71972C8.3588 1.72001 8.37261 1.76258 8.34578 1.7824C8.22174 1.87401 8.16966 2.03435 8.21619 2.18135C8.22629 2.21315 8.19002 2.23953 8.16285 2.22008C8.03741 2.13042 7.86885 2.13042 7.74341 2.22008C7.71624 2.23949 7.68006 2.21315 7.69008 2.18135C7.73661 2.03435 7.68452 1.87401 7.56049 1.7824C7.53365 1.76254 7.54747 1.72001 7.58086 1.71972C7.73504 1.71855 7.87143 1.61947 7.9202 1.47319C7.93072 1.44155 7.97554 1.44155 7.98606 1.47319Z"
        fill="#F5F5F5"
      />
      <path
        d="M7.98606 2.75252C8.03484 2.89879 8.17122 2.99787 8.32541 2.99905C8.3588 2.99934 8.37261 3.04191 8.34578 3.06173C8.22175 3.15334 8.16966 3.31367 8.21619 3.46068C8.22629 3.49248 8.19002 3.51886 8.16285 3.49941C8.03741 3.40974 7.86885 3.40974 7.74341 3.49941C7.71624 3.51881 7.68006 3.49252 7.69008 3.46068C7.73661 3.31367 7.68452 3.15334 7.56049 3.06173C7.53365 3.04187 7.54747 2.99934 7.58086 2.99905C7.73504 2.99787 7.87143 2.89879 7.9202 2.75252C7.93072 2.72084 7.97554 2.72084 7.98606 2.75252Z"
        fill="#F5F5F5"
      />
      <path
        d="M7.98606 4.03181C8.03484 4.17809 8.17122 4.27717 8.32541 4.27834C8.3588 4.27864 8.37261 4.32121 8.34578 4.34103C8.22175 4.43264 8.16966 4.59297 8.21619 4.73998C8.22629 4.77178 8.19002 4.79815 8.16285 4.77871C8.03742 4.68904 7.86885 4.68904 7.74341 4.77871C7.71624 4.79811 7.68006 4.77178 7.69008 4.73998C7.73661 4.59297 7.68452 4.43264 7.56049 4.34103C7.53365 4.32116 7.54747 4.27864 7.58086 4.27834C7.73505 4.27717 7.87143 4.17809 7.9202 4.03181C7.93072 4.00014 7.97554 4.00014 7.98606 4.03181Z"
        fill="#F5F5F5"
      />
      <path
        d="M7.98606 5.31108C8.03484 5.45736 8.17122 5.55644 8.32541 5.55761C8.3588 5.5579 8.37261 5.60047 8.34578 5.6203C8.22174 5.7119 8.16966 5.87224 8.21619 6.01924C8.22629 6.05104 8.19002 6.07742 8.16285 6.05797C8.03741 5.96831 7.86885 5.96831 7.74341 6.05797C7.71624 6.07738 7.68006 6.05104 7.69008 6.01924C7.73661 5.87224 7.68452 5.7119 7.56049 5.6203C7.53365 5.60043 7.54747 5.5579 7.58086 5.55761C7.73504 5.55644 7.87143 5.45736 7.9202 5.31108C7.93072 5.27944 7.97554 5.27944 7.98606 5.31108Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.97871 0.845779C9.02748 0.992056 9.16387 1.09113 9.31806 1.09231C9.35144 1.0926 9.36526 1.13517 9.33842 1.15499C9.21439 1.2466 9.1623 1.40693 9.20883 1.55394C9.21893 1.58574 9.18267 1.61212 9.1555 1.59267C9.03006 1.503 8.8615 1.503 8.73606 1.59267C8.70889 1.61208 8.67271 1.58574 8.68272 1.55394C8.72925 1.40693 8.67717 1.2466 8.55313 1.15499C8.5263 1.13513 8.54011 1.0926 8.5735 1.09231C8.72769 1.09113 8.86407 0.992056 8.91285 0.845779C8.92337 0.814102 8.96811 0.814102 8.97871 0.845779Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.97871 2.12529C9.02748 2.27157 9.16387 2.37064 9.31806 2.37182C9.35144 2.37211 9.36526 2.41468 9.33842 2.4345C9.21439 2.52611 9.1623 2.68644 9.20883 2.83345C9.21893 2.86525 9.18267 2.89163 9.1555 2.87218C9.03006 2.78251 8.8615 2.78251 8.73606 2.87218C8.70889 2.89159 8.67271 2.86525 8.68272 2.83345C8.72925 2.68644 8.67717 2.52611 8.55313 2.4345C8.5263 2.41464 8.54011 2.37211 8.5735 2.37182C8.72769 2.37064 8.86407 2.27157 8.91285 2.12529C8.92337 2.09365 8.96811 2.09365 8.97871 2.12529Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.97871 3.40459C9.02748 3.55086 9.16387 3.64994 9.31806 3.65112C9.35144 3.65141 9.36526 3.69398 9.33842 3.7138C9.21439 3.80541 9.1623 3.96574 9.20883 4.11275C9.21893 4.14455 9.18267 4.17093 9.1555 4.15148C9.03006 4.06181 8.8615 4.06181 8.73606 4.15148C8.70889 4.17089 8.67271 4.14455 8.68272 4.11275C8.72925 3.96574 8.67717 3.80541 8.55313 3.7138C8.5263 3.69394 8.54011 3.65141 8.5735 3.65112C8.72769 3.64994 8.86407 3.55086 8.91285 3.40459C8.92337 3.37295 8.96811 3.37295 8.97871 3.40459Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.97871 4.68391C9.02748 4.83019 9.16387 4.92927 9.31806 4.93044C9.35144 4.93074 9.36526 4.9733 9.33842 4.99313C9.21439 5.08474 9.1623 5.24507 9.20883 5.39207C9.21893 5.42388 9.18267 5.45025 9.1555 5.4308C9.03006 5.34114 8.8615 5.34114 8.73606 5.4308C8.70889 5.45021 8.67271 5.42388 8.68272 5.39207C8.72925 5.24507 8.67716 5.08474 8.55313 4.99313C8.5263 4.97326 8.54011 4.93074 8.5735 4.93044C8.72769 4.92927 8.86407 4.83019 8.91285 4.68391C8.92337 4.65224 8.96811 4.65224 8.97871 4.68391Z"
        fill="#F5F5F5"
      />
      <path
        d="M8.97871 5.96324C9.02748 6.10952 9.16387 6.2086 9.31806 6.20977C9.35144 6.21006 9.36526 6.25263 9.33842 6.27246C9.21439 6.36406 9.1623 6.5244 9.20883 6.6714C9.21893 6.7032 9.18267 6.72958 9.1555 6.71013C9.03006 6.62047 8.8615 6.62047 8.73606 6.71013C8.70889 6.72954 8.67271 6.7032 8.68272 6.6714C8.72925 6.5244 8.67717 6.36406 8.55313 6.27246C8.5263 6.25259 8.54011 6.21006 8.5735 6.20977C8.72769 6.2086 8.86407 6.10952 8.91285 5.96324C8.92337 5.93152 8.96811 5.93152 8.97871 5.96324Z"
        fill="#F5F5F5"
      />
    </svg>
  );

  const GDPFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
    >
      <path
        d="M21.3683 13.9999H0.736844C0.533386 13.9999 0.368408 13.835 0.368408 13.6315V0.368436C0.368408 0.164978 0.533386 0 0.736844 0H21.3683C21.5718 0 21.7367 0.164978 21.7367 0.368436V13.6315C21.7367 13.835 21.5717 13.9999 21.3683 13.9999Z"
        fill="#41479B"
      />
      <path
        d="M21.7367 0.368436C21.7367 0.164978 21.5717 0 21.3683 0H19.7199L12.8946 4.47178V0H9.21042V4.47178L2.38512 0H0.736844C0.533386 0 0.368408 0.164978 0.368408 0.368436V1.32129L6.2242 5.15786H0.368408V8.84205H6.2242L0.368408 12.6787V13.6315C0.368408 13.835 0.533386 13.9999 0.736844 13.9999H2.38517L9.2105 9.52817V13.9999H12.8947V9.52817L19.72 13.9999H21.3683C21.5718 13.9999 21.7368 13.835 21.7368 13.6315V12.6787L15.881 8.84209H21.7367V5.1579H15.8809L21.7367 1.32129V0.368436Z"
        fill="#F5F5F5"
      />
      <path
        d="M21.7367 5.89473H12.1578V0H9.94729V5.89473H0.368408V8.10522H9.94729V13.9999H12.1578V8.10522H21.7367V5.89473Z"
        fill="#FF4B55"
      />
      <path
        d="M7.83719 8.84204L0.379242 13.6832C0.405326 13.8611 0.552025 13.9999 0.737203 13.9999H1.24466L9.19057 8.84208H7.83719V8.84204Z"
        fill="#FF4B55"
      />
      <path
        d="M14.8252 8.84204H13.4718L21.4062 13.9923C21.5911 13.9726 21.7371 13.8216 21.7371 13.6315V13.3285L14.8252 8.84204Z"
        fill="#FF4B55"
      />
      <path
        d="M0.368805 0.775342L7.12064 5.1581H8.47402L0.583448 0.0361328C0.457408 0.094687 0.368805 0.220518 0.368805 0.368635V0.775342Z"
        fill="#FF4B55"
      />
      <path
        d="M14.2482 5.1581L21.7241 0.305285C21.6931 0.133253 21.5495 0.000244141 21.3685 0.000244141H20.8407L12.8949 5.1581H14.2482Z"
        fill="#FF4B55"
      />
    </svg>
  );

  const EURFlag = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="14"
      viewBox="0 0 23 14"
      fill="none"
    >
      <path
        d="M21.7369 14H1.10544C0.901978 14 0.737 13.835 0.737 13.6316V0.368437C0.737 0.164979 0.901978 0 1.10544 0H21.737C21.9404 0 22.1054 0.164979 22.1054 0.368437V13.6316C22.1054 13.8351 21.9404 14 21.7369 14Z"
        fill="#41479B"
      />
      <path
        d="M11.5709 1.60307L11.7187 2.046L12.1856 2.04963C12.2461 2.05009 12.2711 2.12722 12.2225 2.16315L11.8469 2.44052L11.9877 2.88567C12.0059 2.94326 11.9403 2.99101 11.8911 2.95583L11.5113 2.6843L11.1314 2.95583C11.0823 2.99097 11.0166 2.94331 11.0349 2.88567L11.1757 2.44052L10.8001 2.16315C10.7514 2.12722 10.7765 2.05009 10.837 2.04963L11.3038 2.046L11.4516 1.60307C11.4707 1.54572 11.5518 1.54572 11.5709 1.60307Z"
        fill="#FFE15A"
      />
      <path
        d="M11.5709 11.1128L11.7187 11.5558L12.1856 11.5594C12.2461 11.5599 12.2711 11.637 12.2225 11.6729L11.8469 11.9503L11.9877 12.3954C12.0059 12.453 11.9403 12.5008 11.8911 12.4656L11.5113 12.1941L11.1314 12.4656C11.0823 12.5007 11.0166 12.4531 11.0349 12.3954L11.1757 11.9503L10.8001 11.6729C10.7514 11.637 10.7765 11.5599 10.837 11.5594L11.3038 11.5558L11.4516 11.1128C11.4707 11.0555 11.5518 11.0555 11.5709 11.1128Z"
        fill="#FFE15A"
      />
      <path
        d="M16.3259 6.35795L16.4737 6.80088L16.9406 6.80451C17.001 6.80497 17.0261 6.8821 16.9775 6.91803L16.6018 7.19541L16.7427 7.64055C16.7609 7.69815 16.6953 7.74589 16.6461 7.71071L16.2663 7.43918L15.8864 7.71071C15.8373 7.74585 15.7716 7.69819 15.7898 7.64055L15.9307 7.19541L15.555 6.91803C15.5064 6.8821 15.5315 6.80497 15.5919 6.80451L16.0588 6.80088L16.2066 6.35795C16.2256 6.30061 16.3068 6.30061 16.3259 6.35795Z"
        fill="#FFE15A"
      />
      <path
        d="M6.81596 6.35795L6.9637 6.80088L7.43059 6.80451C7.49106 6.80497 7.51611 6.8821 7.46748 6.91803L7.09187 7.19541L7.23268 7.64055C7.25092 7.69815 7.18531 7.74589 7.13611 7.71071L6.75628 7.43918L6.37644 7.71071C6.32728 7.74585 6.26163 7.69819 6.27987 7.64055L6.42068 7.19541L6.04507 6.91803C5.99645 6.8821 6.02149 6.80497 6.08196 6.80451L6.54885 6.80088L6.69659 6.35795C6.71571 6.30061 6.79688 6.30061 6.81596 6.35795Z"
        fill="#FFE15A"
      />
      <path
        d="M7.52984 3.8748L7.67758 4.31773L8.14447 4.32136C8.20495 4.32182 8.22999 4.39895 8.18137 4.43488L7.80575 4.71225L7.94656 5.1574C7.9648 5.21499 7.8992 5.26274 7.84999 5.22755L7.47016 4.95603L7.09033 5.22755C7.04116 5.2627 6.97551 5.21503 6.99375 5.1574L7.13457 4.71225L6.75895 4.43488C6.71033 4.39895 6.73537 4.32182 6.79584 4.32136L7.26273 4.31773L7.41048 3.8748C7.42959 3.81745 7.51068 3.81745 7.52984 3.8748Z"
        fill="#FFE15A"
      />
      <path
        d="M15.7655 8.62968L15.9133 9.07261L16.3802 9.07624C16.4406 9.0767 16.4657 9.15383 16.4171 9.18976L16.0415 9.46714L16.1823 9.91228C16.2005 9.96988 16.1349 10.0176 16.0857 9.98244L15.7059 9.71091L15.326 9.98244C15.2769 10.0176 15.2112 9.96992 15.2295 9.91228L15.3703 9.46714L14.9947 9.18976C14.946 9.15383 14.9711 9.0767 15.0315 9.07624L15.4984 9.07261L15.6462 8.62968C15.6653 8.57233 15.7464 8.57233 15.7655 8.62968Z"
        fill="#FFE15A"
      />
      <path
        d="M14.0252 2.13432L14.1729 2.57725L14.6398 2.58088C14.7003 2.58134 14.7253 2.65847 14.6767 2.6944L14.3011 2.97177L14.4419 3.41692C14.4601 3.47451 14.3945 3.52226 14.3453 3.48708L13.9655 3.21555L13.5857 3.48708C13.5365 3.52222 13.4709 3.47455 13.4891 3.41692L13.6299 2.97177L13.2543 2.6944C13.2057 2.65847 13.2307 2.58134 13.2912 2.58088L13.7581 2.57725L13.9058 2.13432C13.9249 2.07697 14.006 2.07697 14.0252 2.13432Z"
        fill="#FFE15A"
      />
      <path
        d="M9.27019 10.3702L9.41794 10.8131L9.88483 10.8167C9.9453 10.8172 9.97034 10.8943 9.92172 10.9302L9.54611 11.2076L9.68692 11.6528C9.70516 11.7104 9.63955 11.7581 9.59034 11.7229L9.21051 11.4514L8.83068 11.7229C8.78152 11.7581 8.71587 11.7104 8.73411 11.6528L8.87492 11.2076L8.49931 10.9302C8.45069 10.8943 8.47573 10.8172 8.5362 10.8167L9.00309 10.8131L9.15083 10.3702C9.16995 10.3128 9.25104 10.3128 9.27019 10.3702Z"
        fill="#FFE15A"
      />
      <path
        d="M15.6462 3.8748L15.4984 4.31773L15.0315 4.32136C14.9711 4.32182 14.946 4.39895 14.9947 4.43488L15.3703 4.71225L15.2295 5.1574C15.2112 5.21499 15.2768 5.26274 15.326 5.22755L15.7059 4.95603L16.0857 5.22755C16.1349 5.2627 16.2005 5.21503 16.1823 5.1574L16.0415 4.71225L16.4171 4.43488C16.4657 4.39895 16.4406 4.32182 16.3802 4.32136L15.9133 4.31773L15.7655 3.8748C15.7464 3.81745 15.6653 3.81745 15.6462 3.8748Z"
        fill="#FFE15A"
      />
      <path
        d="M7.41048 8.62968L7.26273 9.07261L6.79584 9.07624C6.73537 9.0767 6.71033 9.15383 6.75895 9.18976L7.13457 9.46714L6.99375 9.91228C6.97551 9.96988 7.04112 10.0176 7.09033 9.98244L7.47016 9.71091L7.84999 9.98244C7.89915 10.0176 7.9648 9.96992 7.94656 9.91228L7.80575 9.46714L8.18137 9.18976C8.22999 9.15383 8.20495 9.0767 8.14447 9.07624L7.67758 9.07261L7.52984 8.62968C7.51068 8.57233 7.42959 8.57233 7.41048 8.62968Z"
        fill="#FFE15A"
      />
      <path
        d="M9.15083 2.13432L9.00309 2.57725L8.5362 2.58088C8.47573 2.58134 8.45069 2.65847 8.49931 2.6944L8.87492 2.97177L8.73411 3.41692C8.71587 3.47451 8.78148 3.52226 8.83068 3.48708L9.21051 3.21555L9.59034 3.48708C9.63951 3.52222 9.70516 3.47455 9.68692 3.41692L9.54611 2.97177L9.92172 2.6944C9.97034 2.65847 9.9453 2.58134 9.88483 2.58088L9.41794 2.57725L9.27019 2.13432C9.25104 2.07697 9.16995 2.07697 9.15083 2.13432Z"
        fill="#FFE15A"
      />
      <path
        d="M13.9057 10.3702L13.758 10.8131L13.2911 10.8167C13.2306 10.8172 13.2056 10.8943 13.2542 10.9302L13.6298 11.2076L13.489 11.6528C13.4708 11.7104 13.5364 11.7581 13.5856 11.7229L13.9654 11.4514L14.3452 11.7229C14.3944 11.7581 14.46 11.7104 14.4418 11.6528L14.301 11.2076L14.6766 10.9302C14.7252 10.8943 14.7002 10.8172 14.6397 10.8167L14.1728 10.8131L14.0251 10.3702C14.0059 10.3128 13.9248 10.3128 13.9057 10.3702Z"
        fill="#FFE15A"
      />
    </svg>
  );
  return (
    <div className="section__padding model-pricing__section" id="model">
      <div className="model-pricing__typography">
        <h2 className="model-pricing__typography--heading">
          Our Models & Pricing
        </h2>
        <p className="model-pricing__typography--paragraph">
          Traders Support Funds offers multiple models to its traders , so they
          can enjoy the benefits of trading in every way possible. You can
          choose model/package according to your trading expertise.
        </p>
      </div>

      {/* Linear Line */}
      <img src={linearLine} alt="Linear Line" className="model-pricing__line" />

      {/* Model Pricing Menu */}

      <ul className="model-pricing__menus">
        <li className="model-pricing__menu">
          <a href="" className="model-pricing__menu--link">
            FX Direct Funded Account
          </a>
        </li>
        <li className="model-pricing__menu">
          <a href="" className="model-pricing__menu--link">
            FX One-Phase Evaluation
          </a>
        </li>
        <li className="model-pricing__menu">
          <a href="" className="model-pricing__menu--link">
            FX Direct Funded Account
          </a>{" "}
        </li>
        <li className="model-pricing__menu">
          {" "}
          <a href="" className="model-pricing__menu--link">
            FX Direct Funded Account
          </a>{" "}
        </li>
      </ul>

      {/* Linear Line */}
      <img src={linearLine} alt="Linear Line" className="model-pricing__line" />

      {/* MOdel Pricing Tiers */}
      <div className="model-pricing__tiers">
        <div className="currency__card">
          <h4 className="currency__card--title">Currency</h4>

          <div className="currency__card--currencies">
            {/* <div className="currency">1</div> */}
            <CurrencyBtn currencyName="USD" nationFlag={USAFlag} />
            <CurrentBtnAlt currencyName="GDP" nationFlag={GDPFlag} />
            <CurrentBtnAlt currencyName="EUR" nationFlag={EURFlag} />
          </div>
        </div>
        {/* Currency Fund Account */}
        <div className="currency-fund-account">
          <h4 className="currency-fund-account__title">
            FX Direct Funded Account
          </h4>

          <div className="currency-fund-account__amount">
            <CurrencyBtn currencyName="100,000.00" />
            <CurrentBtnAlt currencyName="10,000.00" />
            <CurrentBtnAlt currencyName="2,500.00" />
          </div>
        </div>

        <div className="model__plans">
          <div className="model__plan">Min Trading Days 5 Days</div>
          <div className="model__plan">Min Trading Days Unlimited</div>
          <div className="model__plan">Daily Drawdown 5 $4000</div>
          <div className="model__plan">Max Drawdown $8000</div>
          <div className="model__plan">Profit Target $2500</div>
          <div className="model__plan">Account Leverage 1:100</div>
          <div className="model__plan">Profit Split 55/45</div>
          <div className="model__plan">Non Refundable Fee $2100</div>
          <div className="model__plan">Terms & Conditions RTP</div>
        </div>
      </div>

      {/* COMPONENTS */}
      <DirectFundedAccount />
    </div>
  );
}

export default ModelPricing;
