import React from "react";
import styled from "styled-components";
import banner from "../assets/banner-website.svg";

export default class Landing extends React.Component {
    render() {
        return (
            <div>
                {/* resize banner */}
                <img src={banner} />
                ACM Impact is blurb blurb blurb
            </div>
        )
    }
}
  