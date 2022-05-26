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
  CSSObject, MediaQuery, Container, Center
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
    marginTop: '3%',
    backgroundColor: '#141517',
    borderRadius: '16px',
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: '35px 15px',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: 0,
      backgroundColor: '#101010',
    },
  },

  title: {
    fontFamily: 'WhichWay',
    color: '#fede00',
    lineHeight: 1,
    fontSize: '2.26vw',
    margin: '5% 0 16% 0',
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      fontSize: '3.52vw',
      marginBottom: '8%'
    },
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 400,
    marginBottom: 30,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
      marginBottom: 0
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
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: 0
    },
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
  display: 'none',
  height: 0
}

const lgWWQuery: CSSObject = {
  display: 'none',
  height: 0
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
    <Center style={{width: '100%'}}>
    <Center className={classes.wrapper}>
      <Center>
      <SimpleGrid style={{width: '95%'}} cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Poptávka</Title>
          <Text className={classes.description} mt="sm">
            Pošlete nám nezávaznou poptávku, my Vás do 24 hodin kontaktujeme nazpět.
          </Text>
          
          <MediaQuery smallerThan="md" styles={smWWQuery}>
            <Container>
          <ContactIconsList variant="white" />
          <Group mt="xl">{icons}</Group>
          <Container>
          <br />
          <br />          <Title style={{color: '#fede00'}} order={4}>Which Way? This Way!</Title></Container></Container></MediaQuery>
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
          <Container style={{width: '140%', position: 'relative', right: '20%', top: '-36px', transform: 'scale(0.85)'}}><ContactIconsList variant="white" />
          <Group mt="xl">{icons}</Group>
          <Container><Title style={{color: '#fede00', position: 'relative', top: 32,}} order={4}>Which Way? This Way!</Title></Container></Container></MediaQuery>
       
      </SimpleGrid>
      </Center>
    </Center>
    </Center>
  );
}