import { useState } from 'react';
import { Container, Button } from '@mantine/core';
import BetterTimeline from '../components/timeline/timeline';

import NavBar from "../../../components/navbar";
import Content from '../components/content';
import { useStyles } from './styles';

const EditJobScreen = () => {
    const [data, setData] = useState({});
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState(0);
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
        if (active !== 5) {
            setActive(active + 1);
            setCurrent(active + 1);
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