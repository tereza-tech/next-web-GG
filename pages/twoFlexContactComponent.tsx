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
  ActionIcon
} from '@mantine/core';
import { Check } from 'tabler-icons-react';
import image from '../public/comics_couple.png';
import { BrandTwitter, BrandYoutube, BrandInstagram } from 'tabler-icons-react';
import { ContactIconsList } from './ContactIcons/ContactIcons';

const useStyles = createStyles((theme) => ({
  outer: {
    display: 'flex',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    flex: 4,
    paddingLeft: '16%',
    [theme.fn.smallerThan('xs')]: {
      flex: 2,
    },
  },

  image: {
    flex: 3,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },


}));

const social = [BrandTwitter, BrandYoutube, BrandInstagram];

export function TwoFlexContact() {
  const { classes } = useStyles();

  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} />
    </ActionIcon>
  ));
  
  return (
    <div>
      <Container>
        <div className={classes.outer}>
          <div className={classes.content}>

          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>

          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}