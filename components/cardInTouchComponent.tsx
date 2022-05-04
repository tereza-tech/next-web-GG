import React from 'react';
import {
  ActionIcon,
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Title
} from '@mantine/core';
import image from '../public/comics_couple.png';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import { ContactIconsList } from './ContactIcons/ContactIcons';

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      marginTop: theme.spacing.xl * 2,
      width: '118%',
      position: 'relative',
      left: '-3%',
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

    form: {
      boxSizing: 'border-box',
      flex: 2,
      padding: theme.spacing.xl,
      borderLeft: 0,
      paddingRight: 'auto',
      paddingTop: theme.spacing.xl * 3,
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
      flex: 1,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },
    outer: {
      display: 'flex',
      flex: 3,
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
    description: {
      color: theme.colors[theme.primaryColor][0],
      maxWidth: 300,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    content: {
      flex: 4,
      paddingLeft: '16%',
      [theme.fn.smallerThan('xs')]: {
        flex: 2,
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
      backgroundColor: 'yellow',
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});
const social = [BrandTwitter, BrandYoutube, BrandInstagram];
export function CardInTouch() {
  const { classes } = useStyles();
  
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28}  variant="transparent">
      <Icon size={22} />
    </ActionIcon>
  ));
  

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
      <div className={classes.outer}>
          <div className={classes.content}>

          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>

          </div></div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text size="lg" weight={700} className={classes.title}>
            Leave the info
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your phone num." placeholder="+420 ...." required />
            </SimpleGrid>

            <TextInput mt="md" label="Time to call" placeholder="11:30-11:45" required />
<Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />
            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}