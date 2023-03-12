import { createStyles, rem, } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%'
    },

    content: {
        display: 'flex',
        flex: 1,
        width: '100% !important',
        margin: '0',
        alignItems: 'stretch',
        height: '100%',
        padding: rem(20),
    },

    timeline: {
        alignSelf: 'center'
    },

    mainContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },

    placeholder: {
        overflowY: 'scroll',
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        marginBottom: rem(20),
        width: '100%',
        flex: 1,
    },

    nextBtn: {
        // width: 'auto',
        // minWidth: rem(200),
        maxWidth: rem(400),
    },
}));