import { createRoot } from 'react-dom/client';
import App from "app/App"
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider/index';

import "shared/config/i18n/i18n";

const container = document.getElementById('root');

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);