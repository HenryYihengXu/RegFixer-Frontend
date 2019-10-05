import React, { Component } from "react";

const RegexDisplay = props => {
  return (
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td style={{ width: "25%" }}>Regex to Fix:</td>
          <td style={{ width: "70%", align: "center" }}>{props.regex}</td>
          <td>
            <button className="btn btn-warning btn-sm" onClick={props.onEdit}>
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RegexDisplay;
