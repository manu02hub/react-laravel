// import './bootstrap';
import '../css/estilo.css';

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        // root.render(<App {...props} />);

        root.render(
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <App {...props} />
            </ThemeProvider>
            // <App {...props} />
        );
    },
    progress: {
        color: "#4B5563",
    },
});
