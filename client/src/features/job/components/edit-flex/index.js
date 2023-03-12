import { InputTooltip } from "./InputToolTip";
import { useState } from 'react';
import { TextInput, Button, Container, rem, useMantineTheme } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { toastTheme, useStyles } from './styles';
import { getFlex } from '../../../../controller/controller';


const EditFlex = (props) => {
    const { classes } = useStyles();

    const [education, setEducation] = useState('')
    const [experience, setExperience] = useState('')
    const [coverLetter, setCoverLetter] = useState('')

    const onEducationChange = (e) => {
        setEducation(e)
    }

    const onExperienceChange = (e) => {
        setExperience(e)
    }

    const onBtnClick = async () => {
        const skills = localStorage.getItem('skills')
        const jobTitle = localStorage.getItem('jobTitle')
        const company = localStorage.getItem('company')

        const experienceOpt = [{
            company: "Netflix",
            skills: ["Java", "Python", "C++"],
            position: experience,
        }]


        const json = { experience: experienceOpt, skills, jobTitle, education: "BCIT", companyTitle: company }
        const res = await getFlex(json)
        localStorage.setItem('coverLetter', res.coverLetter)
        notifications.show({
            title: 'Submitted',
            message: 'Our cats have received your information',
            loading: false,
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
        // setCoverLetter(res.coverLetter)
    }
    return (
        <>
            <InputTooltip onEducationChange={onEducationChange} onExperienceChange={onExperienceChange} />
            <Button className={classes.btn} type="submit" variant="gradient" onClick={onBtnClick}>
                SUBMIT
            </Button>
        </>
    );
}

export default EditFlex;