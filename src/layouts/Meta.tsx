import Head from 'next/head'
// import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo'

import { AppConfig } from '@/utils/AppConfig'

type IMetaProps = {
  title: string
  description: string
  canonical?: string
}

const Meta = (props: IMetaProps) => {
  // const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link rel="icon" href="https://goledger.com.br/wp-content/uploads/2020/09/cropped-goledger-icon-w-background-32x32.png" sizes="32x32"/>
        <link rel="icon" href="https://goledger.com.br/wp-content/uploads/2020/09/cropped-goledger-icon-w-background-192x192.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="https://goledger.com.br/wp-content/uploads/2020/09/cropped-goledger-icon-w-background-180x180.png"/>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description, 
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name
        }}
      />
    </>
  )
}

export { Meta }
