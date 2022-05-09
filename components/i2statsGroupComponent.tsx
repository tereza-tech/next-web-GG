import React from 'react';
import { createStyles, Text , Avatar, Group, Title} from '@mantine/core';
import { PhoneCall, At } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  root: {
      width: '72%',
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

root2: {
  width: '116%',
  display: 'flex',
  position: 'relative',
  left: '-7%',
  backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    theme.colors[theme.primaryColor][7]
  } 100%)`,
  padding: theme.spacing.xl * 1.5,
  borderRadius: theme.radius.md,

  [theme.fn.smallerThan('sm')]: {
    flexDirection: 'column',
  },
},

  title: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  ourteam: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 400,
    fontSize: theme.fontSizes.xs * 2,
    width: '94%',
    margin: 'auto',
    marginTop: 70,
  },

  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid #${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

}));

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}

interface UserInfoIconsProps {
  data: {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  }[];
}

export function StatsGroup({ data }: StatsGroupProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}

export function AuthorsGroup({ data }: StatsGroupProps) {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}

export function UserInfoIcons({ data }: UserInfoIconsProps) {
  const { classes } = useStyles();
  const authors = data.map((author) => (
      <Group noWrap key={author.name} className={classes.stat}>
        <Avatar src={author.avatar} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: 'uppercase' }} weight={700} color="dimmed">
            {author.title}
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {author.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <At size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {author.email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <PhoneCall size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {author.phone}
            </Text>
          </Group>
        </div>
      </Group>
  ));
  return (
    <div>
    <Title className={classes.ourteam}>Our team</Title>
    <div className={classes.root2}>{authors}</div>
    </div>
  );
}