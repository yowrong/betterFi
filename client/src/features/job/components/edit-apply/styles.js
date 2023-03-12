import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    root: {
        height: '100%',
        background: theme.colorScheme === 'dark' ? theme.black : theme.white,
    },

    btn: {
        margin: `0 ${theme.spacing.xs}`,
        border: `1px solid ${theme.colors.rose}`,
        color: theme.colors.rose,
    }
  }));
  