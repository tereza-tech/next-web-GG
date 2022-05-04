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
import image from '../public/obrys.png';
import image2 from '../public/comics_sofa.png';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '105%',
    position: 'relative',
    left: '-2.5%',
    marginTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 3,
    marginBottom: theme.spacing.xl * 2,
    height: 500,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
  },

  content: {
    maxWidth: 480,
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
    top: 40,
    left: '-30px',
  },
  image: {
    width: '41%',
    position: 'relative',
    left: '-24%',
top: '127px',
opacity: '0.85',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  image2: {
    width: '448px',
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
              mt={30}
              spacing="sm"
              size="sm"
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
              mt={30}
              spacing="sm"
              size="sm"
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
            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.controlwh}>
                Více
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
               Ceník
              </Button>
            </Group>
          </div>
         
          <div className={classes.twoImages}>
          <Image src={image.src} className={classes.image} />
            <Image id="mover" src={image2.src} className={classes.image2}/>
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