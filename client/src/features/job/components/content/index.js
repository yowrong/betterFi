import { useState } from 'react';
import { motion } from 'framer-motion';
import { Overlay } from '@mantine/core';

import { editForms, animateContainer, animateItem, animateTitle } from './constants';
import { useStyles } from './styles';


const Content = ({index, onInputChanged}) => {
    const [data, setData] = useState({});
    const { classes } = useStyles();

    const renderContent = (index) => {
        return (editForms[index]['component']);
    }

    return (
        <motion.div
            variants={animateContainer}
            initial='hidden'
            animate='visible'
            className={classes.root}
        >
            <motion.h1
                variants={animateTitle}
                initial='hidden'
                animate='visible'
            >
                {editForms[index]['title']}
            </motion.h1>
            <motion.p
                variants={animateTitle}
                initial='hidden'
                animate='visible'
            >
                {editForms[index]['description']}
            </motion.p>
            <motion.div
                variants={animateItem}
                initial='hidden'
                animate='visible'
            >
                {renderContent(index)}
            </motion.div>
        </ motion.div>
    );
}

export default Content;