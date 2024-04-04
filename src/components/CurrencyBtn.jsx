import React from "react";

import "./CurrencyBtn.css";

function CurrencyBtn({ currencyName, nationFlag }) {
  return (
    <div className="currency-btn">
      {currencyName} {nationFlag}
    </div>
  );
}

export default CurrencyBtn;
