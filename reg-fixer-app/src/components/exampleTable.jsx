import React from "react";
import Examples from "./examples";

const ExampleTable = props => {
  return (
    <div className="row">
      <div className="col-6">
        <Examples
          label="Positive"
          examples={props.positiveExamples}
          onDelete={props.onDeletePositive}
        />
      </div>
      <div className="col-6">
        <Examples
          label="Negtive"
          examples={props.negtiveExamples}
          onDelete={props.onDeleteNegtive}
        />
      </div>
    </div>
  );
};

export default ExampleTable;
