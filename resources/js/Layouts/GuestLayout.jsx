
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function Guest({ children }) {
    return (
        <Container maxWidth="xl" style={{ marginTop: "20px" }}>
            <Grid container height={"100%"}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={2}>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
