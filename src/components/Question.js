import React from "react";
import styled from "styled-components";

const QuestionContainer = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 24px;
    color: #7300CD;
`;

const Answer = styled("div")`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    display: flex;
    padding-top: 1vh;
    text-align: left;
`;

const AllContainer = styled("div")`
    display:flex;
    flex-direction: column;
    padding-top: 3vh;
    padding-bottom: 3vh;
    align-items: flex-start;
    justify-content: flex-start;
`

export default class Question extends React.Component {
    render() {
        return (
            <AllContainer>
                <QuestionContainer>{this.props.question}</QuestionContainer>
                <Answer>{this.props.answer}</Answer>
            </AllContainer>
        )
    }
}