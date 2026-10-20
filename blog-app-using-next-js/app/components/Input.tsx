"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function BasicTextFields({ title, type, handler, id , value}) {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "29ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        onChange={(e) => handler(id,e.target.value)}
        label={title}
        variant="outlined"
        type={type}
        value={value}
      />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  );
}
