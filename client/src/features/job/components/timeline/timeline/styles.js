import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
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
        background: theme.colorScheme === 'dark' ? theme.colors.dark : theme.colors.white,
      },
  
      '.mantine-Timeline-itemTitle': {
        fontWeight: 600,
      }
    },
  
    active: {
      '.mantine-Timeline-itemBullet': {
        background: 'red'
      },
  
      '.mantine-Timeline-itemTitle': {
        fontWeight: 600,
        color: 'red',
      }
    }
  }));
  