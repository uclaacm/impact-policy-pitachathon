import React from "react";
import styled from "styled-components";
import Question from "../components/Question";

const Container = styled("div")`
    display: flex;
    flex-direction: column;
    padding-left: 15vh;
    padding-right: 15vh;
    max-width: 75%;
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
    padding-bottom: 10vh;
`;

export default class FAQ extends React.Component {
    render() {
        return (
            <AllContainer>
                <Title>FAQ</Title>
                <Container>
                    <Question question="✨What's a pitchathon?✨" answer="Our pitchathon is a virtual one day competition in which you’ll work in a team to create a policy-based solution to a tech-related problem. You’ll present your solution in the form of a recorded pitch. The pitchathon also includes events throughout the day to help you learn more about tech regulation and meet other people who are interested in the intersection of tech and government. "></Question>
                    <Question question="✨Who can attend?✨" answer="Any undergrad or grad student can attend the Opening Ceremony, Networking Session, and Tech Policy Kahoot as well as sign up for mentoring slots."></Question>
                    <Question question="✨Who can submit a pitch?✨" answer="Anyone attending an accredited 4-year university or community college can submit a pitch!"></Question>
                    <Question question="✨How much does it cost to attend?✨" answer="Nothing! Participating in the pitchathon is completely free."></Question>
                    <Question question="✨Do I need to have a team to sign up?✨" answer="Nope, we will be providing asynchronous team formation the day of the event! Individual submissions are also allowed."></Question>
                    <Question question="✨Do I need tech policy experience to come?✨" answer="NO! You don't need ANY experience in tech policy to attend the pitchathon :)"></Question>
                    <Question question="✨What should my pitch include?✨" answer="As long as your pitch meets the requirements of our judging rubric on the resources page, is between 5-10 minutes long, and is submitted by 3pm PST, anything is fair game!"></Question>
                    <Question question="✨How will judging work?✨" answer="There will be one winner for each track. There will be 3 judges (you can check them out on the profile page!) who will be using a provided rubric (given in the resources page) to judge each presentation based on a point system. The team with the highest overall number of points from all judges will be the winner of the track!"></Question>
                </Container>
            </AllContainer>
        )
    }
}
