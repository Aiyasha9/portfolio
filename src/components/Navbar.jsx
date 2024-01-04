import styled from "styled-components"
import React from 'react'
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './Contact';

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 40px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// const Icon = styled.img`
//   width: 20px;
//   cursor: pointer;
// `;

// const ButtonLink = styled.a`
//   width: 100px;
//   padding: 10px;
//   background-color: #da4ea2;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const Button = styled.button`
background-color: #da4ea2;
color: white;
font-weight: 500;
width: 120px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
  
`

const Navbar = () => {
 
  return (
    
    // <Router>
    
    // {/* <Switch> */}
    // <Route path="/contact" component={Contact} />
    <Section>
        <Container>
<Links>


<Logo src="./img/blacklogo.jpeg" />
          {/* <List> 
            <ListItem>Home</ListItem> */}
            {/* <ListItem><Link to="/">Home</Link></ListItem> */}
            {/* <ListItem>Studios</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List> */}
          </Links>
          <Icons>
          {/* <Icon src="./img/search.png" /> */}
          <Button>Contact Me</Button>
          {/* <Button to="/contact">Contact Me</Button> */}
          
</Icons>
        </Container>
    
    </Section>
    
      
    // </Router>
  
  )
}

export default Navbar
