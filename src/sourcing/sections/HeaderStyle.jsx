import styled from "styled-components";
export const HeaderStyle = styled.div`
  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;

    & .header_on {
      display: flex;
      align-items: center;
      & .header_on,
      > img {
        height: 30px;
        margin-right: 10px;
      }
      & .bibl {
        border: 1px solid rgb(42, 44, 53);
        border-radius: 1000px;
        background: rgb(223, 223, 223);
        padding: 8px 16px;
        margin: 0px 5px;
        font-size: 14px;
        font-family: Golos;
        text-decoration: none;
        color: rgb(42, 44, 53);
      }
      & .header_on,
      > button {
        border: 1px solid #2a2c35;
        border-radius: 1000px;
        background: #dfdfdf;
        padding: 8px 16px;
        margin: 0px 5px;
      }
      @media (max-width: 420px) {
        display: none;
      }
    }

    & .header_tu {
      & .heder_tu,
      > select {
        border: 1px solid #2a2c35;
        border-radius: 1000px;
        background: #dfdfdf;
        padding: 8px 16px;
        margin: 0px 5px;
      }
      & .heder_tu,
      > button {
        border: 1px solid #2a2c35;
        box-shadow: 0px 2px 0px #2a2c35;
        border-radius: 1000px;
        background: #dfdfdf;
        padding: 8px 16px;
        margin: 0px 5px;
        & img {
          width: 14px;
          height: 14px;
          margin-right: 8px;
        }
      }
      & .menu-hamburger {
        float: right;
        margin-left: 15px;
        display: none;
        & .hamburger {
          width: 40px;
          display: block;
          color: black;
          height: 2px;
        }
        @media (max-width: 760px) {
          display: block;
        }
      }
      @media (max-width: 780px) {
        display: none;
      }
    }
  }
`;
