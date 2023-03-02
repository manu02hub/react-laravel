import React from "react";
import ResponsiveAppBar from "@/Components/AppBarPublic";
import { AppBar } from "@mui/material";
import { Grid } from "@mui/material";
import StickyFooter from "@/Components/Footer";

export default function Cars({ children }) {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <Grid
                sx={{ flexGrow: 1, marginBottom: "20px" }}
                container
                spacing={2}
            >
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
