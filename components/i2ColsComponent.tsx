import React from 'react';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, createStyles } from '@mantine/core';
import bg from '../public/image_10.jpeg';

const useStyles = createStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: 0,
    },
    cont: {
      maxWidth: 1080,
      width: 1200,
      marginTop: 0,
    },
    g1: {
      height: 130,
      marginTop: 18,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
}));

const PRIMARY_COL_HEIGHT = 300;

export function LeadGrid() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md" className={classes.cont}>
      <SimpleGrid cols={2} spacing="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Grid gutter="md">
          <Grid.Col  className={classes.g1}>
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={0} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dapibus fermentum ipsum.
          </Grid.Col>
        </Grid>
        Quisque tincidunt scelerisque libero. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Sed ac dolor sit amet purus malesuada congue. Duis risus.<br /><br /> Aenean fermentum risus id tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. In convallis. Etiam dictum tincidunt diam.
        Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Etiam egestas wisi a erat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </SimpleGrid>
    </Container>
  );
}