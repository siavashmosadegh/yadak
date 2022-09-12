import styled from "styled-components";

export const FormContainer = styled.div`

    width: 100%;
    height: 100%;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    input {
        border: none;
        width: 80%;
        height: 50px;
        text-align: right;
        padding-right: 100px;
        background-color: gray;
        opacity: 0.1;
        color: black;
        :hover {
            border: none;
        }
        :focus {
            border: none;
        }
    }
`;