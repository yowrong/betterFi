import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';
import { FloatingLabelInput } from './TextInput';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
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

export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Common Interview Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="q1">
          <Accordion.Control>Can you tell us a little bit about yourself?</Accordion.Control>
          <Accordion.Panel>
            <FloatingLabelInput/>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="q2">
          <Accordion.Control>Why do you want to work for our company?</Accordion.Control>
          <Accordion.Panel>
            <FloatingLabelInput/>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="q3">
          <Accordion.Control>What are your biggest strengths and weaknesses?</Accordion.Control>
          <Accordion.Panel>
            <FloatingLabelInput/>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="q4">
          <Accordion.Control>How do you handle stress and pressure?</Accordion.Control>
          <Accordion.Panel>
            <FloatingLabelInput/>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="q5">
          <Accordion.Control>Can you give an example of a time when you had to solve a problem?</Accordion.Control>
          <Accordion.Panel>
            <FloatingLabelInput/>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}