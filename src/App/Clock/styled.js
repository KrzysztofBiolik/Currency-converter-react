import styled from "styled-components";

export const Container = styled.div`
    text-align: right;
    padding-top: 20px;
    font-size: 18px;
    font-family: monospace;
    color: ${({theme}) => theme.color.black};
`;