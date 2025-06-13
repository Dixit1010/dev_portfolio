// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hi Everyone, I am <span className="purple">Dixit Kumar </span>
//             from <span className="purple"> Delhi, India.</span>
//             <br />
//             I am currently employed as a software developer at Kimbal.
//             <br />
//             I have completed Integrated B.Tech in ECE at NSUT, New Delhi.
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> Playing Games
//             </li>
//             {/* <li className="about-activity">
//               <ImPointRight /> Writing Tech Blogs
//             </li> */}
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//             "Strive to build things that make a difference!"{" "}
//           </p>
//           <footer className="blockquote-footer">Dixit</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;


import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";

function AboutCard() {
  const linkStyle = {
    color: "#9b7eac",
    textDecoration: "none",
    marginLeft: "8px",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#ba9bd8",
  };

  return (
    <Card
      className="quote-card-view"
      style={{ backgroundColor: "#f5f0f8", border: "none", borderRadius: "20px" }}
    >
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.7" }}>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dixit Kumar</span> from{" "}
            <span className="purple">Delhi, India.</span>
            <br />
            I am currently employed as a software developer at Kimbal.
            <br />
            I have completed Integrated B.Tech in ECE at NSUT, New Delhi.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight color="#9b7eac" /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight color="#9b7eac" /> Travelling
            </li>
          </ul>

          {/* Coding Profiles Header */}
          <h5
            style={{
              marginTop: "30px",
              fontWeight: "bold",
              color: "#9b7eac",
              borderBottom: "2px solid #9b7eac",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            💻 My Coding Profiles
          </h5>

          <ul style={{ paddingLeft: "1.2rem", marginTop: "15px" }}>
            <li className="about-activity">
              <SiLeetcode color="#FFA116" />
              <a
                href="https://leetcode.com/u/dixit_code/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
              >
                LeetCode (Knight | 1850+ rating | 850+ problems solved)
              </a>
            </li>
            <li className="about-activity">
              <SiGeeksforgeeks color="#2F8D46" />
              <a
                href="https://www.geeksforgeeks.org/user/dixitkumar300/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
              >
                GeeksforGeeks (350+ problems solved)
              </a>
            </li>
            <li className="about-activity">
              <SiCodechef color="#5B4638" />
              <a
                href="https://www.codechef.com/users/dixit_1100"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
              >
                CodeChef (3★ | 1300+ rating)
              </a>
            </li>
            <li className="about-activity">
              <SiCodeforces color="#1F8ACB" />
              <a
                href="https://codeforces.com/profile/dixitkumar300"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                onMouseOut={(e) => (e.currentTarget.style.color = linkStyle.color)}
              >
                Codeforces (Newbie | 1100+ rating)
              </a>
            </li>
          </ul>

          <p style={{ color: "#9b7eac", fontStyle: "italic", marginTop: "1.5rem" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Dixit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
