// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";
// // import Map from "./Map";

// const Section = styled.div`
//   height: 100vh;
//   scroll-snap-align: center;
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-between;
//   gap: 50px;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   @media only screen and (max-width: 768px) {
//     justify-content: center;
//   }
// `;

// const Title = styled.h1`
//   font-weight: 200;
// `;

// const Form = styled.form`
//   width: 500px;
//   display: flex;
//   flex-direction: column;
//   gap: 25px;

//   @media only screen and (max-width: 768px) {
//     width: 300px;
//   }
// `;

// const Input = styled.input`
//   padding: 20px;
//   background-color: #e8e6e6;
//   border: none;
//   border-radius: 5px;
// `;

// const TextArea = styled.textarea`
//   padding: 20px;
//   border: none;
//   border-radius: 5px;
//   background-color: #e8e6e6;
// `;

// const Button = styled.button`
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   font-weight: bold;
//   cursor: pointer;
//   border-radius: 5px;
//   padding: 20px;
// `;

// const Right = styled.div`
//   flex: 1;

//   @media only screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// const Img = styled.img`
//   width: 600px;
//   height: 400px;
//   object-fit: contain;
//   display: flex;
// align-items: center;
//   // position: absolute;
//   // top: 50;
//   // bottom: 0;
//   // left: 0;
//   // right: 0;
//   // margin: auto;
//   // margin: 20px;
//   margin-top: 170px;
//   animation: animate 2s infinite ease alternate;

//   @media only screen and (max-width: 768px) {
//     width: 100px;
//     height: 100px;
//   }

//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
// `;

// const Contact = () => {
//   const ref = useRef();
//   const [success, setSuccess] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // emailjs
//     //   .sendForm(
//     //     "service_id",
//     //     "template_id",
//     //     ref.current,
//     //     "public_key"
//     //   )
//     emailjs
//        .sendForm(
//          "service_90z29f9",
//          "template_s1x76yr",
//          ref.current,
//          "JuQ7OGNUm6CDuNH-0"
//        )

//       .then(
//         (result) => {
//           console.log(result.text);
//           setSuccess(true);
//         },
//         (error) => {
//           console.log(error.text);
//           setSuccess(false);
//         }
//       );
//   };
//   return (
//     <Section>
//       <Container>
//         <Left>
//           <Form ref={ref} onSubmit={handleSubmit}>
//             <Title>Contact Me</Title>
//             <Input placeholder="Name" name="name" />
//             <Input placeholder="Email" name="email" />
//             <TextArea
//               placeholder="Write your message"
//               name="message"
//               rows={10}
//             />
//             <Button type="submit">Send</Button>
//             {success &&
//               "Your message has been sent. We'll get back to you soon :)"}
//           </Form>
//         </Left>
//         <Right>
//         <Img src="./img/contact-img.svg" />
//         </Right>
//       </Container>
//     </Section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Section = styled.div`
  height: auto;
  min-height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 50px;

  @media only screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// const Img = styled.img`
//   width: 100%;
//   max-width: 600px;
//   height: auto;
//   object-fit: contain;
// `;

const Img = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;
  display: flex;
align-items: center;
  // position: absolute;
  // top: 50;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // margin: auto;
  // margin: 20px;
  margin-top: 170px;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_90z29f9", "template_s1x76yr", ref.current, "JuQ7OGNUm6CDuNH-0")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} />
            <Button type="submit">Send</Button>
            {success && "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Img src="./img/contact-img.svg" />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
