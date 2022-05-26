import React, { useState } from 'react';
import { Dialog, Group, Button, TextInput, Text, CSSObject, MediaQuery, Container } from '@mantine/core';
import {
  Paper,
  Textarea,
  ThemeIcon,
  SimpleGrid,
  createStyles,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import { Phone } from 'tabler-icons-react';

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
    button: {
      backgroundColor: '#fede00',
      height: 48,
      position: 'relative',
      bottom: 280,
      color: 'black', 
      borderRadius: '14px 0 0 14px',
      fontWeight: 600,
    },
    contacts: {
      boxSizing: 'border-box',
      top: 'calc(10%)',
      borderRadius: theme.radius.lg - 2,
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 215px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `WhichWay`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },

    dialog: {
    },
    toggler: {

      padding: 0,
      width: 130,
      paddingRight: 0,
      border: 'none',
      backgroundColor: '#00000000',
    },
  };
});


export function Togglable() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const toggl: CSSObject = {
    display: 'none'
  }

  const cont: CSSObject = {
      position: 'absolute',
      top: 0,
      right: 0
  }
  const smbtn : CSSObject = {
      position: 'absolute',
      width: 0,
      height: 0,
      display: 'none'

  }


  return (
    <MediaQuery smallerThan="md" styles={toggl}>
        <Container styles={cont}>
      <Dialog
        opened={!opened}
        className={classes.toggler}
      >
        <MediaQuery smallerThan="md" styles={smbtn}><Button
        leftIcon={<Phone size={20} />}
        radius="xl"
        size="md"
        className={classes.button}
        styles={{
          rightIcon: { marginLeft: 22 },
        }}    
        onClick={() => setOpened((o) => !o)}
      >
       Kontakt
      </Button></MediaQuery>
      </Dialog>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="md"
        radius="md"
        className={classes.dialog}
      >
        <ContactIconsList variant="white"></ContactIconsList>
        <Group align="flex-end">

        </Group>
      </Dialog>
      </Container>
    </MediaQuery>
  );
}