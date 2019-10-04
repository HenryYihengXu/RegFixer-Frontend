import React, { Component } from "react";

const Examples = props => {
  const { examples, label } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="clickable">{label + " Examples"}</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {examples.map(example => (
          <tr>
            <td>{example}</td>
            <td>
              <button
                onClick={() => {
                  props.onDelete(example);
                }}
                className="btn btn-danger btn-sm"
              >
                -
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Examples;
