import React, { Suspense } from 'react'
import styled from "styled-components"
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { Route, Switch } from 'react-router-dom';

// const Section= styled.div`
         
//   scroll-snap-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
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
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;

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
  
// `
// const Button = styled.button`
// background-color: #da4ea2;
// color: white;
// font-weight: 500;
// width: 100px;
// padding: 10px;
// border: none;
// border-radius: 5px;
// cursor: pointer;
  
// `
// const Right = styled.div`
// flex: 3;
// position: relative;
  
// `
// const Img = styled.img`
 
// width: 800px;
// height: 600px;
// object-fit: contain;
// position: absolute;
// top: 0;
// bottom: 0;
// left: 0;
// right: 0;
// margin: auto;
// animation: animate 2s infinite ease alternate;


// @keyframes animate {
//   to {
//     transform: translateY(20px);
//   }
// }
// `

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
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
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
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
// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   font-weight: 500;
//   width: 100px;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  // width: 800px;
  // height: 600px;
  width: 600px;
 height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  const linkedinProfile = "https://www.linkedin.com/in/aiyasha-pinjari-91b119223/"; // Your LinkedIn profile URL
  return (
    
      
    
    <Section>
           <Navbar />
           <Container>
            <Left>
          {/* <Title>Think. Make. Solve.</Title> */}
          <Title>I'm Aiyasha!</Title> 
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>I am a web developer.</Subtitle>
          </WhatWeDo>
          <Desc>
            {/* I enjoy creating delightful, human-centered digital experiences. */}
            Passionate about web development and its dynamic possibilities.
          </Desc> 
          {/* <Button>Learn More</Button> */}
          <ButtonLink href={linkedinProfile} target="_blank">
            My Linkedin
          </ButtonLink>
         </Left>
         <Right>
         <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.8}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
         {/* <Img src="./img/moon.png" /> */}
         {/* <Img src="./img/header-img.svg" /> */}
         <Img src="./img/hero-image.png" />
         </Right>
           </Container> 
    </Section>
   
  )
}

export default Hero
