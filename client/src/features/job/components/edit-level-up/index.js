import { useEffect, useState } from 'react';
import { Container, Title, Text, Button, Paper, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';

import { sampleData } from '../../../../config/sample-data';
import { useStyles } from './styles';
import { ytThumbnail, ytLink } from './constant';

export const EditLevelUp = () => {
    const { classes } = useStyles();
    const [data, setData] = useState([])

    useEffect(() => {
        const skills = JSON.parse(localStorage.getItem('skills'))
        setData(skills.map(({title, tutorials}) => ({title, tutorials}))) 
    }, [])

    const onBtnClicked = (url) => {
        window.open(url, '_blank').focus();
    }
    
    const renderCard = (tutorial) => {
        return (
            <Carousel.Slide key={tutorial['video']}>

                    <Paper
                        shadow="md"
                        p="xl"
                        radius="md"
                        sx={{
                            backgroundImage: `
                                linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.35) 100%),
                                url(${ytThumbnail.replace(':ID', tutorial['video'])})`,
                            
                        }}
                        className={classes.card}
                    >   
                        <div>
                            <Title order={3} className={classes.title}>
                                {tutorial['title']}
                            </Title>
                            <Text className={classes.category} size="xs">
                                {tutorial['description']}
                            </Text>
                        </div>
                        <Button 
                            variant="gradient"
                            gradient={{ from: '#3F5EFB', to: '#131c4b' }}
                            color="dark"
                            onClick={() =>
                                onBtnClicked(ytLink.replace(':ID', tutorial['video']))
                            }
                        >
                            Watch Now
                        </Button>
                    </Paper>

            </Carousel.Slide>
        );
    }

    const renderTutorials = (tutorials) => {
        return tutorials.map((t, i) => (
            <>
                <h2>{t['title']}</h2>
                <Carousel 
                    slideSize="50%"
                    breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
                    slideGap="sm"
                    align="start"
                    slidesToScroll={3}
                >
                    {t['tutorials'].map((tutorial) => renderCard(tutorial))}
                </Carousel>
            </>
        ));
    }


    return (
        <Container className={classes.root}> 
            {renderTutorials(data)}
        </Container>
    );
}

export default EditLevelUp;