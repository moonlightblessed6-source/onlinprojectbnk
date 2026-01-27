import styled from "styled-components";

export const Nav = styled.main`
  background-color: #27324c;
font-family: "Zalando Sans Expanded", sans-serif;
  .navbars {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 10px 0px;
    cursor: pointer;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 14px;
  }

  .dspps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
  }

  .iconss {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
  }

  .right div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  .left {
    width: 110px;
  }

  .left img {
    width: 100%;
  }

  .name {
    position: relative;
  }


  .names{
    font-size: 15x;
  }

  .dropdown {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 20px;
    background-color: #27324c;
    color: white;
    padding: 10px 10px;
    border-radius: 7px;
    width: 150px;
    z-index: 1000;
  }

  .dropdown span {
    font-size: 15px;
    cursor: pointer;
    margin-block: 15px;
    text-transform: uppercase;


  }

  /* ================================== */
  @media screen and (max-width: 411px) {
    .dropdown {
      margin-right: 50px;
    }
  }

  @media screen and (max-width: 467px) {
    .dropdown {
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 577px) {
    .dropdown {
      margin-right: 20px;
    }
  }

  @media screen and (max-width: 925px) {
    .navbars {
      width: 95%;
    }

    .dropdown {
      margin-right: 90px;
    }
  }
`;
