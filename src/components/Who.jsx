// import React from 'react'
// import styled from "styled-components"
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import Cube from "./Cube";




// const Section= styled.div`
    
//         height: 100vh;
//         scroll-snap-align: center;
//         display: flex;
//         justify-content: center;
// `
// const Container = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
//    width: 1400px;
//  display: flex;
//   justify-content: space-between;
//   justify-items:center;
// `

// const Left = styled.div`
// flex: 1;


//   // @media only screen and (max-width: 768px) {
//   //   flex: 1;
//   //   align-items: center;
//   // }
// `

// const Title = styled.h1`
// font-size: 74px;
  
// `

// const WhatWeDo = styled.div`
// display: flex;
// align-items: center;
// gap: 10px;

  
// `

// const Line = styled.img`
// height: 5px;
  
// `
// const Subtitle = styled.h2`
// color: #da4ea2;
  
// `
// const Desc = styled.p`
// font-size: 24px;
// color: lightgray;
  
// // `

// const ButtonLink = styled.a`
//   width: 100px;
//   padding: 10px;
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;
// // const Button = styled.button`
// // background-color: #da4ea2;
// // color: white;
// // font-weight: 500;
// // width: 120px;
// // padding: 10px;
// // border: none;
// // border-radius: 5px;
// // cursor: pointer;
  
// // `

// // const ButtonLink = styled.a`
// //   width: 100px;
// //   padding: 10px;
// //   background-color: #da4ea2;
// //   color: white;
// //   border: none;
// //   border-radius: 5px;
// //   cursor: pointer;
// // `;
// const Right = styled.div`
// flex: 1;
// display: flex;
// flex-direction: column;
// justify-content: center;
// gap: 20px;
  
// `


// const Who = () => {
//   const githubProfile = "https://github.com/Aiyasha9"; 
//   return (
//     <Section>
           
//            <Container>
//             <Left>
//               {/* 3d model */}
//             {/* <Img src="./img/moon.png" /> */}
//             {/* <Canvas camera={{ position: [5, 5, 5], fov: 25 }}> */}
//             <Canvas camera={{ position: [4, 4, 4], fov: 25 }}> 
//             {/* <Suspense fallback={null}> */}
//               <ambientLight intensity={0.5} />
//               <directionalLight position={[3, 2, 1]} />
//               <Cube />
//               <OrbitControls enableZoom={false} autoRotate />
//             {/* </Suspense> */}
//           </Canvas>
//          </Left>
//          <Right>
//          <Title>Think outside the square space</Title>
//           <WhatWeDo>
//             <Line src="./img/line.png" />
//             <Subtitle>What I Do</Subtitle>
//           </WhatWeDo>
//           <Desc>
//           {/* a creative group of designers and developers with a passion for the
//             arts. */}
//             Driven by a fascination for web development, exploring boundless opportunities in digital innovation and user-centric design.
//           </Desc> 
//           {/* <Button>See my works</Button> */}
//            <ButtonLink href={githubProfile} target="_blank">
//            See my works
//           </ButtonLink>
//          </Right>
//            </Container> 
//     </Section>
//   )
// }

// export default Who
import React from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  justify-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const ButtonLink = styled.a`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Who = () => {
  const githubProfile = 'https://github.com/Aiyasha9';
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [4, 4, 4], fov: 25 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            Driven by a fascination for web development, exploring boundless opportunities in digital innovation and user-centric design.
          </Desc>
          <ButtonLink href={githubProfile} target="_blank">
            See my works
          </ButtonLink>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
