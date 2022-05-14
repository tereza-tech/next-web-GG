import React, { useState } from 'react';
import { Image, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  iconboard: {
    width: 40,
    position: 'fixed',
    top: 143,
    right: 25,
  },
  socimage : {
    marginBottom: 18,
  }
}));

export function Logo() {
  return (
    <div style={{ width: 'calc(65px + 9vw)', marginTop: 26}}>
      <Image
        radius="md"
        src="/Logo.png"
        alt="Which Way logo"
      />
    </div>
  );
}

export function GiraffeLogo() {
  return (
    <div style={{ width: 148, paddingTop: 15, paddingLeft: 17}}>
      <Image
        radius="md"
        src="/Giraffe_logo.png"
        alt="Which Way logo"
        id="rtlGf"
      />
    </div>
  );
}

export function SocialIcons() {
  const { classes } = useStyles();
  return (
    <div className={classes.iconboard}>
      <Image
        className={classes.socimage}
        src="/icons/instag.png"
        alt="Instagram"
      />
      <Image
        className={classes.socimage}
        src="/icons/facebook.png"
        alt="Facebook"
      />
      <Image
        className={classes.socimage}
        src="/icons/f5.png"
        alt="Facebook"
      />
    </div>
  );
}
