import type { AppProps } from 'next/app';
import '@navikt/ds-css';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
