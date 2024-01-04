import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"
import Cube from "./components/Cube"
// import Navbar from "./components/Navbar"

// height: 100vh;: This sets the height of the container to 100% of the viewport height.
// scroll-snap-type: y mandatory;: This enables scroll snapping, which means the content will snap to specific positions when scrolling. In this case, it will snap vertically (y axis) and snapping is mandatory.
// scroll-behavior: smooth;: This makes scrolling smoother and more visually appealing.
// overflow-y: auto;: This enables vertical scrolling if the content overflows the container height.
// scrollbar-width: none;: This hides the scrollbars.
// Lines 10-12: These lines hide the native browser scrollbar and replace it with a custom one using the &::-webkit-scrollbar pseudo-class selector. However, the code for the custom scrollbar is not shown in the image.
const Container= styled.div`
        
          height: 100vh;
          scroll-snap-type: y mandatory;
          scroll-behavior: smooth;
          overflow-y: auto;
          scrollbar-width: none;
          color: white;
          background: url("./img/bg.jpeg");
          &::-webkit-scrollbar{
            display: none;
          }

`
function App() {

  return (
    // <Router>
    //   <Navbar /> {/* If you have a Navbar */}
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/contact" component={Contact} />
    //   </Switch>
    // </Router>
    <Container>
      {/* <Navbar/> */}
     <Hero/>
     <Who/>
     <Works/>
     <Contact/>

    </Container>
  )
}

export default App
