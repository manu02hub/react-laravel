import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { grey } from "@mui/material/colors";
import { Button, ButtonBase } from "@mui/material";

function BtnFilter({ textBtn }) {
    const color = grey[50];

    return (
        <Button
            variant="contained"

            style={{ background: color, width: "auto", fontFamily: "Segoe UI",}}
        >
            {textBtn}
        </Button>
    );
}

export default BtnFilter;
