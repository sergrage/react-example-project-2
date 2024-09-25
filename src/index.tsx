import { createRoot } from 'react-dom/client';
import App from "app/App"
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider/index';
import "app/styles/index.scss";
import "shared/config/i18n/i18n";
import { SroreProvider } from 'app/providers/StoreProvider';

const container = document.getElementById('root');

const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <SroreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </SroreProvider>

);