import styled from "styled-components";

export const SourcingStyle = styled.div`
  & body {
    background: #dfdfdf;
    margin: 0px;
    & .contenr {
      margin: 0px 50px;
      @media (max-width: 680px) {
        margin: 0px 20px;
      }

      & .body {
        text-align: center;
        padding: 100px;
        margin: 10px 0px;
        background: url(/image/banner_bg.svg);
        border-radius: 15px;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        & .body_pls {
          background: #ffffff;
          width: 50%;
          height: 44px;
          display: flex;
          padding: 0px 5px;
          margin: 8px 0px;
          align-items: center;
          border-radius: 5px;
          box-shadow: rgb(42, 44, 53) 0px 2px 0px;
          @media (max-width: 600px) {
            width: 100%;
            @media (max-width: 375px) {
              width: 220%;
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

        & .body_botton {
          & .body_botton,
          > select {
            border: 1px solid rgb(42, 44, 53);
            box-shadow: rgb(42, 44, 53) 0px 2px 0px;
            border-radius: 1000px;
            background: #f0f3f4;
            padding: 9px 20px;
            margin: 24px 5px;
          }
        }
        & .body,
        > h1 {
          font-size: 48px;
          @media (max-width: 900px) {
            font-size: 40px;
            @media (max-width: 760px) {
              font-size: 30px;
              @media (max-width: 420px) {
                font-size: 20px;
              }
            }
          }
        }

        & .body,
        > p {
          font-size: 17px;
          font-family: "Golos";
          @media (max-width: 650px) {
            font-size: 13px;
          }
        }
      }
      & .body_img {
        & .body_img_on {
          position: absolute;
          width: 180px;
          height: 160px;
          right: 91px;
          top: 533px;
          @media (max-width: 750px) {
            display: none;
          }
        }
      }
      & .body_on {
        margin: 35px 0px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        h2 {
          font-size: 35px;
          @media (max-width: 650px) {
            font-size: 25px;
          }
        }
        & .nasha {
          & .nasha_on {
            display: flex;
            align-items: center;
            & img {
              width: 5%;
              height: 6%;
              margin: 0px 10px;
            }
            & h4 {
              font-size: 24px;
              margin-top: 24px;
              @media (max-width: 650px) {
                font-size: 18px;
              }
            }
          }
          & .nasha_tu {
            display: flex;
            align-items: center;
            & img {
              width: 5%;
              height: 6%;
              margin: 0px 10px;
            }
            & h4 {
              font-size: 24px;
              margin-top: 24px;
              @media (max-width: 650px) {
                font-size: 18px;
              }
            }
          }

          & p {
            font-size: 20px;
            padding-left: 42px;
            margin: 0px;
            @media (max-width: 650px) {
              font-size: 17px;
            }
          }
        }
        @media (max-width: 650px) {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }

      & .body_to {
        display: flex;
        margin: 36px 0px;
        justify-content: space-between;
        @media (max-width: 1300px) {
          overflow-x: scroll;
          width: 100%;
        }
        & .body_to_on {
          background: url(/image/banner_ag.svg);
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          border-radius: 18px;
          margin-right: 24px;
          background-size: cover;
          width: 420px;
          height: 365px;
          @media (max-width: 500px) {
            min-width: 300px;
          }
          & img {
            width: 197px;
            height: 170px;
            padding: 0px 112px;
            margin-top: 38px;
            @media (max-width: 760px) {
              width: 50%;
            }
          }
          & div {
            font-size: 16px;
            font-family: emoji;
            padding-left: 36px;
          }
          & p {
            font-size: 13px;
            margin: 5px 36px 36px 36px;
            @media (max-width: 780px) {
              /* font-size: 13px;
                    margin: 5px 36px 36px 36px */
            }
          }
        }
        & .body_to_to {
          background: url(/image/banner_dg.svg);
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          border-radius: 18px;
          margin-right: 24px;
          background-size: cover;
          width: 420px;
          height: 365px;
          & img {
            width: 197px;
            height: 170px;
            padding: 0px 112px;
            margin-top: 38px;
          }
          & div {
            font-size: 16px;
            font-family: emoji;
            padding-left: 36px;
          }
          & p {
            font-size: 13px;
            margin: 5px 36px 36px 36px;
          }
        }
        & .body_to_sri {
          background: url(/image/banner_cg.svg);
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          border-radius: 18px;
          background-size: cover;
          width: 420px;
          height: 365px;
          & img {
            width: 197px;
            height: 170px;
            padding: 0px 112px;
            margin-top: 38px;
          }
          & div {
            font-size: 16px;
            font-family: emoji;
            padding-left: 36px;
          }
          & p {
            font-size: 13px;
            margin: 5px 36px 36px 36px;
          }
          @media (max-width: 760px) {
          }
        }
      }

      & .body_sri {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: url(/image/banner_g.png);
        border-radius: 15px;
        background-size: cover;
        margin: 36px 0px;
        height: 500px;
        & .body_sri_on {
          font-size: 30px;
          margin-left: 119px;
          @media (max-width: 580px) {
            font-size: 27px;
            margin-left: 60px;
            @media (max-width: 420px) {
              font-size: 21px;
              margin-left: 30px;
            }
          }
          & button {
            border: 1px solid rgb(42, 44, 53);
            box-shadow: rgb(42, 44, 53) 0px 2px 0px;
            border-radius: 1000px;
            background: rgb(240, 243, 244);
            padding: 15px 20px;
            margin: 24px 0px;
            display: flex;
            align-items: center;
            & img {
              width: 12px;
              height: 14px;
              margin: 0px 10px 0px 0px;
            }
          }
          & .sri_img {
            position: absolute;
            width: 14%;
            height: 38%;
            right: 452px;
            top: 1883px;
            @media (max-width: 1250px) {
              display: none;
            }
          }
        }
        & .img {
          width: 33%;
          height: 423px;
          margin-right: 70px;
          @media (max-width: 900px) {
            display: none;
          }
        }
      }

      & .main {
        margin-bottom: 100px;
        & h2 {
          font-size: 35px;
          @media (max-width: 650px) {
            font-size: 25px;
          }
        }
        & .main_card {
          width: 445px;
          @media (max-width: 590px) {
            width: 290px;
          }
        }
        & .card {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          @media (max-width: 1050px) {
            display: flex;
            -webkit-box-pack: justify;
            flex-direction: column;
            align-content: center;
            flex-wrap: wrap;
          }
          /* width: 25%;
    margin: 30px 0 0 37%; */
          & .card_on {
            width: 90%;
            height: 295px;
            padding: 24px;
            margin-bottom: 34px;
            position: relative;
            background: #ffffff;
            border-radius: 15px;
            @media (max-width: 380px) {
              width: 85%;
              height: 310px;
            }
          }
          & .bookmark,
          > img {
            position: absolute;
            top: -8px;
            right: 20px;
            & img {
              width: 36px;
              height: 40px;
            }
          }
          & .pre {
            display: flex;
            align-items: center;
            & img {
              width: 18px;
              height: 18px;
              margin-right: 7px;
            }
            & pre {
              font-size: 10px;
            }
          }
          & h6 {
            font-size: 19px;
            margin: 0px;
            line-height: 145%;
            font-family: emoji;
          }
          & u {
            color: #5e4eda;
            font-size: 13px;
          }
          & p {
            font-size: 12px;
            line-height: 153%;
            color: #847f99;
          }
          & .button {
            & .button_on {
              width: 134px;
              height: 27px;
              font-size: 10px;
              background: #f0f3f4;
              margin-right: 11px;
              border: 1px solid #2a2c35;
              box-shadow: 0px 2px 0px #2a2c35;
              border-radius: 1000px;
            }
            & .button_to {
              width: 52px;
              height: 27px;
              font-size: 10px;
              background: #f0f3f4;
              margin-right: 11px;
              border: 1px solid #2a2c35;
              box-shadow: 0px 2px 0px #2a2c35;
              border-radius: 1000px;
            }
            & .button_sri {
              width: 34px;
              height: 27px;
              font-size: 10px;
              background: #f0f3f4;
              border: 1px solid #2a2c35;
              box-shadow: 0px 2px 0px #2a2c35;
              border-radius: 1000px;
            }
          }
          & .price {
            display: flex;
            margin-top: 12px;
            align-items: center;
            & h6 {
              font-size: 24px;
              margin-right: 4px;
            }
          }
        }
        & .main_button {
          background: #2a2c35;
          border-radius: 1000px;
          width: 20%;
          height: 55px;
          color: #ffffff;
          margin-left: 40%;
          margin-top: 50px;
          @media (max-width: 760px) {
            font-size: 13px;
            @media (max-width: 500px) {
              font-size: 9px;
            }
          }
        }
      }
      & .faq {
        & h2 {
          font-size: 35px;
          margin: 30px 0px;
          @media (max-width: 650px) {
            font-size: 25px;
          }
        }
        & .faq_on {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 40px;
          & .accordion_on {
            width: 49%;
            @media (max-width: 900px) {
              width: 100%;
              margin-bottom: 22px;
            }

            & .accordion {
              /* display: flex; */
              padding: 23px;
              width: 100%;
              min-height: 60px;
              background: #ffffff;
              border: 1px solid #2a2c35;
              border-radius: 12px;
              align-items: center;
              justify-content: space-between;
              /* @media (max-width: 800px){
                    width: 600px;
                        @media (max-width: 700px){
                        width: 500px;
                            @media (max-width: 580px){
                            width: 450px;
                                @media (max-width: 530px){
                                width: 395px;
                                @media (max-width: 470px){
                                    width: 230px;
                                    }
                                 }
                            }
                        }
                    } */
              & .accordion-btn__items {
                display: flex;
                justify-content: space-between;
                & img {
                  transform: rotate(0deg);
                  transition: transform 150ms ease;
                  /* transform:${(isActive) =>
                    isActive?.isActive !== 0 ? "rotate(180deg)" : ""}; */
                }
              }
              & .active {
                & img {
                  transform: rotate(180deg);
                  transition: transform 150ms ease;
                }
              }
            }
          }

          /* & .accordion:active{
                    & img{
                        transform: rotate(90deg);
                    }
            
                } */
          @media (max-width: 680px) {
            justify-content: center;
          }
        }
      }
      & .nav {
        background: url(/image/banner.png);
        background-size: cover;
        height: 420px;
        border-radius: 17px;
        padding-top: 110px;
        text-align: center;
        margin-top: 40px;
        & h2 {
          font-style: revert;
          font-weight: 600;
          font-size: 48px;
          @media (max-width: 800px) {
            font-size: 35px;
          }
        }
        & p {
          font-family: "Golos";
          font-weight: 400;
          font-size: 18px;
          line-height: 158%;
          @media (max-width: 800px) {
            font-size: 15px;
          }
        }
        & button {
          background: #f0f3f4;
          border: 1px solid #2a2c35;
          box-shadow: 0px 3px 0px #2a2c35;
          border-radius: 1000px;
          width: 219px;
          height: 59px;
          font-weight: 500;
          font-size: 17px;
          color: #2a2c35;
        }
      }
      & .nav_info_card {
        font-size: 35px;
        margin: 30px 0px;
      }
      & .info_card {
        display: flex;
        margin-bottom: 81px;
        justify-content: space-between;
        overflow-x: scroll;

        & .info_card_on {
          width: 390px;
          height: 315px;
          padding: 24px;
          background: #ffffff;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
          border-radius: 15px;
          @media (max-width: 1450px) {
            width: 100%;
            height: 350px;
            margin-right: 10px;
          }
          & .info_img {
            width: 130px;
            height: 137px;
            margin-left: 83px;
            margin-top: 25px;
            @media (max-width: 1000px) {
              margin-left: 60px;
              @media (max-width: 900px) {
                margin-left: 30px;
              }
            }
          }
          & .info_div {
            display: flex;
            & img {
              width: 21px;
              height: 21px;
              margin-right: 10px;
            }
            & div {
              font-size: 14px;
            }
          }
          & p {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
          }
          & u {
            font-size: 14px;
          }
        }
        & .info_card_to {
          width: 390px;
          height: 315px;
          padding: 24px;
          background: #ffffff;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
          border-radius: 15px;
          @media (max-width: 1450px) {
            width: 100%;
            height: 350px;
            margin-right: 10px;
          }
          & .info_img {
            width: 130px;
            height: 137px;
            margin-left: 83px;
            margin-top: 25px;
            @media (max-width: 1000px) {
              margin-left: 60px;
              @media (max-width: 900px) {
                margin-left: 30px;
              }
            }
          }
          & .info_div {
            display: flex;
            & img {
              width: 21px;
              height: 21px;
              margin-right: 10px;
            }
            & div {
              font-size: 14px;
            }
          }
          & p {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
          }
          & u {
            font-size: 14px;
          }
        }
        & .info_card_sri {
          width: 390px;
          height: 315px;
          padding: 24px;
          background: #ffffff;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
          border-radius: 15px;
          @media (max-width: 1450px) {
            width: 100%;
            height: 350px;
            margin-right: 10px;
          }
          & .info_img {
            width: 130px;
            height: 137px;
            margin-left: 83px;
            margin-top: 25px;
            @media (max-width: 1000px) {
              margin-left: 60px;
              @media (max-width: 900px) {
                margin-left: 30px;
              }
            }
          }
          & .info_div {
            display: flex;
            & img {
              width: 21px;
              height: 21px;
              margin-right: 10px;
            }
            & div {
              font-size: 14px;
            }
          }
          & p {
            font-weight: 500;
            font-size: 18px;
            line-height: 140%;
          }
          & u {
            font-size: 14px;
          }
        }
      }
      & .footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 200px;
        align-items: flex-start;
        line-height: 200%;
        margin-top: 50px;
        & .foot_img {
          height: 30px;
          margin-right: 150px;
        }
        & .foot_button {
          & button {
            width: 208px;
            height: 48px;
            display: flex;
            background: #f0f3f4;
            border: 1px solid #2a2c35;
            box-shadow: 0px 2px 0px #2a2c35;
            border-radius: 1000px;
            align-items: center;
            justify-content: center;
            @media (max-width: 1000px) {
              width: 100%;
            }
            & img {
              margin-right: 15px;
            }
          }
        }
        @media (max-width: 820px) {
          height: 300px;
          @media (max-width: 410px) {
            height: 450px;
          }
        }
      }
    }
  }
`;
