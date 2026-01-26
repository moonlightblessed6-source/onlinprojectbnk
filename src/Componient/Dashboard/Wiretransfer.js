import styled from "styled-components";




export const WiretransferWrapper = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;
.profilewrapper{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.backes{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    padding: 20px 0px;
    cursor: pointer;
}

.amount{
    font-size: 15px;
    font-family: "Zalando Sans Expanded", sans-serif;
}

form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
form div{
   padding: 7px 0px;
    width: 100%;
}

input{
padding: 10px 15px;
width: 100%;
border-radius: 8px;
font-size: 16px;
outline: none;
border: 1px solid lightgray;
}

label{
    display: block;
    font-size: 13px;
    padding: 3px 2px;
}

.btn{
    margin-bottom: 10px;
}

.btn button{
    padding: 10px 40px;
    width: 100%;
    border-radius: 8px;
    border: none;
    background-color: green;
    color: white;
    font-family: "Zalando Sans Expanded", sans-serif;
    font-size: 16px;
    cursor: pointer;
}


.otp-modal {
    position: fixed;
     border: 1px solid yellow;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: fit-content;
    background-color: lightgray;
    padding: 20px 20px;
    border-radius: 8px;
}

.close{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.close p{
    color: red;
    font-size: 25px;
    cursor: pointer;
}

.otp-modal h3{
    font-size: 15px;
    margin-block:5px;
   
}

.mysumit{
    padding: 10px 10px;
    width: 100%;
    margin-block: 3px;
    outline: none;
    border: none;
    background-color: green;
    color: white;
        font-family: "Zalando Sans Expanded", sans-serif;
    font-size: 16px;
    border-radius: 8px;
}
.cancels{
    padding: 10px 10px;
    width: 100%;
    margin-block: 3px;
    outline: none;
    border: none;
    background-color: red;
    color: white;
    font-family: "Zalando Sans Expanded", sans-serif;
    font-size: 16px;
    border-radius: 8px;
}


@media screen and (max-width: 925px) {
   .profilewrapper{
    width: 95%;
   

}

form div{
    width: 100%;
}
}

`