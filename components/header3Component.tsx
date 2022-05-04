import React, { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { Logo, GiraffeLogo } from './giraffeComponents';
import { Grid, Skeleton } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    width: '100%',
    paddingLeft: '0!important',
    paddingRight: '0!important',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,
    minWidth: 435,
    fontFamily: 'WhichWay',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 260,
    minWidth: 435,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  wholes: {
    width: '100%',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    width: '100%',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][1], 1)
          : theme.colors[theme.primaryColor][4],
      color: theme.colors.white[9],
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height="calc(60px + 6vw)" className={classes.wholes}>
      <Container className={classes.inner}>
      <Container my="md">
      <Grid>
        <Grid.Col xs={4}> <Logo /></Grid.Col>
        <Grid.Col xs={7}><Burger
          opened={opened}
          onClick={() => toggleOpened()}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group></Grid.Col>
        <Grid.Col xs={1}><GiraffeLogo /></Grid.Col>
      </Grid>
        </Container>
      </Container>
    </Header>
  );
}