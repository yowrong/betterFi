import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as ExploreIcon } from '../../assets/compass.svg';
import { ReactComponent as FlexIcon } from '../../assets/muscular.svg';
import { ReactComponent as ApplyIcon } from '../../assets/verification.svg';
import { ReactComponent as LevelUpIcon } from '../../assets/level-up.svg';
import { ReactComponent as ChallengeIcon } from '../../assets/achievement.svg';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import catTyping from '../../assets/cat-typing.gif';
import catTyping2 from '../../assets/cat-typing-2.gif';
import catJam from '../../assets/cat-jam.gif';
import catWorkout from '../../assets/cat-workout.gif';
import catLaptop from '../../assets/cat-laptop.gif';
import { rem } from '@mantine/core';
import { Link } from 'react-router-dom';


function VertTimeline() {
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
                <h1>Start Your BetterFi Journey</h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3F5EFB', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3F5EFB' }}
                    iconStyle={{ background: '#3F5EFB', color: '#fff' }}
                    icon={<ExploreIcon style={{fontSize: '500px'}}/>}
                >
                    <h3 className="vertical-timeline-element-title">Explore</h3>
                    <p>Enter a URL with your dream job posting</p>
                    <br/>
                    <img src={catTyping} width={464} alt="cat-typing" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FC466B', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FC466B' }}
                    iconStyle={{ background: '#FC466B', color: '#fff' }}
                    icon={<FlexIcon width='500px'/>}
                >
                    <h3 className="vertical-timeline-element-title">Flex</h3>
                    <p>Describe your skills, qualifications and experiences</p>
                    <br/>
                    <img src={catTyping2} width={464} alt="cat-typing-2" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3F5EFB', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3F5EFB' }}
                    iconStyle={{ background: '#3F5EFB', color: '#fff' }}
                    icon={<ApplyIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Apply</h3>
                    <p>Generate a tailored resume and cover letter</p>
                    <br/>
                    <img src={catJam} width={464} alt="cat-jam" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FC466B', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #FC466B' }}
                    iconStyle={{ background: '#FC466B', color: '#fff' }}
                    icon={<LevelUpIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Level Up</h3>
                    <p>Improve your skills with personalized recommendations of tutorials and courses</p>
                    <br/>
                    <img src={catWorkout} width={464} alt="cat-workout" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3F5EFB', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3F5EFB' }}
                    iconStyle={{ background: '#3F5EFB', color: '#fff' }}
                    icon={<ChallengeIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Challenge Yourself</h3>
                    <p>Practice common technical interview questions related to the job posting</p>
                    <br/>
                    <img src={catLaptop} width={464} alt="cat-laptop" />
                </VerticalTimelineElement>
                <Link to="/new-job">
                    <VerticalTimelineElement
                        iconStyle={{ background: '#0F2027', color: '#fff' }}
                        icon={<LogoIcon />}
                    >
                    </VerticalTimelineElement>
                </Link>
            </VerticalTimeline>
        </>
);}

export default VertTimeline