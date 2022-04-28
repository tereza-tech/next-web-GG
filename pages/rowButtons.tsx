import React from 'react';
import { Button, ButtonProps, Group } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';

export function GoogleButton(props: ButtonProps<'button'>) {
  return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
}

export function YellowButton(props: ButtonProps<'button'>) {
  return (
    <Button sx={(theme) => ({
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
      })} onClick={() => redirectToLink('https://mantine.dev/')} {...props} />
  );
}

// Twitter button as anchor
export function GreyAnchorButton(props: ButtonProps<'a'>) {
  return <Button component="a" variant="default" {...props} />;
}

export function RowButtons() {
  return (
    <Group position="center" sx={{ padding: 10 }}>
      <YellowButton>Naše Služby</YellowButton>
      <YellowButton>Ceníky</YellowButton>
      <YellowButton>Mořské pochoutky</YellowButton>
      <YellowButton>Další čudlík</YellowButton>
    </Group>
  );
}

export function RowGreyButtons() {
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