import { createTheme, ThemeProvider,Theme  } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import ReactHookFormEx from "../../components/interview/reactHookForm/reactHookFormEx.tsx";

const theme = (outerTheme:Theme ) => {
    const defaultMode = 'dark'; // Default mode if outerTheme is not provided
    return createTheme({
        typography: {
            fontFamily: [
                'vazir',
                'sans-serif'
            ].join(','),
        },
        direction: 'rtl',
        palette: {
            mode: outerTheme?.palette?.mode || defaultMode,
        },
    });
};

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const ReactFormHook = () => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <div className=' w-[100vw] flex justify-center items-center'>
                    <ReactHookFormEx/>
                </div>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default ReactFormHook;
