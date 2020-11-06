import React, { useState } from "react";

const Prices = (props) => {
  const [currency, setCurrency] = useState("USD");

  const USD = props.bpi.bpi.USD;
  const GBP = props.bpi.bpi.GBP;
  const EUR = props.bpi.bpi.EUR;
  let list = "";

  if (currency === "USD") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {USD.description} :{" "}
        <span className="badge badge-primary">{USD.code}</span>
        <strong>{USD.rate}</strong>
      </li>
    );
  } else if (currency === "GBP") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {GBP.description} :{" "}
        <span className="badge badge-primary">{GBP.code}</span>
        <strong>{GBP.rate}</strong>
      </li>
    );
  } else if (currency === "EUR") {
    list = (
      <li className="list-group-item">
        Bitcoin rate for {EUR.description} :{" "}
        <span className="badge badge-primary">{EUR.code}</span>
        <strong>{EUR.rate}</strong>
      </li>
    );
  }
  return (
    <div>
      <ul className="list-group">{list}</ul>
      <br />
      <select
        onChange={(e) => setCurrency(e.target.value)}
        className="form-control"
      >
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default Prices;
