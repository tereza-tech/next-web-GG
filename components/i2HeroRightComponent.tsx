import React from 'react';
import { createStyles, Container, Title, Text, Button, Image } from '@mantine/core';
import styles from '../styles/Hero.module.css'
import { FaqWithHeader } from '../components/i2faqPropsComponent'
import image from '../public/image_2.png';

const useStyles = createStyles((theme) => ({
  root: {
    width: '72%',
    position: 'relative',
    backgroundColor: '#11284b',
    backgroundSize: 'contain',
    backgroundPosition: 'right',
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #101010 70%),url(${image.src})`,
    borderRadius: 16,
    paddingTop: 30,
    paddingBottom: 0,
    marginTop: 30,
  },


  inner: {
      width: '133%',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    flex: 1,
    width: '52%',
    height: '52%',
    position: 'absolute',
    right: 0,

    marginTop: 52,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },



  content: {
    maxWidth: 480,
   
    paddingTop: 16,
    paddingBottom: 70,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
        maxWidth: '100%',
        marginRight: 0,
      },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function HeroImageRight() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'yellow', to: '#fede00' }}
              >
                fully featured
              </Text>{' '}
              React components library
            </Title>

            <Text className={classes.description} mt={30}>
              Build fully functional accessible web applications with ease – Mantine includes more
              than 100 customizable components and hooks to cover you in any situation
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'yellow', to: '#fede00' }}
              size="md"
              className={classes.control}
              mt={40}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
      
    </div>
  );
}