import { useEffect, useState } from "react";
import FaqSimple from "./FaqSimple";
import GradientSegmentedControl from "./SegmentedControl";

const EditPractice = () => {
    const [sections, setSections] = useState([]);
    const [section, setSection] = useState('');
    const [data, setData] = useState([]);
    const [displayData, setDisplayData] = useState({});

    useEffect(() => {
        const skills = JSON.parse(localStorage.getItem('skills'));
        setData(skills
            .map(({ title, questions }) => ({ title, questions: questions.slice(1) }))
        )
        setSections(skills.map(({ title }) => title));
      }, []);

      useEffect(() => {
        console.log('data', data);
      }, [section, data])

    return (
        <>
            {/* <GradientSegmentedControl sections={sections}/> */}
            <FaqSimple data={data}/>
        </>

    );
}

export default EditPractice;