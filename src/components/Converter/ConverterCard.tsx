/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

function ConverterCard({ price, currency }) {
  return (
    <div className="converter">
      <h2>
        {price} {currency}
      </h2>
    </div>
  );
}

export default ConverterCard;
