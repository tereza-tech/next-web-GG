import React from 'react';
import { Bookmark, Heart, Share } from 'tabler-icons-react';
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  createStyles,
} from '@mantine/core';
import { RowButtons } from './rowButtons'

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: '70%',
    height: '35vw',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
  rating: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: 'none',
  },

  title: {
    display: 'block',
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps {
  image: string;
  link: string;
  title: string;
  description: string;
  rating: string;
  author: {
    name: string;
    image: string;
  };
}

export function ArticleCard({
  className,
  /*image,
  link,
  title,
  description,
  rating,*/
  ...others
}: ArticleCardProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles();
  let image = 'image_2.png';
  let link = 'http://google.com';
  let title = 'Title';
  let description = 'Description';
  let rating = 1;
  let author = {
    name: "bc"
  }
  const theme = useMantineTheme();
  const linkProps = { href: link, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Card withBorder className={cx(classes.card, className)} {...others}>
      <Card.Section>
        <a {...linkProps}>
          <Image className={classes.footer} src={image} />
        </a>
        <RowButtons></RowButtons>
      </Card.Section>


      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group position="apart" className={classes.footer}>


        <Group spacing={8} mr={0}>
          <ActionIcon className={classes.action} style={{ color: theme.colors.red[6] }}>
            <Heart size={16} />
          </ActionIcon>
          <ActionIcon className={classes.action} style={{ color: theme.colors.yellow[7] }}>
            <Bookmark size={16} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <Share size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}