import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundImage:
        'url(https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    container: {
        height: rem(700),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: `calc(${theme.spacing.xl} * 6)`,
        zIndex: 0,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
        height: rem(500),
        paddingBottom: `calc(${theme.spacing.xl} * 3)`,
        },
    },

    title: {
        color: theme.white,
        fontSize: rem(60),
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
        fontSize: rem(40),
        lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
        fontSize: rem(28),
        lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
        fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
        width: '100%',
        },

        borderRadius: theme.radius.md,
    },
}));

function SplashHero() {
    const { classes } = useStyles();

    return (
        <div className={classes.hero}>
        <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
        />
        <Container className={classes.container}>
            <Title className={classes.title}>Matching qualifications to opportunities, one job at a time</Title>
            <br/>
            <Text className={classes.description} size="l" mt="l" color="dimmed">
            Check your qualifications against job requirements, and level up with our recommended tutorials and courses 
            to help you develop the skills you need to apply
            </Text>
            <br/>
            <Text className={classes.description} size="l" mt="l" color="dimmed">
            Use BetterFi to increase your chances of landing your dream 
            job and generate a template resume and cover letter tailored specifically to the job posting
            </Text>

            <Link to="/new-job">
                <Button variant="gradient" size="xl" className={classes.control}>
                    Get started
                </Button>
            </Link>
        </Container>
        </div>
    );
}

export default SplashHero;