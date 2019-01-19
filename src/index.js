import React from "react";
import ReactDOM from "react-dom";
import * as R from "ramda";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const basketTotal = state.api.basket.pricing.total;
const paymentInstrumentList = state.api.basket.paymentInstrumentList;
const amountPaiedWithGiftCard = paymentInstrumentList
  .map(pi => pi.amount)
  .reduce((prevValue, current) => {
    return prevValue + current;
  });
const remainingToPay = basketTotal - amountPaiedWithGiftCard;

const bigObejec = { a: { b: { c: 1 } } };

const nullSafeGet = (path, obj) => R.pathOr("", path, obj);

console.log(nullSafeGet(["a", "b", "c"], bigObejec));

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
