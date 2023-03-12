import { createStyles } from '@mantine/core';
import NavBar from '../../components/navbar';
import SplashHero from '../splash/SplashHero';
import VertTimeline from '../splash/VerticalTimeline';

const LandingScreen = () => {    
    return (
        <>
            <NavBar/>
            <SplashHero/>
            <VertTimeline/>
        </>
    );
}

export default LandingScreen;