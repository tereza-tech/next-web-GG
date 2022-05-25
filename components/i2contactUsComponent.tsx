import React from 'react';
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import { ContactIconsList } from './ContactIcons/ContactIcons';
import { mockSubmit, FormData } from '../api/airtable';

let form: FormData = {
  "email": '',
  "name": '',
  "message": '',
  "phone": '',
  "callback": ''
}

interface BothContacts extends FormData {
  mailaphone: void;
}
 

const useStyles = createStyles((theme) => ({
  root: {
   
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#141517',
    borderRadius: '16px',
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 400,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    padding: theme.spacing.xl,
    paddingTop: 0,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  fields: {
    marginTop: 28,
  },

  input: {
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function ContactUs() {
  const { classes } = useStyles();

  function Demo() {
    const form = useForm<FormData>({
      initialValues: {
        email: '',
        name: '',
        message: '',
        phone: '',
        callback: ''
      },
      validate: {
        name: (value) => (value.length < 4 ? 'Prosím uveďte Vaše jméno.' : null),
        message: (value) => (value.length < 2 ? 'Prosíme vyplňte text zprávy.' : null),
      },
    });
  }

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>
        </div>
        <form>
       {/* <form className={classes.form} onSubmit={form.onSubmit((values) => console.log(values))}>*/}
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
      </SimpleGrid>
    </div>
  );
}