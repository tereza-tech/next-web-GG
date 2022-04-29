import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Image, Title, Group, ActionIcon, Button, MantineProvider , Text} from '@mantine/core'
//import { HeaderSimple } from './headerComponent'
import { HeaderMiddle } from './header3Component'
import { ArticleCard } from './cardComponent'
import { HeroBullets } from './heroBulletsComponent'
import { YellowBullets } from './yellowBulletsComponent'
import { CardInTouch } from './cardInTouchComponent'
import { TwoFlexContact } from './twoFlexContactComponent'
import { ThreeTiles } from './threeTilesComponent'
import { Togglable } from './togglableComponent'
import Links from './api/links.json'
import Categories from './api/tiles.json'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Togglable></Togglable>
        <HeaderMiddle links={Links.Links}></HeaderMiddle>
        <ArticleCard>
          <Image
        radius="md"
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
      />
        </ArticleCard>
        
        <Title order={2}>We are damn cool company!</Title>
        <HeroBullets></HeroBullets>
        <YellowBullets></YellowBullets>
        <ThreeTiles className={styles.hidden} categories={Categories.Categories}></ThreeTiles><Image className={styles.sofa} src="/comics_sofa.png"></Image>
        <MantineProvider styles={{ Text: { root: { fontFamily: 'WhichWay, sans-serif' } } }}>
      <Text>20px text</Text>
    </MantineProvider>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div className={styles.grid}>
          
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <TwoFlexContact></TwoFlexContact>
<CardInTouch></CardInTouch>
      </main>
      <footer className={styles.footer}>
        <Image src="/comics_skate.png" className={styles.skate}></Image>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home


const redirectToLink = (link: string): void => {
  window.open(link, '_blank');
};