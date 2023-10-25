import styled from "styled-components";
export const PublkStyle = styled.div`
            & .publi_body{
            & pre{
                font-size: 16px;
                @media (max-width: 550px){
                    font-size: 9px;
                }
            }
            & .paper{
                & .frame{
                    display: flex;
                    align-content: center;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    
                        & img {
                            width: 22%;
                            height: 22%;
                            padding-right: 50px;
                        }
                        & .itme {
                            &  h4 {
                                font-size: 24px;
                                margin: 30px 0px 0px 0px;
                                @media (max-width: 760px){
                                    font-size: 20px;
                                    margin: 30px 0px 0px 0px;
                                }
                            }
                            & .p {
                                @media (max-width: 800px){
                                    font-size: 13px;
                                }
                            }
                        }
                }
                & button {
                    border-radius: 1000px;
                    border: 1px solid var(--primary-black, #2A2C35);
                    background: var(--primary-black, #2A2C35);
                    color: #FFF;
                    font-size: 16px;
                    width: 181px;
                    height: 50px;
                    margin-right: 95px;
                    font-weight: 500;
                }
                width: 95%;
                height: 192px;
                background: url(./image/Paper.png) ;
                background: url(./image/Shapes.png) ;
                border-radius: 15px;
                box-shadow: 0px 2px 0px 0px #2A2C35;
                border: 1px solid var(--primary-black, #2A2C35);
                display: flex;
                justify-content: space-between;
                align-items: center;    
                margin: 35px 0px;  
                padding-left: 59px;  
                @media (max-width: 760px){
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                }                   
            }
            & h2{
                font-size: 36px;
                font-family: Lora;
                font-weight: 600;
                line-height: 140%;
            }
            & .set_of {
                margin: 30px 0px;
                display: flex;
                @media (max-width: 650px){
                        margin: 30px 0px;
                        display: flex;
                        flex-wrap: nowrap;
                        flex-direction: column;
                    }
                & .tag {
                border-radius: 1000px;
                border: 1px solid var(--primary-black, #2A2C35);
                background: var(--neutral-white, #FFF);
                box-shadow: 0px 2px 0px 0px #2A2C35;
                padding: 12px 16px;
                margin-right: 12px;
                display: inherit;
                font-size: 14px;
                font-family: Golos;
                align-items: center;
                @media (max-width: 650px){
                    margin-bottom: 10px;
                }
                }
                & .tag_on{
                    border-radius: 1000px;
                    border: 1px solid var(--primary-black, #2A2C35);
                    background: var(--neutral-light-blue, #F0F3F4);
                    box-shadow: 0px 2px 0px 0px #2A2C35;
                    padding: 12px 16px;
                    margin-right: 12px;
                    @media (max-width: 650px){
                    margin-bottom: 10px;
                }
                    
                }
            
            }
        }
`