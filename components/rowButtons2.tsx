import React from 'react';
import { Button, ButtonProps, Group } from '@mantine/core';

export function YellowButton(props: ButtonProps<'button'>) {
  return (
    <Button sx={(theme) => ({
        backgroundColor: theme.colors.yellow[4],
        color: 'white',
        height: 50,
        width: '180px',
        fontFamily: 'WhichWay',
        fontSize: '9px',
        fontWeight: '100',
        '&:hover': {
          backgroundColor: theme.fn.darken('#4267B2', 0.1),
        },
      })} onClick={() => console.log(/*redirectToLink(*/'https://mantine.dev/')} {...props} />
  );
}

// Twitter button as anchor
export function GreyAnchorButton(props: ButtonProps<'a'>) {
  return <Button component="a" variant="default" {...props} />;
}

export function RowButtons() {
  return (
    <Group position="center" sx={{ padding: 18 }}>
      <YellowButton>Naše Služby</YellowButton>
      <YellowButton>Ceník</YellowButton>
      <YellowButton>Reference</YellowButton>
      <YellowButton>O firmě</YellowButton>
      <YellowButton>Kontakty</YellowButton>
    </Group>
  );
}

export function RowGreyButtons() {
  return (
    <Group position="center" sx={{ padding: 15, paddingTop: 0 }}>
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
  )
}