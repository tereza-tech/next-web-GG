import React from 'react';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Icon,
  Button,
  Group,
  SimpleGrid,
  createStyles,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons/ContactIcons';
import { Phone } from 'tabler-icons-react';
import bg from './bg.svg';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  let toggle: boolean = false;
  

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
    button: {
      display: toggle ? 'none' : 'block',
      backgroundColor: 'yellow',
      paddingRight: 14,
      height: 48,
      color: 'black', 
      borderRadius: '14px 0 0 14px',
      backgroundColor: 'yellow',
      position: 'fixed',
      right: 0,
      marginTop: '9%',
    },
    contacts: {
      display: toggle ? 'block' : 'none',
      boxSizing: 'border-box',
      position: 'fixed',
      right: 0,
      top: 'calc(50% - 170px)',
      borderRadius: theme.radius.lg - 2,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 265px',

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

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export function ContactUs() {
  const { classes } = useStyles();

  return (
    <Paper shadow="md" radius="lg">
      <Button
        leftIcon={<Phone size={20} />}
        radius="xl"
        size="md"
        className={classes.button}
        styles={{
          rightIcon: { marginLeft: 22 },
        }}    
        onClick={() => toggleSwitch()}
      >
       Kontakt
      </Button>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
            Contact information
          </Text>

          <ContactIconsList variant="white" />
        </div>
      </div>
    </Paper>
  );
}