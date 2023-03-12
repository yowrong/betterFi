import { TextInput, Tooltip, Center, Text, Button } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { useState } from 'react';

function TooltipEd() {
  const rightSection = (
    <Tooltip
      label="The highest level of education for which you have completed"
      position="top-end"
      withArrow
      transitionProps={{ transition: 'pop-bottom-right' }}
    >
      <Text color="dimmed" sx={{ cursor: 'help' }}>
        <Center>
          <IconInfoCircle size="1.1rem" stroke={1.5} />
        </Center>
      </Text>
    </Tooltip>
  );

  return (
    <TextInput
      rightSection={rightSection}
      label="Education"
      placeholder="Enter your highest level of education"
    />
  );
}

function TooltipEx() {
    const rightSection = (
      <Tooltip
        label="Your current or most recent job title related to the job you are applying for"
        position="top-end"
        withArrow
        transitionProps={{ transition: 'pop-bottom-right' }}
      >
        <Text color="dimmed" sx={{ cursor: 'help' }}>
          <Center>
            <IconInfoCircle size="1.1rem" stroke={1.5} />
          </Center>
        </Text>
      </Tooltip>
    );
  
    return (
      <TextInput
        rightSection={rightSection}
        label="Work Experience"
        placeholder="Enter your current or most recent job title"
      />
    );
}

export const InputTooltip = ({onEducationChange, onExperienceChange}) => {
  const [valueEd, setValueEd] = useState('');
  const [valueEx, setValueEx] = useState('');
  return (
    <>
      <br/>
      <TooltipEd
        valueEd={valueEd}
        onChange={(event) => onEducationChange(event.currentTarget.value)}
      />
      <br/>
      <TooltipEx
        valueEx={valueEx}
        onChange={(event) => onExperienceChange(event.currentTarget.value)}
      />
      <br/>
    </>
  );
}