import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                CarsWorld
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function StickyFooter() {
    return (
        <Box
            component="footer"
            sx={{
                paddingTop:"30px",
                paddingBottom:"30px",
                width:"100%",
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark"
                        ? theme.palette.grey[900]
                        : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="xl" style={{ textAlign: "center" }}>
                <Typography variant="body1">
                   The best rental cars in Spain
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}
