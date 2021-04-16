import React from "react";
import styled from "styled-components";
import JudgingRubric from "../assets/judging-rubric.pdf";

const ResourceContainer = styled("div")`
    display: flex;
    flex-direction: column;
    padding-top: 3vh;
    padding-bottom: 3vh;
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

const ResourceButton = styled("button")`
    background-color: #E5ECEE;
    text-decoration: none;
    border: none;
    box-shadow: none;
    border-radius: 1vh;
    padding: 1vh 2vh;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    transition: 0.25s all ease;
    font-family: 'Open Sans', sans-serif;
    &:hover{
        cursor: pointer;
        padding: 1.25vh 2.5vh;
        font-size: 22px;
    }
    margin-bottom: 4vh;
`;

export default class Resources extends React.Component {
    render() {
        return (
            <AllContainer>
                <Title>Resources</Title>
                <ResourceContainer>
                    {/* when a resource is ready, just replace 'comingsoon' with the complete URL of the resource */}
                    <a href="http://tinyurl.com/pitchathon-data-priv-workshop" target="_blank" rel="noreferrer"><ResourceButton>Data Privacy Workshop</ResourceButton></a>
                    <a href="http://tinyurl.com/pitchathon-sust-tech-workshop" target="_blank" rel="noreferrer"><ResourceButton>Sustainability Workshop</ResourceButton></a>
                    <a href="http://tinyurl.com/pitchathon-example-slides" target="_blank" rel="noreferrer"><ResourceButton>Example Pitch Slides</ResourceButton></a>
                    <a href="http://tinyurl.com/pitchathon-example-pitch" target="_blank" rel="noreferrer"><ResourceButton>Example Pitch Recording</ResourceButton></a>
                    <a href={JudgingRubric} target="_blank" rel="noreferrer"><ResourceButton>Judging Rubric</ResourceButton></a>
                    <a href="http://tinyurl.com/policy-pitchathon-submissions" target="_blank" rel="noreferrer"><ResourceButton>SUBMIT YOUR PITCH HERE!</ResourceButton></a>
                </ResourceContainer>
            </AllContainer>
        )
    }
}
