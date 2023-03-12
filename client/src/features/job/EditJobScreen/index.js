import { useState } from 'react';
import { Container, Button, rem } from '@mantine/core';
import ConfettiExplosion from 'react-confetti-explosion';

import BetterTimeline from '../components/timeline/timeline';
import NavBar from "../../../components/navbar";
import Content from '../components/content';
import { useStyles } from './styles';
import { notifications } from '@mantine/notifications';

const EditJobScreen = () => {
    const [data, setData] = useState({});
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState(0);
    const [allDone, setAllDone] = useState(false);
    const { classes } = useStyles();

    const onTimelinePressed = (index) => {
        if (index <= active) {
            setCurrent(index);
        }
    }

    const onInputChanged = (newData) => {
        setData({ ...data, ...newData });
    }

    const onFormNext = (newData) => {
        // TODO: Validate current form
        if (active < 5) {
            setActive(active + 1);
            setCurrent(active + 1);
        }
        if (active == 5 && !allDone) {
            setAllDone(true);
            notifications.show({
                title: 'Congratulations!',
                message: "You're one step closer to reaching your dream job.",
                radius: 'md',
                styles: (theme) => ({
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
                
                    loader: {
                        fill: theme.colorScheme === 'dark' ? theme.black : theme.white,
                        color: theme.colorScheme === 'dark' ? theme.black : theme.white,
                    }
                    
                }),              
            });
        }
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
                    {allDone && <ConfettiExplosion duration={4000}/>}
                    <Container className={classes.placeholder} fluid>
                        <Content index={current} onInputChanged={onInputChanged}/>
                    </Container>
                    
                    <Button 
                        fullWidth
                        variant="gradient"
                        gradient={{ from: '#FC466B', to: '#3F5EFB' }}
                        className={classes.nextBtn}
                        onClick={onFormNext}>
                            {active === 5 ? 'All Done' : 'Next'}
                    </Button>
                </Container>
            </Container>
        </div>
    )
}

export default EditJobScreen;