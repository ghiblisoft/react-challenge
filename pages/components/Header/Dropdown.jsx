
import React from "react";
// core components
import CustomDropdown from "~/components/CustomDropdown/CustomDropdown.jsx";

function Dropdown() {
  return (
    <div>

    <CustomDropdown
      buttonText="Secondary"
      buttonProps={{
        color: "secondary"
      }}
      dropdownList={[
        "Action",
        "Another action",
        "Something else here",
        { divider: true },
        "Separated link"
      ]}
    />


    </div>
  );
};

export default Dropdown;
