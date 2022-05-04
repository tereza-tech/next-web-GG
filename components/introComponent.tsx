import React from 'react';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  List,
  Image,
  Title,
  SimpleGrid,
  ThemeIcon,
  createStyles,
} from '@mantine/core';
  import { Check } from 'tabler-icons-react';
  import image from '../public/obrys.png';
  import image2 from '../public/comics_sofa.png';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    colum: {display: 'flex',},
    
    control: {
        transform: 'scale(1.16)',
        marginRight: 20,
        [theme.fn.smallerThan('xs')]: {
          flex: 2,
        },
      },
    
      controlwh: {
        color: 'black',
        transform: 'scale(1.16)',
        marginRight: 20,
        [theme.fn.smallerThan('xs')]: {
          flex: 2,
        },
      },
    
      twoImages: {
        flex: 2,
        position: 'relative',
        opacity: '0.92',
        top: 40,
        left: '-30px',
        transform: 'scale(0.9, 0.9)'
      },
      image: {
        width: '47%',
        position: 'relative',
        [theme.fn.smallerThan('md')]: {
          display: 'none',
        },
      },
      image2: {
        width: '514px',
        height: 'auto',
        position: 'absolute',
        bottom: '-17px',
        right: '-142px',
        [theme.fn.smallerThan('md')]: {
          display: 'none',
        },
    },
    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      borderLeft: 0,
      paddingRight: 'auto',
      paddingLeft: 'auto',

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
        marginBottom: theme.spacing.xl * 4,
      },
    
      content: {
        maxWidth: 480,
        marginRight: theme.spacing.sm,
    
        [theme.fn.smallerThan('md')]: {
          maxWidth: '100%',
          marginRight: 0,
        },
      },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      border: '1px solid transparent',
      padding: '42px',
      flex: 1,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },
  };
});

export function Intro() {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
      <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Stěhujeme
            </Title>
            <Text color="dimmed" mt="md">
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
</div>
<div className={classes.twoImages}>
          <Image src={image.src} className={classes.image} />
            <Image id="mover" src={image2.src} className={classes.image2}/>
        </div>
      </div>
    </Paper>
  );
}