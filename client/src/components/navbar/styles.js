import { createStyles, rem } from "@mantine/core";

const HEADER_HEIGHT = rem(75);

export const useStyles = createStyles((theme) => ({
    root: {
      position: 'sticky',
      zIndex: 1,
    },
  
    dropdown: {
      position: 'sticky',
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopWidth: 0,
      overflow: 'hidden',
  
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      boxShadow: theme.shadows.sm,
    },
  
    links: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    link: {
      display: 'block',
      padding: `${rem(8)} ${rem(12)}`,
      borderRadius: theme.radius.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
      
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textDecoration: 'none',
      },
  
      [theme.fn.smallerThan('sm')]: {
        borderRadius: 0,
        padding: theme.spacing.md,
      },
    },
  
    linkActive: {
      '&, &:hover': {
        background: theme.fn.linearGradient(100, theme.colors.rose, theme.colors.blue),
        color: theme.colorScheme === 'dark' ? theme.colors.dark : theme.colors.white,
        fontWeight: 600,
        fontSize: theme.fontSizes.md
      },
    },
  }));
  