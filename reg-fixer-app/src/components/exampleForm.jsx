import React from "react";

const ExampleForm = () => {
  return (
    <div className="row">
      <div className="col-6">
        <form>
          <div class="form-row align-items-center">
            <div class="col-10 my-1">
              <input
                type="text"
                class="form-control"
                id="inlineFormInputName"
                placeholder="New Positive Example"
              />
            </div>
            <div class="col-auto my-1">
              <button type="submit" class="btn btn-primary">
                +
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-6">
        <form>
          <div class="form-row align-items-center">
            <div class="col-9 my-1">
              <input
                type="text"
                class="form-control"
                id="inlineFormInputName"
                placeholder="New Negtive Example"
              />
            </div>
            <div class="col-auto my-1">
              <button type="submit" class="btn btn-primary">
                +
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExampleForm;
