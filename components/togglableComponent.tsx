import React, { useState } from 'react';
import { Dialog, Group, Button, TextInput, Text } from '@mantine/core';
import {
  Paper,
  Textarea,
  ThemeIcon,
  SimpleGrid,
  createStyles,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons/ContactIcons';
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
      backgroundColor: 'yellow',
      height: 48,
      color: 'black', 
      borderRadius: '14px 0 0 14px'
    },
    contacts: {
      boxSizing: 'border-box',
      top: 'calc(50% - 170px)',
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

    dialog: {
    },
    toggler: {
      padding: 0,
      width: 130,
      paddingRight: 0,
      border: 'none',
      backgroundColor: '#00000000',
      bottom: '246px',
    },
  };
});


export function Togglable() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Dialog
        opened={!opened}
        className={classes.toggler}
      >
        <Button
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
      </Button>
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
    </>
  );
}