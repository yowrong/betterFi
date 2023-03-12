import { useState, useEffect } from 'react';
import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';
import { FloatingLabelInput } from './TextInput';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    maxHeight: 650,
    overflowY: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const FaqSimple = () => {
  const [data, setData] = useState([]);
  const { classes } = useStyles();

  useEffect(() => {
    const skills = JSON.parse(localStorage.getItem('skills'));
    setData(skills.map(({ title, questions }) => ({ title, questions })));
  }, []);

  const renderQuestions = (questions, i) => {
    return questions.map((q, i) => (
      <Accordion.Item className={classes.item} value={`q-${i}`}>
        <Accordion.Control>{q}</Accordion.Control>
        <Accordion.Panel>
          <FloatingLabelInput />
        </Accordion.Panel>
      </Accordion.Item>
    ));
  }

  const renderSections = (sections) => {
    return sections.map((q, i) => (
      <>
        <h1>{q['title']}</h1>
        <Accordion variant="separated">
          {renderQuestions(q['questions'], i)}
        </Accordion>
      </>

    ));
  }

  return (
    <Container size="sm" className={classes.wrapper}>
      {renderSections(data)}
    </Container>
  );
}

export default FaqSimple;