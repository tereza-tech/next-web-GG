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
import image from '../public/yellow_car.png';

const useStyles = createStyles((theme) => ({
  outer: {
    backgroundColor: '#fcdf45',
    width: '100%',
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,
    paddingTop: theme.spacing.md * 2,
    paddingBottom: theme.spacing.sm,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 2,
    },
  },

  image: {
    flex:2,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
    filter: 'brightness(1.22) hue-rotate(-12deg)',
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

export function YellowBullets() {
  const { classes } = useStyles();
  return (
    <div className={classes.outer}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> React <br /> components library
            </Title>
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than ever – Mantine includes
              more than 120 customizable components and hooks to cover you in any situation
            </Text>

          

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Source code
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}