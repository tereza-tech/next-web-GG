import React from 'react';
import { createStyles, Text, SimpleGrid, Container, ThemeIcon } from '@mantine/core';
import { Truck, Certificate, Coin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({

  container: {
    width: '90%',
    margin: 'auto',
  },
  
  feature: {
    position: 'relative',
    paddingTop: 16,
    paddingLeft: theme.spacing.xl,
  },


  content: {
    position: 'relative',
    zIndex: 2,
  },

  icon: {
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
  },

  icon2: {
    color: 'yellow',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  row: {
    maxWidth: 1222
  }
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: React.FC<React.ComponentProps<typeof Truck>>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>

      <div className={classes.content}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'orange', to: 'yellow' }}
      >
        <Icon size={36} className={classes.icon}  />
      </ThemeIcon>
        
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

function Feature2({ icon: Icon, title, description, className, ...others }: FeatureProps) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature, className)} {...others}>

      <div className={classes.content}>
      <ThemeIcon
        size={44}
        radius="md"
      >
        <Icon size={36} className={classes.icon2}  />
      </ThemeIcon>
        
        <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text color="dimmed" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: Truck,
    title: 'Free Worldwide shipping',
    description:
      'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
  },
  {
    icon: Certificate,
    title: 'Best Quality Product',
    description:
      'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
  },
  {
    icon: Coin,
    title: 'Very Affordable Pricing',
    description:
      'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
  },
];
const mockdata2 = [
  {
    icon: Truck,
    title: 'Worldwide',
    description:
      'As electricity builds up inside.',
  },
  {
    icon: Coin,
    title: 'Affordable',
    description:
      'Thought to have gone extinct.',
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={22} mb={50} size="lg">
      <SimpleGrid ml={20} cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}

export function FeaturesAsymmetrical2() {
  const items = mockdata2.map((item) => <Feature2 {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={0}>
        {items}
      </SimpleGrid>
    </Container>
  );
}