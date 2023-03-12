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
        console.log(skills)
        setData(skills
            .map(({ title, questions }) => ({ title, questions: questions.slice(1) }))
        )
        setSections(skills.map(({ title }) => title));
        setSection(skills.map(({ title }) => title)[0]);
    }, []);

    useEffect(() => {
        if (data) {
            const display = data
                ?.find((s) => s['title'] === section);
            console.log(data);
            display && setDisplayData(display['questions']);
        }
    }, [section, data])

    const onSectionChange = (section) => {
        setSection(section);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {/* <GradientSegmentedControl sections={sections} onSectionChange={onSectionChange}/> */}
            {/* <FaqSimple data={displayData}/> */}
            <FaqSimple data={data}/>
        </div>

    );
}

export default EditPractice;