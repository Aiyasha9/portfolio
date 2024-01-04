// // // import React from 'react';

// // // import styled from "styled-components"
// // // const Container = styled.div`
// // //   height: 100vh;
// // //   scroll-snap-align: center;
// // // `;
// // // const Timeline = () => {
// // //   const timelineStyles = {
// // //     backgroundColor: '#24292d',
// // //     minHeight: '100vh',
// // //     padding: '100px 15px',
    
// // //     // Add other styles here...
// // //   };

// // //   const itemsStyles = {
// // //     maxWidth: '1000px',
// // //     margin: 'auto',
// // //     display: 'flex',
// // //     flexWrap: 'wrap',
// // //     position: 'relative',
// // //     // Add other styles here...
// // //   };

// // //   // Add more styles for other elements as needed...

// // //   return (
// // //     <Container>
// // //     <div style={timelineStyles}>
// // //       <div style={itemsStyles}>
// // //         {/* Timeline items JSX structure here */}
// // //       </div>
// // //     </div>
// // //     </Container>
// // //   );
// // // };

// // // export default Timeline;
// // import React from 'react';
// // import styled from "styled-components";

// // const Container = styled.div`
// //   height: 100vh;
// //   scroll-snap-align: center;
// //   overflow: hidden; /* Hide the scrollbar */
  
// //   /* Hide scrollbar for webkit-based browsers */
// //   ::-webkit-scrollbar {
// //     display: none;
// //   }
// // `;

// // const Timeline = () => {
// //   const timelineStyles = {
// //     backgroundColor: '#24292d',
// //     minHeight: '100vh',
// //     padding: '100px 15px',
    
// //     // Add other styles here...
// //   };

// //   const itemsStyles = {
// //     maxWidth: '1000px',
// //     margin: 'auto',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     position: 'relative',
// //     // Add other styles here...
// //   };

// //   // Add more styles for other elements as needed...

// //   return (
// //     <Container>
// //       <div style={timelineStyles}>
// //         <div style={itemsStyles}>
// //           {/* Timeline items JSX structure here */}
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Timeline;

// // import React from 'react';
// // import styled from "styled-components";

// // const Container = styled.div`
// //   height: 100vh;
// //   overflow: hidden; /* Hide scrollbar */
// // `;

// // const Timeline = () => {
// //   const timelineStyles = {
// //     backgroundColor: '#24292d',
// //     minHeight: '100vh',
// //     padding: '100px 15px',
// //     overflow: hidden, /* Hide scrollbar within timeline container */
// //   };

// //   const itemsStyles = {
// //     maxWidth: '1000px',
// //     margin: 'auto',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     position: 'relative',
// //   };

// //   return (
// //     <Container>
// //       <div style={timelineStyles}>
// //         <div style={itemsStyles}>
// //           {/* Timeline items JSX structure here */}
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };
// // export default Timeline;


// // import React from 'react';
// // import styled from "styled-components";

// // const Container = styled.div`
// //   height: 100vh;
// //   overflow: hidden; /* Hide scrollbar */
// // `;

// // const Timeline = () => {
// //   const timelineStyles = {
// //     backgroundColor: '#24292d',
// //     minHeight: '100vh',
// //     padding: '100px 15px',
// //     overflow: 'auto', /* Enable scrolling */
// //     scrollbarWidth: 'thin', /* For Firefox */
// //     scrollbarColor: '#4a4a4a #111', /* For Firefox */

// //     /* Hide scrollbar within timeline container for webkit-based browsers */
// //     '&::-webkit-scrollbar': {
// //       width: '8px',
// //     },
// //     '&::-webkit-scrollbar-track': {
// //       background: '#111',
// //     },
// //     '&::-webkit-scrollbar-thumb': {
// //       background: '#4a4a4a',
// //       borderRadius: '4px',
// //     },
// //   };

// //   const itemsStyles = {
// //     maxWidth: '1000px',
// //     margin: 'auto',
// //     display: 'flex',
// //     flexWrap: 'wrap',
// //     position: 'relative',
// //   };

// //   return (
// //     <Container>
// //       <div style={timelineStyles}>
// //         <div style={itemsStyles}>
// //           {/* Timeline items JSX structure here */}
// //         </div>
// //       </div>
// //     </Container>
// //   );
// // };

// // export default Timeline;




// import React from 'react';
// import styled from "styled-components";

// const Container = styled.div`
//   height: 100vh;
// `;

// const Timeline = () => {
//   const timelineStyles = {
//     backgroundColor: '#24292d',
//     minHeight: '100vh',
//     padding: '100px 15px',
//     overflow: 'auto', /* Enable scrolling */

//     /* Style scrollbar for webkit-based browsers */
//     '&::-webkit-scrollbar': {
//       width: '8px', /* Adjust width as needed */
//     },
//     '&::-webkit-scrollbar-track': {
//       background: 'transparent', /* Semi-transparent track */
//     },
//     '&::-webkit-scrollbar-thumb': {
//       background: '#f0f0f0', /* Lighter thumb color */
//       borderRadius: '10px', /* Rounded thumb */
//       border: '2px solid rgba(255, 255, 255, 0.2)', /* Soft border */
//     },
//   };

//   const itemsStyles = {
//     maxWidth: '1000px',
//     margin: 'auto',
//     display: 'flex',
//     flexWrap: 'wrap',
//     position: 'relative',
//   };

//   return (
//     <Container>
//       <div style={timelineStyles}>
//         <div style={itemsStyles}>
//           {/* Timeline items JSX structure here */}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Timeline;


import React from 'react';
import styled from "styled-components";
import './styles.css'; // Import the CSS file

const Container = styled.div`
  height: 100vh;
  overflow: auto; /* Enable scrolling */
`;

const Timeline = () => {
  const timelineStyles = {
    backgroundColor: '#24292d',
    minHeight: '100vh',
    padding: '100px 15px',
  };

  const itemsStyles = {
    maxWidth: '1000px',
    margin: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
  };

  return (
    <Container className="container">
      <div style={timelineStyles}>
        <div style={itemsStyles}>
          {/* Timeline items JSX structure here */}
        </div>
      </div>
    </Container>
  );
};

export default Timeline;

