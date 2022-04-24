import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
//import WhichWay_font from '../assets/styles/fonts/WhichWay_font';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          colors: {
          'giraffe-yellow': ["ffd702","fee000","fde600","ffeb00","ffed2b","fdef4c","fbf066"],
          'white': ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529']
          },
          primaryColor: 'giraffe-yellow',
          headings: {
            fontFamily: 'WhichWay, sans-serif;',
            fontFamilyMonospace: 'Menlo, serif;',
            headings: { fontFamily: 'WhichWay, sans-serif' },
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}