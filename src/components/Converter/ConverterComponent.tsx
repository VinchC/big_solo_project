/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import ConverterCard from "./ConverterCard.tsx";
import { useState } from "react";

const DOLLAR_IN_EURO = 1.06;

function Converter() {
  const [currency, setCurrency] = useState<"EURO" | "DOLLAR">("EURO");
  const toggleCurrency = () => {
    setCurrency(currency === "EURO" ? "DOLLAR" : "EURO");
  };

  const [price, setPrice] = useState(10);
  const convertPrice = () => {
    if (currency === "EURO") {
      setPrice((price) => price * DOLLAR_IN_EURO);
      setCurrency("DOLLAR");
    } else {
      setPrice((price) => price / DOLLAR_IN_EURO);
      setCurrency("EURO");
    }
  };

  return (
    <div>
      <ConverterCard price={price} currency={currency} />
      <div className="buttonCenter">
        <button type="button" className="control_btn" onClick={convertPrice}>
          Convert Price
        </button>
      </div>
    </div>
  );
}

export default Converter;
