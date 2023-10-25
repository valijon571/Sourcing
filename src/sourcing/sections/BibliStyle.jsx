import styled from "styled-components";
export const BibliStyle =styled.div`
    & .imy {
        background: #FFFFFF;
        width: 98%;
        height: 44px;
        display: flex;
        padding: 0px 15px;
        margin: 8px 0px;
        align-items: center;
        border-radius: 5px;
        box-shadow: rgb(42, 44, 53) 0px 2px 0px;
        @media (max-width: 700px){
            width: 94%;
            @media (max-width: 480px){
            width: 86%;
        }
        }
                 & input {
                    width: 50%;
                    height: 33px;
                    border: none;
                    outline: none;
                }
                & img {
                    text-align: center;
                    width: 5%px;
                    margin: 7px;
                }
    }
    & .link{
        display: flex;
        margin-top: 32px;
        margin-bottom: 50px;
        @media (max-width: 480px){
            display: flex;
            flex-direction: column;
        }
        & select {
            border-radius: 100px;
            border: 1px solid var(--primary-black, #2A2C35);
            background: var(--neutral-white, #FFF);
            box-shadow: 0px 2px 0px 0px #2A2C35;
            display: flex;
            height: 48px;
            padding: 0px 15px;
            margin-right: 16px;
            align-items: center;
            @media (max-width: 480px){
                margin-bottom: 8px;
            }
        }
    }
`