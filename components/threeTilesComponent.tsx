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

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 2,
    width: '66%',
  },

  categoryCard: {
    height: 160,
    position: 'relative',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    color: theme.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.xl,
    transition: 'background-size 300ms ease',
    filter: 'brightness(1.5) contrast(0.8)',

    '&:hover': {
      backgroundSize: '105%',
    },
  },

  categoryLabel: {
    color: theme.white,
    zIndex: 2,
    position: 'relative',
  },
}));

interface FaqWithHeaderProps {
  categories: { image: string; label: string }[];
}

export function ThreeTiles({ categories }: FaqWithHeaderProps) {
  const { classes } = useStyles();

  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" align="center" weight={700} className={classes.categoryLabel}>
        {category.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container className={classes.wrapper} size="lg">

      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {items}
      </SimpleGrid>
    </Container>
  );
}