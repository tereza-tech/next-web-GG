import React from 'react';
import {
  createStyles,
  Text,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Title,
  CSSObject, MediaQuery, Container
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { BrandTwitter, BrandYoutube, BrandInstagram, BrandFacebook } from 'tabler-icons-react';
import { ContactIconsList } from './ContactIcons';
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
    backgroundColor: '#fede00',
    color: 'black'
  },
}));

const social = [BrandInstagram, BrandFacebook];

export function ContactUs() {
  const { classes } = useStyles();

const smWWQuery: CSSObject = {
  display: 'none'
}

const lgWWQuery: CSSObject = {
  display: 'none'
}

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
          <Title className={classes.title}>Poptávka</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Pošlete nám nezávaznou poptávku, my Vás do 24 hodin kontaktujeme nazpět.
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>
          <MediaQuery smallerThan="md" styles={smWWQuery}>
          <Container>
          <br /><br />
          <br /><br />          <Title style={{color: '#fede00'}} order={4}>Which Way? This Way!</Title></Container></MediaQuery>
        </div>
        <form>
       {/* <form className={classes.form} onSubmit={form.onSubmit((values) => console.log(values))}>*/}
        

          <div className={classes.fields}>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              <TextInput label="Celé jméno" placeholder="Jmeéno Příjmenní" />
              <TextInput label="Telefonní číslo" placeholder="+420 " required />
            </SimpleGrid>
            <TextInput mt="md" label="E-mail" placeholder="" required />
            <TextInput mt="md" label="Máte preferovaný čas, kdy Vás kontaktovat?" placeholder="" />
<Textarea
              mt="md"
              label="Prosíme specifikujte zde vaše požadavky:"
              placeholder=""
              minRows={3}
              required
            />
            <Group position="right" mt="md">
              <Button type="submit" className={classes.control}>
                Odeslat
              </Button>
            </Group>
          </div>
        </form>
        <MediaQuery largerThan="xs" styles={lgWWQuery}>
          <Container><Title style={{color: '#fede00'}} order={4}>Which Way? This Way!</Title></Container></MediaQuery>
       
      </SimpleGrid>
    </div>
  );
}