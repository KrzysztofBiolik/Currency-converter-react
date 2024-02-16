import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
`;

export const Header = styled.h1`
    text-align: center;
    font-size: 40px;
    color: ${({ theme }) => theme.color.chocolate}; 
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 150px;
    display: inline-block;
    margin-right: 10px;
    font-size: 20px;
`;

export const Field = styled.input`
    border: 2px solid ${({ theme }) => theme.color.distantValley};
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    max-width: 350px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.chocolate};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 25px;

    &:hover{
    filter: brightness(110%);
    }

    &:active{
    filter:brightness(120%);
    }
`;

export const Loading = styled.p`
    color: green;
    text-align: center;
    font-size: 30px;
`;
export const Failure = styled.p`
    color: red;
    text-align: center;
    font-size: 30px;
`;
