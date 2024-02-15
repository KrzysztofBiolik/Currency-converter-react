import styled from "styled-components";

export const Container = styled.div`
    flex-basis:700px;
    margin: 20px;
    padding: 0 20px;
    background-color: ${({theme}) => theme.color.beige};
    border-radius: 20px;
    box-shadow: 0 0 40px ${({theme}) => theme.color.grey};
`;

