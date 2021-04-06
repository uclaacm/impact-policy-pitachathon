import React from "react";
import styled from "styled-components";

const ResourceContainer = styled("div")`
display: flex;
flex-direction: row;
padding-top: 3vh;
padding-bottom: 3vh;
`;

const AllContainer = styled("div")`
display: flex;
flex-direction: column;
`;


export default class Resources extends React.Component {
    render() {
        return (
            <div>
                Resources
                <AllContainer>
                    <ResourceContainer>

                    </ResourceContainer>
                </AllContainer>
            </div>
        )
    }
}
