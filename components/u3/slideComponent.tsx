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
import image from '../../public/Giraffe_logo.png';

const useStyles = createStyles((theme) => ({
    root: {
        width: 1250,
        maxWidth: 1250,
    },
  inner: {
    position: 'relative',
    display: 'flex',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 4,
    width: 1250,
    maxWidth: 1250,
    left: '-150px',
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: 200,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  const myFunc:Function = require('./myFunc');
  myFunc()
  return (
    <div>
        <canvas></canvas>

<div className='absolute-center'>
    <h3>MOVE AROUND YOUR MOUSE!</h3>
    
    <h5><i>You can adjust the options by modifying lines 11 to 29 of the JavaScript code Please note that upon resizing the page, it will have to reload</i></h5>
    
    <span id="close"><i className='fa fa-fw fa-times-circle-o'></i></span>
</div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

           

              <Button mt={30} variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}