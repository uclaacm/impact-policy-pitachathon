import React from "react";
import styled from "styled-components";

const QuestionContainer = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 24;
    display: flex;
    align-items: flex-start;
    color: #7300CD;
`;

const Answer = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 16;
`;

const AllContainer = styled("div")`
    display:flex;
    flex-direction: column;
    padding-top: 3vh;
    padding-bottom: 3vh;
`

export default class Question extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AllContainer>
                <QuestionContainer>{this.props.question}</QuestionContainer>
                <Answer>{this.props.answer}</Answer>
            </AllContainer>
        )
    }
}