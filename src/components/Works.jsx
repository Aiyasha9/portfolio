
// import React from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";
// import "react-vertical-timeline-component/style.min.css";

// import { styles } from "../styles/styles";
// import { experiences } from "../constants";
// import { textVariant } from "../utils/motion";
// import styled from "styled-components";

// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   color: black;
//   font-size: 14px;
//   font-weight: 300;
//   overflow: auto;
//   // overflow: hidden;
//   overflow-y: scroll;
//   -ms-overflow-style: none; /* Hide scrollbar in IE and Edge */
//   scrollbar-width: none; /* Hide scrollbar in Firefox */
// `;
// const Container = styled.div`
//   width: 1400px;
//   display: flex;
//   // justify-content: space-between;
//   justify-content: center;
//   scroll-snap-align: center;

//   @media only screen and (max-width: 768px) {
//     width: 100%;
//     flex-direction: column;
//   }
// `;


// const Title = styled.h1`
//   font-size: 74px;
// //  color:white;
// color:#da4ea2;
// display: flex;
// align-items: center;

// //idhr 

// scroll-snap-align: center;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   @media only screen and (max-width: 768px) {
//     text-align: center;
//   }
// `;


// const ExperienceCard = ({ experience }) => {
//   return (
//     // <Bottom>
//     <VerticalTimelineElement
//     // style={{ width: '700px', minHeight: '200px' }} // Set your desired width and height here
//     style={{ width: '700px', minHeight: '200px' }}
//       contentStyle={{
//         background: "#1d1836",
//         color: "#fff",
      
//       }}
//       // contentArrowStyle={{ borderRight: "7px solid  #232631" }}
//       contentArrowStyle={{ borderRight: "10px solid  #232631" }}
//       date={experience.date}
//       // iconStyle={{ background: 'transparent', fontSize: '12px' }} 
//       // iconStyle={{ background: 'pinkish-purple', fontSize: '12px'}} 
//       iconStyle={{ background: '#da4ea2', fontSize: '12px' }}

//     >
//       <div>
//         <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
//         <p
//           className='text-secondary text-[16px] font-semibold'
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className='mt-5 list-disc ml-5 space-y-2'>
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className='text-white-100 text-[14px] pl-1 tracking-wider'
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//     // </Bottom>
//   );
// };

// const Works = () => {
//   return (
//     <>
    
//      <motion.div variants={textVariant()}>
    
// <Title>Work Experience.</Title>


//       </motion.div>

//       <Section>
//      <Container>
//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//       </Container>
//    </Section>
  
 
//     </>
   

     
//   )
// }

// export default Works









import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { textVariant } from "../utils/motion";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  overflow: hidden; /* Hide scrollbar */
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  overflow: hidden; /* Hide scrollbar */

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: #da4ea2;
  display: flex;
  align-items: center;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      style={{ width: '700px', minHeight: '200px' }}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "10px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: '#da4ea2', fontSize: '12px' }}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <Title>Work Experience.</Title>
      </motion.div>
      <Section>
        <Container>
          <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Works;
