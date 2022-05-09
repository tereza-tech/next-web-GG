import React from 'react';
import {
  createStyles,
  Title,
  Container,
  Text,
  UnstyledButton,
  Overlay,
  SimpleGrid,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons/ContactIcons';
import image from '../public/image_2.png'

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.xl * 2,
    width: '74%',
  },

  header: {
    height: '100%',
    boxSizing: 'border-box',
    backgroundImage: `url(${image.src})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    position: 'relative',
    padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl * 2}px`,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    '@media (max-width: 1080px)': {
      height: 'auto',
      flexDirection: 'column-reverse',
      alignItems: 'initial',
      padding: theme.spacing.xl,
    },
  },

}));

interface FaqWithHeaderProps {
  categories: { image: string; label: string }[];
}

export function FaqWithHeader() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size="lg">
      <div className={classes.header}>
       
      </div>

      
    </Container>
  );
}