import type { NextPage } from 'next'
import Head from 'next/head'
import { createStyles, Image, Title, Group, ActionIcon, Button, MantineProvider, Text, Space, Stack, Container, Grid, Center, Box, useMantineTheme, CSSObject, MediaQuery, ThemeIcon } from '@mantine/core'
import { Togglable } from '../components/togglableComponent'
import {Link} from 'react-scroll'
import { ContactUs } from '../components/i2contactUsComponent'
import Phone from '../public/phone.png'
import Mail from '../public/email.png'
import { BorderAll } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,

    backgroundColor: 'transparent',
  },

  icony1: {
    width: 42,
    display: 'inline-block'
  },
  icony2: {
    width: 38,
    display: 'inline-block',
    Margineft: 10
  },
  ybutton: {
    backgroundColor: '#fede00',
    fontFamily: 'WhichWay',
    color: 'black',
    borderRadius: '8px',
    fontSize: '17px',
    width: '100%'
  },
  ybutton2: {
    position: 'relative',
    top: -6,
    backgroundColor: '#fede00',
    color: 'black',
    height: 27,
    fontSize: 12,
    paddingRight: 0,
    paddingLeft: 0,
    borderRadius: 4,
    margin: '0 1.35px',
    width: '19%',

  },

  linkbtn: {

    width: '29%'
  }
  
}))


const Home: NextPage = () => {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const highlight: CSSObject = {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors.blue[7], 0.25)
        : theme.colors.blue[0],
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.blue[6] : theme.colors.blue[3]
      }`,
  };

  const vanQuery: CSSObject = {
    display: 'none'
  };

  const leadContactQuery: CSSObject = {
    transform: 'scale(0.7)'
  };

  const hideContactQuery: CSSObject = {
    display: 'none'
  };

  const underContactQuery: CSSObject = {
    display: 'none',
  };

  const centerQuery: CSSObject = {
    position: 'relative',
    left: -36,
  };

  const logoMdQuery: CSSObject = {
    transform: 'scale(0.75)'
  };

  const logoSmQuery: CSSObject = {
    transform: 'scale(0.7)'
  };

  const logoXsQuery: CSSObject = {
    transform: 'scale(0.6)'
  };

  const centerIQuery: CSSObject = {
    position: 'relative',
    left: -22,
    transform: 'scaleY(1.01)'
  };

  const column: CSSObject = {
    display: 'flex',
    flexDirection: 'column'
  }

  const smPaddingQuery: CSSObject = {
    padding: '0 20px'
  }

  const smHeaderQuery: CSSObject = {
    width: '60%'
  }

  const menuMdQuery: CSSObject = {
    transform: 'scaleY(0.88)'
  }

  const menuSmQuery: CSSObject = {
    display: 'none'
  }

  const menu2SmQuery: CSSObject = {
    display: 'none'
  }

  const menu2XsQuery: CSSObject = {
  }


  const boxStyles = {
    borderRadius: 3,
    padding: '3px 5px',
    border: '1px solid transparent',
  };
  return (
    <MediaQuery smallerThan="md" styles={smPaddingQuery}>
    <Center style={{ backgroundColor: '#101010' }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Togglable></Togglable>
        <MediaQuery smallerThan="md" styles={smHeaderQuery}>
          <Center style={{ width: '90.5%',  display: 'flex', justifyContent: 'space-between', margin: 'auto', paddingTop: '1%', paddingBottom: '2%', height: 130 }}>
            <MediaQuery smallerThan="xs" styles={logoXsQuery}>
              <MediaQuery smallerThan="sm" styles={logoSmQuery}>
                <MediaQuery smallerThan="md" styles={logoMdQuery}>
                  <Image src="./Logo.png" alt="logo" style={{ width: 194 }}></Image>
                </MediaQuery>
              </MediaQuery>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={hideContactQuery}>
              <MediaQuery smallerThan="md" styles={leadContactQuery}>
                <Group>
                  <Group style={{ fontFamily: 'WhichWay', color: '#fede00' }}>
                    <Image src={Phone.src} className={classes.icony1}></Image>
                    <Stack spacing="xs">
                      <Title order={5} style={{ color: '#fede00' }}>+420 777 032 765</Title>
                      <Title order={5} style={{ color: '#fede00' }}>+420 777 032 763</Title>
                    </Stack>
                  </Group>
                  <Space w="xs" />
                  <Group>
                    <Image src={Mail.src} className={classes.icony2}></Image>
                    <Title order={5} style={{ color: '#fede00' }}>info@2ww.cz</Title>
                  </Group>
                </Group>
              </MediaQuery>
            </MediaQuery>
            <MediaQuery smallerThan="xs" styles={logoXsQuery}>
              <MediaQuery smallerThan="sm" styles={logoSmQuery}>
                <MediaQuery smallerThan="md" styles={logoMdQuery}><Image src="./Giraffe_logo.png" alt="logo" style={{ width: 108 }}></Image></MediaQuery></MediaQuery></MediaQuery>
          </Center>
        </MediaQuery>
        

        <MediaQuery largerThan="sm" styles={underContactQuery}>
          <Center style={{ paddingBottom: 10 }}>
            <Group>
              <Group style={{ fontFamily: 'WhichWay', color: '#fede00' }}>
                <Image src={Phone.src} className={classes.icony1} style={{ width: '6.5vw' }}></Image>
                <Stack spacing="xs">
                  <Title order={5} style={{ color: '#fede00', fontSize: '2.34vw' }}>+420 777 032 765</Title>
                  <Title order={5} style={{ color: '#fede00', fontSize: '2.35vw' }}>+420 777 032 763</Title>
                </Stack>
              </Group>
              <Space w="xs" />
              <Group>
                <Image src={Mail.src} className={classes.icony2} style={{ width: '5.5vw' }}></Image>
                <Title order={5} style={{ color: '#fede00', fontSize: '2.27vw', paddingBottom: 6 }}>info@2ww.cz</Title>
              </Group>
            </Group>
          </Center>
        </MediaQuery>
        <Container style={{ width: '85%', margin: 'auto' }}>
          <Image src="./intro.jpeg" alt="Intro Image" style={{ width: '110%', position: 'relative', left: '-5%' }}></Image>
        </Container>

        
        <Center style={{ width: '93%', margin: 'auto', marginTop: 11 }}>
          <MediaQuery smallerThan="sm" styles={menuSmQuery}>
            <MediaQuery smallerThan="md" styles={menuMdQuery}>
              <Group grow style={{ width: '100%' }}>
                <Container style={{display: 'flex', width: '100%', justifyContent: 'space-between', gap: 8}}>
                < Link className={classes.linkbtn} activeClass="active" to="about" spy={true} smooth={true}><Button className={classes.ybutton}>O nás</Button></Link>
                < Link className={classes.linkbtn} to="pricing" spy={true} smooth={true}><Button className={classes.ybutton}>Ceník</Button></Link>
                < Link className={classes.linkbtn} to="services" spy={true} smooth={true}><Button className={classes.ybutton}>Služby</Button></Link>
                < Link className={classes.linkbtn} to="contact" spy={true} smooth={true}><Button className={classes.ybutton}>Poptávka</Button></Link>
                < Link className={classes.linkbtn} to="gallery" spy={true} smooth={true}><Button className={classes.ybutton}>Galerie</Button></Link>
                </Container>
              </Group></MediaQuery></MediaQuery>
          <MediaQuery smallerThan="xs" styles={menu2XsQuery}>
            <MediaQuery largerThan="sm" styles={menu2SmQuery}>
              <Container style={{width: '100%'}}>
              < Link className={classes.linkbtn} activeClass="active" to="about" spy={true} smooth={true}><Button className={classes.ybutton2}>O nás</Button></Link>
              < Link className={classes.linkbtn} to="pricing" spy={true} smooth={true}><Button className={classes.ybutton2}>Ceník</Button></Link>
              < Link className={classes.linkbtn} to="services" spy={true} smooth={true}><Button className={classes.ybutton2}>Služby</Button></Link>
              < Link className={classes.linkbtn} to="contact" spy={true} smooth={true}><Button className={classes.ybutton2}>Poptávka</Button></Link>
              < Link className={classes.linkbtn} to="gallery" spy={true} smooth={true}><Button className={classes.ybutton2}>Galerie</Button></Link></Container>
            </MediaQuery></MediaQuery>
        </Center>


      

        <Container style={{ width: '86%', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', borderBottom: '3px solid #fede00' }}>
          <Title id="about" style={{ fontFamily: 'WhichWay', fontSize: '2.26vw', color: '#fede00', margin: '3%', marginTop: '5%', }}>O nás</Title>
          <MediaQuery smallerThan="sm" styles={centerIQuery}><Image src="./dig_11.PNG" alt="" style={{ width: '79%', minWidth: '388px', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', marginLeft: '5%' }}></Image>
          </MediaQuery></Container>
        <Container style={{ width: '82%', margin: 'auto', paddingBottom: '1%', marginBottom: '1%', marginTop: '29px', borderBottom: '4px solid #fede00' }}>
          <Title id="pricing" style={{ fontFamily: 'WhichWay', fontSize: '2.26vw', color: '#fede00', margin: '0.2%', marginTop: '8%', }}>Ceník</Title>
          <Container style={{ display: 'flex', alignItems: 'stretch', paddingBottom: '2%' }}>
            <MediaQuery smallerThan="sm" styles={vanQuery}>
              <Image src="./van.png" alt="" style={{ width: '23%', margin: 'auto', paddingTop: '12%', paddingBottom: '0%', marginLeft: '3%' }}></Image>
            </MediaQuery>
            <Image src="./dig_9.PNG" alt="" style={{ width: '64%', minWidth: '245px', margin: 'auto', paddingTop: '7%', paddingBottom: '2%', marginLeft: '15%' }}></Image>
          </Container>
          <Image src="./dig_10.PNG" alt="" style={{ width: '60%', minWidth: '310px', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', marginBottom: '3%' }}></Image>
        </Container>
        <Container style={{ width: '84%', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', marginTop: '3%', borderBottom: '3px solid #fede00' }}>
          <MediaQuery smallerThan="sm" styles={centerQuery}><span>
            <Image src="./dig_8.PNG" alt="" style={{ width: '80%', minWidth: '390px', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', marginLeft: '8%', marginBottom: '3%' }}></Image>
            <Image src="./dig_7.PNG" alt="" style={{ width: '80%', minWidth: '390px', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', marginLeft: '8%', marginBottom: '3%' }}></Image>
          </span></MediaQuery></Container>

        <Container id="services" style={{ width: '81%', margin: 'auto', paddingTop: '2%', paddingBottom: '2%', borderBottom: '3px solid #fede00', marginBottom: '1%' }}>
          <Title style={{ fontFamily: 'WhichWay', fontSize: '2.1vw', color: '#fede00', margin: '1%', marginTop: '5%', }}>Služby</Title>
          <Center><Image src="./dig_5.PNG" alt="" style={{ width: '56%', minWidth: '280px', margin: '5%' }}></Image></Center>
        </Container>
        <Container id="contact" style={{ width: '86%' }}><ContactUs></ContactUs></Container>


      </main>

    </Center>
    </MediaQuery>
  )
}

export default Home


const redirectToLink = (link: string): void => {
  window.open(link, '_blank');
};