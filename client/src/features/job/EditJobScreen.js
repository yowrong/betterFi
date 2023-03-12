import { useState } from 'react';
import { Container, Button, createStyles, rem, } from '@mantine/core';
import BetterTimeline from './components/timeline/timeline';

import NavBar from "../../components/navbar";
import { editForms } from './constants/edit-forms.js';

const useStyles = createStyles((theme) => ({
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
        padding: rem(20),
        marginBottom: rem(20),
        width: '100%',
        flex: 1,
    },

    nextBtn: {
        width: 'auto',
        minWidth: rem(200),
        maxWidth: rem(200),
    },
}));

const EditJobScreen = () => {
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState(3);
    const { classes, cx } = useStyles();

    const onTimelinePressed = (index) => {
        if (index <= active) {
            setCurrent(index);
        }
    }
    
    const renderEditForm = (index) => {
        return editForms[index];
    }

    return (
        <div className={classes.root}>
            <NavBar isActive="/new-job" />
            <Container className={classes.content} fluid>
                <Container className={classes.timeline} fluid>
                    <BetterTimeline
                        active={active}
                        current={current}
                        onPressed={onTimelinePressed}
                        className={classes.timeline}
                    />
                </Container>
                <Container className={classes.mainContent} fluid>
                    <Container className={classes.placeholder} fluid>
                        {renderEditForm(current)}
                    </Container>
                    <Button 
                        variant="gradient"
                        gradient={{ from: '#FC466B', to: '#3F5EFB' }}
                        className={classes.nextBtn}>
                            NEXT
                    </Button>
                </Container>
            </Container>
        </div>
    )
}

export default EditJobScreen;