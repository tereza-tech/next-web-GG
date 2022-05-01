import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Icon, Button, Text, Image } from '@mantine/core';
import { FacebookIcon } from './socialIcons';
import { useBooleanToggle } from '@mantine/hooks';
import { Logo, GiraffeLogo, SocialIcons } from './giraffeComponents';


const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'flex-start',
  },

  outer: {
      width: '100%',
      border: 'none',
  },

  links: {
    position: 'relative',
    right: '-70px',
    width: 260,
    paddingTop: 11,
    minWidth: 460,
    fontFamily: 'WhichWay',
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
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
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}


export function HeaderSimple({ links }: HeaderSimpleProps) {
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
    <Container height={128} mb={5} className={classes.outer}>
      <Container className={classes.header}>
        <Logo></Logo>
        <SocialIcons></SocialIcons>
        <GiraffeLogo></GiraffeLogo>
      </Container>
    </Container>
  );
}