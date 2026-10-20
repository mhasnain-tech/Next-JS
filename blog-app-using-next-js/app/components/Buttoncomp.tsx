"use client";

import { Button } from "@mui/material";

const Buttoncomp = ({ title, icon, handler }) => {
  return (
    <div>
      <Button
        startIcon={icon}
        onClick={handler}
        variant="outlined"
        sx={{
          color: "black",
          border: "1px solid black",
          ":hover": {
            backgroundColor: "white",
            color: "purple",
          },
        }}
      >
        {title}
      </Button>

      {/* <button  className="border rounded  hover:cursor-pointer hover:bg-blue-300 p-2">
            {title}
          </button> */}
    </div>
  );
};

export default Buttoncomp;
