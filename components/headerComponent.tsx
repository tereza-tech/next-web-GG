import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Button, Text, Image } from '@mantine/core';
import { FacebookIcon } from './socialIcons';
import { useBooleanToggle } from '@mantine/hooks';
import { Logo, GiraffeLogo, SocialIcons } from './giraffeComponents';
import image2 from '../public/abstract.jpg';
import image from '../public/chess.png';


const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    alignItems: 'flex-start',
    paddingLeft: '0',
  },

  lefter: {
    position: 'relative',
    left: '-61px',
    display: 'flex',
  },

  numbers: {    
    marginLeft: 35,
    paddingTop: 45,
  },

  phonen: {
    marginTop: 0,
    marginBottom: 0,
  },

  outer: {
      width: '100%',
      border: 'none',
      height: '180px',
      paddingLeft: '0',
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

  lineup: {
    marginTop: 20,
    marginBottom: 70,
  },

  yellow: {
    color: 'yellow'
  },

  hidden: {
    display: 'none',
    position: 'absolute',
    width: 0,
    height: 0,
  },

  corner: {
    position: 'absolute',
    width: 1100,
    height: 1100,
    top: '-640px',
    right: '-500px',
    transform: 'rotate(220deg)',
    opacity: 0.2,
  },
  image: {
    display: 'none',
    position: 'absolute',
  }
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}


export function HeaderSimpler({ links }: HeaderSimpleProps) {
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
    <Container mt={30} mb={10} className={classes.outer}>
      <Container className={classes.header}>
        <span className={classes.lefter}><Logo></Logo><span className={classes.numbers}><h2 className={classes.phonen}>+420 777 253 732</h2><h2 className={classes.phonen}>+420 777 253 732</h2></span></span>
        <SocialIcons></SocialIcons>
        <GiraffeLogo></GiraffeLogo>
        <Image src={image.src} className={classes.hidden} />
        <Image className={classes.corner} src={image2.src} />
      </Container>
      
    </Container>
  );
}