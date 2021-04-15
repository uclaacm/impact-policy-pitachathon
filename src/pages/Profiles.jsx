import React from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard.js";
import AndrewSelbst from "../assets/andrew-selbst.jpg";
import DustinBrown from "../assets/dustin-brown.jpg";
import SafiyaNoble from "../assets/safiya-noble.jpg";
import MichaelRyzhov from "../assets/michael-ryzhov.jpg";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled("div")`
    padding-top: 5vh;
    padding-bottom: 3vh;
    font-family: 'Westwood Sans';
    font-size: 48px;
    display: flex;
    align-items: flex-start;
`;

const AllContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default class Profiles extends React.Component {
    render() {
        return (
            <AllContainer>
                <Title>Profiles</Title>
                <Container>
                    <ProfileCard name="Andrew Selbst - Keynote Speaker" description="Andrew Selbst is an Assistant Professor
                    of Law at UCLA School of Law. Prior to joining UCLA Law, he was a Postdoctoral Scholar at the Data & Society Research
                    Institute and a Visiting Fellow at Yale Law School’s Information Society Project. He has also previously taught as an Adjunct Professor at Fordham Law School.
                      Selbst’s research examines the relationship between law, technology, and society. Drawing on resources from computer science, critical theory, sociology, and science, technology and society, he seeks to understand how the creation, use, and proliferation of different technologies can interfere with existing legal regimes, and how legal actors can most usefully anticipate or respond to the social effects of new technology. Over the last several years, Selbst’s research has focused on the effects of machine learning and artificial intelligence on varied legal regimes, including discrimination, policing, credit regulation, data protection, and tort law." pic={AndrewSelbst}>
                    </ProfileCard>
                    <ProfileCard name="Safiya U. Noble - Judge" description="Dr. Safiya U. Noble is an Associate Professor
                     at UCLA in the Department of Information Studies where she serves as the Co-Founder and Co-Director of the UCLA Center
                     for Critical Internet Inquiry (C2i2). She holds appointments in African American Studies and Gender Studies. She is a Research Associate at the Oxford Internet Institute at the University of Oxford and has been appointed as a Commissioner on the Oxford Commission on AI & Good Governance (OxCAIGG). Dr. Noble is a board member of the Cyber Civil Rights Initiative, serving those vulnerable to online harassment. She is the author of a best-selling book on racist and sexist algorithmic bias in commercial search engines, entitled Algorithms of Oppression: How Search Engines Reinforce Racism (NYU Press), which has been widely-reviewed in scholarly and popular publications." pic={SafiyaNoble}>
                    </ProfileCard>

                    <ProfileCard name="Michael Ryzhov - Judge" description="Michael Ryzhov is an urban planner interested
                    in equitable development strategies and the intersection of technology and policy. He graduated
                    from UCLA's Luskin School of Public Affairs with a Master of Urban and Regional Planning in
                    2020. While at UCLA, he served as teaching assistant for a course on Advanced Technologies,
                    Law and Public Policy. He currently works as an Associate at SB Friedman Development Advisors in
                    Chicago. His previous experience includes work on affordable housing and water technology.  " pic={MichaelRyzhov}>
                    </ProfileCard>

                    <ProfileCard name="Dustin Brown - Judge" description="Dustin Brown is a PhD candidate in the Electrical and Computer Engineering Department at
                      UCLA and a Teaching Fellow for the Engineering Department. As a member of the UCLA
                      Antenna Research, Analysis, and Measurement Laboratory, he conducts academic research on
                      the design of phased arrays and near field measurement schemes for millimeter wave systems.
                      He has taught three undergraduate courses focusing on public policy for emerging technology,
                      engineering ethics, writing, and team collaboration: ENGR 182EW (Technology and Society),
                      ENGR 183EW (Engineering and Society), and ENGR 185EW (Art of Engineering Endeavors)." pic={DustinBrown}>
                    </ProfileCard>



                </Container>
                </AllContainer>
        )
    }
}
