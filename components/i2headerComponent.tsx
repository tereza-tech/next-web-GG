import React, { useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Button, Text, Image } from '@mantine/core';
import { FacebookIcon } from './socialIcons';
import { useBooleanToggle } from '@mantine/hooks';
import { Logo, GiraffeLogo, SocialIcons } from './giraffeComponents';
import image2 from '../public/abstract.jpg';
import phone from '../public/icons/phone.png';
import mail from '../public/icons/email.png';


const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: '0',
    maxWidth: 1060,
  },

  lefter: {
    position: 'relative',
    left: '-61px',
    display: 'flex',
  },

  numbers: {    
    marginLeft: 75,
    paddingTop: 45,
    fontSize: 16,
    fontFamily: 'WhichWay',
    color: '#fede00',
  },

  ctext: {
display: 'inline-block',

  },

clogo: {
  display: 'inline-block',
  width: 45,
  height: 45,
  marginBottom: 1,
  marginRight: 16
},

  phonen: {
    marginTop: 0,
    marginBottom: 0,
  },

  outer: {
      width: '135%',
      border: 'none',
      height: '125px',
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
      <Container className={classes.header}>
        <span className={classes.lefter}><Logo></Logo><span className={classes.numbers}><Image className={classes.clogo} alt="phone" src={phone.src}></Image><span className={classes.ctext}><h3 className={classes.phonen}>+420 777 032 765</h3><h3 className={classes.phonen}>+420 777 032 763</h3></span></span><span className={classes.numbers}><Image className={classes.clogo} alt="phone" src={mail.src}></Image><span className={classes.phonen}>info@2ww.cz</span></span></span>
        <SocialIcons></SocialIcons>
        <GiraffeLogo></GiraffeLogo>
      </Container>
      
  );
}