import { createStyles, rem, useMantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme, { floating }) => ({
    root: {

    },

    btn: {
        minWidth: rem(200),
        maxWidth: rem(400)
    }
  }));

export const toastTheme = (theme) => ({
    root: {
        background: 'rgb(252,70,107)',
        background: 'linear-gradient(135deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)',
    },

    '&::before': { backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white },

    title: {
        color: theme.colorScheme === 'dark' ? theme.black : theme.white,
        fontWeight: 600,
        fontSize: rem(18)
    },

    description: {
        color: theme.colorScheme === 'dark' ? theme.black : theme.white,
    },

    loading: {
        color: theme.colorScheme === 'dark' ? theme.black : theme.white,
    }
    
})