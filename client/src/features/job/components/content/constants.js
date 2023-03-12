import EditApply from "../edit-apply";
import EditExplore from "../edit-explore";
import EditFlex from "../edit-flex";
import EditLevelUp from "../edit-level-up";
import EditPractice from "../edit-practice";
import EditResearch from "../edit-research";

export const animateContainer = {
    hidden: { 
        opacity: 1, 
    },
    visible: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
};
  
export  const animateItem = {
    hidden: { 
        y: 20,
        opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
        delay: 0.5,
      },
    },
};

export const animateTitle = {
    hidden: { 
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          ease: 'easeInOut',
          duration: 2,
        },
      },
};

export const editForms = [
    {
        title: 'Explore',
        component: (<EditExplore />),
        description: "Enter the link to the job posting of your dreams. Leave it up to us to process this information, and see how we can make everything better."
    },
    {
        title: 'Flex',
        component: (<EditFlex />),
        description: "Don't be shy. Tell us all abot you! We'll use this information to tailor-fit your application package, as well as make suggestions on how to best move forward."
    },
    {
        title: 'Apply',
        component: (<EditApply />),
        description: "And it's done! Below you can find your application package, which you can download and submit to the company."
    },
    {
        title: 'Level Up',
        component: (<EditLevelUp />),
        description: "It's not over yet! We've taken a good look at your qualifications, and have specially crafted resources to help you get even better."
    },
    {
        title: 'Practice',
        component: (<EditPractice />),
        description: "Are you up for a challenge? We have curated a list of technical interview questions based on the job description. Save your answers here, so it's easy to get back to them later on."
    },
    {
        title: 'Research',
        component: (<EditResearch />),
        description: "We've done our best to make sure you're well prepared for your interview. But it's always good to do a little bit of research on your own."
    }
]