import React from "react";
import styled from "styled-components";
import Question from "../components/Question";

const Container = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class FAQ extends React.Component {
    render() {
        return (
            <div>
                FAQ
                <Container>
                    <Question question="Question" answer="Answer here!"></Question>
                    <Question question="Question" answer="Answer here!"></Question>
                    <Question question="Question" answer="Answer here!"></Question>
                </Container>
            </div>
        )
    }
}
