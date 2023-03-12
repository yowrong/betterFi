import { useState } from 'react';
import { Container, Button, Grid, createStyles, rem, } from '@mantine/core';
import BetterTimeline from './components/timeline/timeline';

import NavBar from "../../components/navbar";

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },

    content: {
        display: 'flex',
        flex: 1,
        width: '100%',
        margin: '0',
        padding: rem(20),
        alignItems: 'center',
    },

    mainContent: {
        flex: 1,
    }




}));

const EditJobScreen = () => {
    const [active, setActive] = useState(1);
    const { classes, cx } = useStyles();

    return (
        <div className={classes.root}>
            <NavBar isActive="/new-job" />
            <Container className={classes.content}>
                <BetterTimeline active={active}/>
                <Container className={classes.mainContent} fluid/>
                <Container>
                    <Button fullWidth>NEXT</Button>
                </Container>
            </Container>
        </div>
    )
}

export default EditJobScreen;