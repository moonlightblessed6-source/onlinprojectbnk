
import styled from "styled-components"

export const Craeteaccount = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;

.mainlogin{
    display: flex;
}
.first{
    background-color: #0c71a9;
    color: white;
    flex: 1;
    padding: 90px 20px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    
}

.imagspan{
    background-color: #4599c6;
    padding: 10px 10px;
    border-radius: 10px;
    width: fit-content;
    margin-bottom: 10px;
}

.imagspan div{
    width: 120px;
}

.imagspan div img{
  width: 100%;
}


.heade{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
}

.heade p{
    font-size: 14px;
    font-size: 500;
}
.heade span{
    font-size: 13px;
    opacity: .8;
    font-size: 600;
}


.boxss{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 30px;
}


.boxmaon{

    display: flex;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
    padding: 10px 10px;
    border-radius: 10px;
    font-size: 13px;
    background-color: #1c83ba;
}

.icos{
    font-size: 20px;
    padding: 7px 7px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #499cc8;
}







.seconds{
    flex: 1;
    padding: 90px 20px;
}


form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px;
    width: fit-content;
    margin: auto;
    border-radius: 10px;
    box-shadow: 1px 1px 7px;
}

.signin{
    font-size: 16px;
    font-weight: 700;
    color: #0c71a9;
}

.topis{
        font-size: 12px;
    font-weight: 500;
    opacity: .7;
}

.formslogin{
    width: 100%;
    margin-top: 30px;
    gap: 10px;
}

label{
    display: block;
    font-size: 12px;
    margin-block: 2px;
}

.mylabel{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: 70px;
    margin: 0;
    margin-top: 20px;
    box-sizing: border-box;
    width: 100%;
}
.mylabel span{
    font-size: 11px;
    margin-block: 2px;
    color: blue;
    text-decoration: underline;
}
input{
    width: 100%;
    font-size: 16px;
    padding: 10px 10px;
    border: 1px solid lightgray;
    outline: none;
    border-radius: 10px;
}

input::placeholder {
  color: #999;
  font-size: 12px;
  font-style: italic;
}


.satyligin{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 5px;
    align-items: center;
    font-size: 12px;
}


.signinp button{
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border: none ;
    background-color: #0c71a9;
    color: white;
    border-radius: 8px;
    cursor: pointer;
}

.neswest{
    font-size: 12px;
    margin-block: 7px;
}
.signins button{
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    border: none ;
    color: #0c71a9;
    background-color: lightgray;
    border-radius: 8px;
    cursor: pointer;
}

.last{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    margin-top: 10px;
}
.last span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    opacity: .7;
}

.lastlast{
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: fit-content; */
    margin: auto;
    font-size: 10px;
    margin-top: 10px;
    text-align: center;
}

`