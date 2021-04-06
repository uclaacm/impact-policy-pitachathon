import React from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard.js";

const Container = styled("div")`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export default class Profiles extends React.Component {
    render() {
        return (
            <div>
                Profiles
                <Container>
                    <ProfileCard name="First Last" description="blurb blurb blurb" pic="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg"></ProfileCard>
                    <ProfileCard name="First Last" description="blurb blurb blurb" pic="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg"></ProfileCard>
                    <ProfileCard name="First Last" description="blurb blurb blurb" pic="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg"></ProfileCard>
                </Container>
            </div>
        )
    }
}
