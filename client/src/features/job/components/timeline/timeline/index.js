import { useTheme } from '@emotion/react';
import { Timeline, Text, createStyles } from '@mantine/core';
import timelineConstants from './constant';

const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: 250,
  },

  section: {
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',

    '&:hover, &:active': {

      '.mantine-Timeline-itemTitle': {
        fontWeight: 600,
        color: 'red'
      },
    },
  },

  description: {
    fontSize: theme.fontSizes.xs,
  },

  done: {
    '.mantine-Timeline-itemBullet': {
      background: 'red'
    },

    '.mantine-Timeline-itemTitle': {
      fontWeight: 600,
    }
  },

  active: {
    '.mantine-Timeline-itemBullet': {
      background: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.white,
    },

    '.mantine-Timeline-itemTitle': {
      fontWeight: 600,
      color: 'red',
    }
  }
}));

const BetterTimeline = ({ active, current, onPressed }) => {
  const { classes, cx } = useStyles();

  const renderTimeline = (items) => {
    return items.map((i, index) => {
      return (
        <Timeline.Item 
          className={cx(classes.section, { 
            [classes.done]: index <= active,
            [classes.active]: current === index, })}
          key={i.title}
          lineVariant={index < active ? 'solid' : 'dashed' }
          title={
            <Text 
              className={classes.title}
              size="sm">
                {i.title}
            </Text>
          }
          color='red'
          align='right'
          onClick={() => {onPressed(index)}}
        >
          <Text color="dimmed" size="xs">{i.description}</Text>
        </Timeline.Item>
      )
    })
  }


  return (
    <Timeline 
      className={classes.root}
      active={active}
      bulletSize={16}
      lineWidth={2}
      align='right'
    >
      {renderTimeline(timelineConstants)}
    </ Timeline>
  );
}

export default BetterTimeline;