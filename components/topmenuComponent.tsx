import React from 'react';
import { createStyles, Button, ButtonProps, Group } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  lineup: {
    marginTop: 12,
    marginBottom: 12,
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
  return <Button component="a" variant="default" sx={{ width: '130px', padding: 4, fontSize: '16px', paddingTop: 0 }} {...props} />;
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
    <Group position="center" sx={{ width: '100%', backgroundColor: '#2d2d2d', gap: 20}}>
      <h3 className={classes.lineup}>STĚHOVÁNÍ <span className={classes.yellow}>PRAHA</span></h3><h3 className={classes.lineup}> -- </h3><h3 className={classes.lineup}>STĚHOVÁNÍ STŘEDNÍ ČECHY</h3><h3 className={classes.lineup}> -- </h3><h3 className={classes.lineup}>STĚHOVÁNÍ <span className={classes.yellow}>PRAHA</span></h3>
    </Group>
  )
}

export function TopMenu() {
  return (
    <Group position="center" sx={{ width: '66%', padding: 15, paddingTop: 8, backgroundColor: '#2d2d2d', gap: 9 }}>
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