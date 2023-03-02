import React from "react";
import TextField from "@mui/material/TextField";
import { useRef } from "react";

export default function BasicTextFields({
    type,
    name,
    value,
    label,
    ref,
    handleChange,
}) {
    const input = ref ? ref : useRef();

    return (
        <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            type={type}
            name={name}
            value={value}
            ref={input}
            fullWidth
            style={{ marginBottom: "20px" }}
            onChange={(e) => handleChange(e)}
            required
        />
    );
}
