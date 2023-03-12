import { useState, useEffect } from 'react';
import { Container, Accordion, createStyles, rem } from '@mantine/core';
import { FloatingLabelInput } from './TextInput';

const useStyles = createStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },

  wrapper: {
    paddingTop: theme.spacing.xl,
    maxHeight: 500,
    overflowY: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    padding: 0,
    margin: 0,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const FaqSimple = ({ data }) => {
  const { classes } = useStyles();

  const renderQuestions = (questions) => {
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
          {renderQuestions(q['questions'])}
        </Accordion>
      </>

    ));
  }

  return (
    <Container size="sm" className={classes.wrapper}>
      {/* {renderSections(data)} */}
      <Accordion variant="separated">
        {data && renderQuestions(data)}
      </Accordion>
    </Container>
  );
}

export default FaqSimple;