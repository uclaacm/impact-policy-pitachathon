import React from "react";
import styled from "styled-components";
import Event from "../components/Event";

const Container = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class Schedule extends React.Component {
    render() {
        return (
            <div>
                Schedule
                <Container>
                    <Event time="00:00 AM" description="blurb blurb blurb"></Event>
                    <Event time="00:00 AM" description="blurb blurb blurb"></Event>
                    <Event time="00:00 AM" description="blurb blurb blurb"></Event>
                </Container>
            </div>
        )
    }
}
