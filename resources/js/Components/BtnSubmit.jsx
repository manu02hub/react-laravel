import React from "react";
import Button from "@mui/material/Button";

export default function BtnSubmit({
    type = "submit",
    processing,
    children,
    onClick,
}) {
    return (
        <Button
            variant="contained"
            type={type}
            onClick={onClick}
            disabled={processing}
            style={{ width: "100%", fontFamily: "Segoe UI" }}
            sx={{ mt: 3, mb: 2, p: 1 }}
        >
            {children}
        </Button>
    );
}
