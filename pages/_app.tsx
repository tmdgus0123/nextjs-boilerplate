import MainLayout from "@/components/layout/mainLayout";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactNode) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? MainLayout;

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;
