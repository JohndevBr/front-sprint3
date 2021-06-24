import styled from "styled-components";

export const Content = styled.ul `
    display: flex;
    margin: 2rem auto;
    align-items:center;
    list-style: none;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;

    li {
        display: flex;
        align-items: center;
        color: #000000;
        gap: 0.5rem;
        margin-left: 0.5rem;
        margin-bottom:1rem;
        padding: 0.5rem;

        &:hover {
            background-color: #F6F6F6;
            cursor: pointer;
        }

        &:first-child {
            margin-left: 0;
        }
    }
`