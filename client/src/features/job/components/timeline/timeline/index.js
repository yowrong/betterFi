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
  },

  description: {
    fontSize: theme.fontSizes.xs
  }
}));

const BetterTimeline = (active) => {
  const theme = useTheme();
  const { classes, cx } = useStyles();

  const renderTimeline = (items) => {
    return items.map((i) => {
      return (
        <Timeline.Item 
          className={classes.section}
          key={i.title}
          title={i.title}
          lineActive
          color={theme.colors.primary}
          align='right'
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
      color={theme.colors.primary}
      align='right'
    >
      {renderTimeline(timelineConstants)}
    </ Timeline>
  );
}

export default BetterTimeline;