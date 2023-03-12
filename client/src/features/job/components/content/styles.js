import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    root: {
        background: theme.colorScheme === 'dark' 
            ? 'rgba(211, 211, 211, 0.1)'
            : 'rgba(211, 211, 211, 0.2)',
        padding: theme.spacing.md,
        borderRadius: theme.radius.lg,
        height: '100%',
    },
  }));
  