import React from 'react';
import { createStyles, Button, ButtonProps, Group } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  lineup: {
    marginTop: 7,
    marginBottom: 8,
  },

  yellow: {
    color: 'yellow',
  },
}));

export function YellowButton(props: ButtonProps<'button'>) {
  return (
    <Button sx={(theme) => ({
        backgroundColor: theme.colors.yellow[4],
        color: 'white',
        height: 50,
        width: '140px',
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
  return <Button component="a" variant="default" sx={{ width: '145px', padding: 4, fontSize: '16px', paddingTop: 0, height: '39px' }} {...props} />;
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
export function BannerLine() {
  const { classes } = useStyles();
  return (
    <Group position="center" sx={{ width: '100%', height: 44, paddingTop: 0, backgroundColor: '#2d2d2d', gap: 20}}>
      <h4 className={classes.lineup}><span className={classes.yellow}>STĚHOVÁNÍ </span>PRAHA</h4><h4 className={classes.lineup}> -- </h4><h4 className={classes.lineup}>STĚHOVÁNÍ STŘEDNÍ ČECHY</h4><h4 className={classes.lineup}> -- </h4><h4 className={classes.lineup}><span className={classes.yellow}>STĚHOVÁNÍ </span>PRAHA</h4>
    </Group>
  )
}

export function TopMenu() {
  return (
    <Group position="center" sx={{ width: '100%', padding: 15, paddingTop: 8, gap: 9 }}>
      <GreyAnchorButton>
        O nás
      </GreyAnchorButton>
      <GreyAnchorButton>
        Ceník
      </GreyAnchorButton>
      <GreyAnchorButton>
        Služby
      </GreyAnchorButton>
      <GreyAnchorButton>
        Galerie
      </GreyAnchorButton>
      <GreyAnchorButton>
        Reference
      </GreyAnchorButton>
      <GreyAnchorButton>
        Kontakt
      </GreyAnchorButton>
      <GreyAnchorButton>
        Poptávka
      </GreyAnchorButton>
    </Group>
  )
}