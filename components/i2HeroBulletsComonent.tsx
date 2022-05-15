import React from 'react';
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';
import image from '../public/image_9.jpeg';
import image2 from '../public/image_8.jpeg';
import { FeaturesAsymmetrical2 } from '../components/i2featBlocksComponent'

const useStyles = createStyles((theme) => ({
    root: {
    },
  inner: {
    maxWidth: 1060,
    width: 1060,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    left: '-70px',
    overflow: 'hidden',
    marginTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 3,
    marginBottom: theme.spacing.xl,
    height: 490,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
  },

  content: {
    maxWidth: '100%',
    marginRight: theme.spacing.sm,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `WhichWay, ${theme.fontFamily}`,
    fontSize: 25,
    lineHeight: 1.2,
    fontWeight: 100,
    marginTop: 50,
    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    marginRight: 20,
    [theme.fn.smallerThan('xs')]: {
      flex: 2,
    },
  },

  controlwh: {
    color: 'black',
    marginRight: 20,
    [theme.fn.smallerThan('xs')]: {
      flex: 2,
    },
  },

  twoImages: {
    flex: 2,
    position: 'relative',
    opacity: '0.87',
    paddingLeft: 68,
  },
  image: {
   width: '0%',
   height: 'auto',
   float: 'right',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  image2: {
    width: '0px',
    height: 'auto',
    position: 'absolute',
    bottom: '70px',
    right: '-1px',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
    reveal: {
      position: 'relative',
      transform: 'translateY(150px)',
      opacity: 0,
      transition: '1s all ease',
    },

  },

  image3: {
  },

  colum: {display: 'flex',},

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][3], 1)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },

  wrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 2,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    height: '50%',
  },

  header: {
    width: '111%',
    position: 'relative',
    left: '-25px',
    marginBottom: 60,
  },

  header1: {
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'relative',
    padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl * 2}px`,
    borderRadius: theme.radius.md,
    marginBottom: 44,
    '@media (max-width: 1080px)': {
      height: 'auto',
      flexDirection: 'column-reverse',
      alignItems: 'initial',
      padding: theme.spacing.xl,
    },
  },
  header2: {
    width: '117%',
    height: '144%',
    boxSizing: 'border-box',
    backgroundImage: `url(${image2.src})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'relative',
    padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl * 2}px`,
    borderRadius: theme.radius.md,
    marginBottom: 0,
    left: '-38px',

    '@media (max-width: 1080px)': {
      height: 'auto',
      flexDirection: 'column-reverse',
      alignItems: 'initial',
      padding: theme.spacing.xl,
    },
  },

}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              
              Stěhujeme
            </Title>
            <Text color="dimmed" mt="md">
              <br />
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>
<div className={classes.colum}>
            <List
              mt={48}
              spacing="sm"
              size="md"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Zabalíme</b>
              </List.Item>
              <List.Item>
                <b>Rozmontujeme</b>
              </List.Item>
              <List.Item>
                <b>Naložíme</b>
              </List.Item>
              <List.Item>
                <b>Přivezeme</b>
              </List.Item>
            </List>
            <List
              mt={48}
              mb={1}
              spacing="sm"
              size="md"
              ml={25}
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Zabalíme</b>
              </List.Item>
              <List.Item>
                <b>Rozmontujeme</b>
              </List.Item>
              <List.Item>
                <b>Naložíme</b>
              </List.Item>
              <List.Item>
                <b>Přivezeme</b>
              </List.Item>
            </List>
            </div>
            <Group mt={40}>
              <Button radius="xl" size="md" className={classes.controlwh}>
                Více
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
               Ceník
              </Button>
            </Group>
          </div>
         
       
        </div>
      </Container>
  );
}
/*
<div className={classes.twoImages}>
          <Image src={image.src} className={classes.image} />
            <Image id="mover" src={image2.src} className={classes.image2}/>
        </div>
*/