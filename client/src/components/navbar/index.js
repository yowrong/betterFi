import { NavLink } from 'react-router-dom';
import {
  createStyles,
  Header,
  Container,
  Group,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { ReactComponent as Logo } from '../../assets/logo_text.svg';
import { ReactComponent as LogoDark } from '../../assets/logo_text_dark.svg';
import { routes } from '../../config/routes.js';

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
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
    lineHeight: 1,
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

export const NavBar = ({ isActive = '/', }) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const items = routes.map((link) => (
    <NavLink
        key={link.link}
        to={link.link}
        className={cx(classes.link, { [classes.linkActive]: isActive === link.link })}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <Header 
        height={HEADER_HEIGHT}
        className={classes.root}
    >
      <Container className={classes.header} fluid>
        {theme.colorScheme === 'dark' 
            ? <LogoDark height={rem(40)} />
            : <Logo height={rem(40)} />}
        <Group spacing={10} className={classes.links}>
          {items}
        </Group>
      </Container>
    </Header>
  );
}

export default NavBar;