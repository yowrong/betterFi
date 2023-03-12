import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    root: {
        overflowY: 'scroll',
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        height: rem(600),
        padding: rem(20),
    },

    card: {
      height: rem(300),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  
    title: {
      fontWeight: 900,
      color: theme.white,
      lineHeight: 1.2,
      fontSize: rem(32),
      marginTop: theme.spacing.xs,
    },
  
    category: {
      color: theme.white,
      opacity: 0.7,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  }));