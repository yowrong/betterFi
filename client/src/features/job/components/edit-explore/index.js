import { useState } from 'react';
import { TextInput, Button, Container, rem, useMantineTheme } from '@mantine/core';
import { toastTheme, useStyles } from './styles';
import { notifications } from '@mantine/notifications';

export const EditExplore = () => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });

    const isValidURL = (string) => {
        const pattern = new RegExp(
            '^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(string);
    }

    const onLinkChanged = (e) => {
        setValue(e.target.value);
    }

    const onBtnClick = () => {
        console.log(`URL From EXPLORE: ${value}`);
        if (isValidURL(value)) {
            notifications.show({
                title: 'Wait a moment',
                message: 'Our cats are hard at work processing the job posting',
                loading: true,
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
            // TODO: Make call to server
        } else {
            notifications.show({
                title: 'Oops! 😿',
                message: 'That doesn\'t look like a valid URL. Please try again.',
                color: 'red'
            })
        }
    }

    return (
        <Container 
            fluid
            className={classes.root}
            style={{display: 'flex', flexDirection: 'row', alignItems: 'end', padding: `${rem(20)} 0` }}
        >
            <TextInput
                required
                label="Enter Job Posting Link"
                placeholder="LinkedIn, GlassDoor, Indeed, etc."
                value={value}
                onChange={onLinkChanged}
                className={classes}
                style={{ flex: 1, paddingLeft: 0, paddingRight: rem(20) }}
            />
            <Button className={classes.btn} type="submit" variant="gradient" onClick={onBtnClick}>
                PROCESS
            </Button>

        </Container>
    );
    }

export default EditExplore;