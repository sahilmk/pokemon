import styled from "styled-components";
import { color } from "../../Theme/variable";

export const Card = styled.div`
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 20px, rgb(0 0 0 / 8%) 0px 0px 40px;
    height: auto;
    width: 600px;
    padding: 20px;

    .label{
        font-weight: bold;
    }

    .flexdiv{
        display: flex;
        justify-content: end;
    }

    .ability{
        justify-content: center;
    }

    .abilitybutton{
        background-color: ${color.keppelColor};
        color: ${color.whiteColor};
        padding: 10px;
        margin-right: 5px;
    }
`