import React from 'react';
import { createStyles, Button, ButtonProps, Group } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';

export function GoogleButton(props: ButtonProps<'button'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

const useStyles = createStyles((theme) => ({}));

  
export function YellowButton(props: ButtonProps<'button'>) {
  return (
    <Button className={classes.buton} onClick={() => redirectToLink('https://mantine.dev/')} {...props} />
  );
}

// Twitter button as anchor
export function GreyAnchorButton(props: ButtonProps<'a'>) {
  return <Button component="a" variant="default" {...props} />;
}

export function RowButtons() {
  const { classes } = useStyles();
  
  return (
    <div className={classes.area}>
    <Group position="center" className={classes.row}>
      <YellowButton>Naše Služby</YellowButton>
      <YellowButton>Ceníky</YellowButton>
      <YellowButton>Mořské pochoutky</YellowButton>
      <YellowButton>Další čudlík</YellowButton>
    </Group>
    </div>
  );
}

export function RowGreyButtons() {
  const { classes } = useStyles();
  
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GreyAnchorButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </GreyAnchorButton>
      <GreyAnchorButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </GreyAnchorButton>
      <GreyAnchorButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </GreyAnchorButton>
      <GreyAnchorButton href="https://twitter.com/mantinedev" target="_blank">
        Follow on Twitter
      </GreyAnchorButton>
    </Group>
  );
}