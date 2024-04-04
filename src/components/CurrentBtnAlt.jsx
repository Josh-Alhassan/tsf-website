import React from "react";

import "./CurrentBtnAlt.css";

function CurrentBtnAlt({ currencyName, nationFlag }) {
  return (
    <div className="currency-btn-alt">
      {currencyName} {nationFlag}
    </div>
  );
}

export default CurrentBtnAlt;
