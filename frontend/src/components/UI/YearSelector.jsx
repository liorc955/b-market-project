import Form from "react-bootstrap/Form";
import * as moment from "moment";
import React from "react";

export const extractYear = (dateFormat) => {
  return moment(dateFormat, "MMMM Do YYYY, h:mm:ss a").year();
};

const YearSelector = (props) => {
  let ordersYears = props.orders.map((order) => extractYear(order.timeStamp));
  ordersYears = [...new Set(ordersYears)];

  return (
    <Form.Select
      {...(props.className ? { className: props.className } : {})}
      onChange={props.handleOnChange}
    >
      <option value="0">Select Year</option>
      {ordersYears.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Form.Select>
  );
};

export default React.memo(YearSelector);
