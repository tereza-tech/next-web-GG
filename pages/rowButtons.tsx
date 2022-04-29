import React from 'react';
import { createStyles, Button, ButtonProps, Group } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';

const useStyles = createStyles((theme) => ({
  area: {
    position: 'absolute',
    width: '100%',
  },
  row: {
    position: 'relative',
    bottom: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 100,
    padding: 10,
  },
  button: {
    backgroundColor: theme.colors.yellow[4],
    color: 'white',
    width: '30vw',
    maxWidth: '185px',
    marginBottom: '-4px',
    height: '6vw',
    maxHeight: '38.5px',
    fontSize: '95%',
    '&:hover': {
      backgroundColor: theme.colors.yellow[7],
    },
  },
}));

export function YellowButton(props: ButtonProps<'button'>) {
  const { classes, cx } = useStyles();
  return (
    <Button onClick={() => redirectToLink('https://mantine.dev/')} {...props} />
  );
}

export function RowButtons() {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.area}>
    <Group position="center" className={classes.row}>
      <YellowButton className={classes.button}>Naše Služby</YellowButton>
      <YellowButton className={classes.button}>Ceníky</YellowButton>
      <YellowButton className={classes.button}>Mořské pochoutky</YellowButton>
      <YellowButton className={classes.button}>Další čudlík</YellowButton>
    </Group>
    </div>
  );
}