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
import { useStyles } from './styles';

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
        height={rem(75)}
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