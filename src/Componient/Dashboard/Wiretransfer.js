import styled from "styled-components";




export const WiretransferWrapper = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;
background-color: lightgray;
.profilewrapper{
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
     
    gap: 10px;
    
    /* box-shadow: 2px 2px 14px; */
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
    box-shadow: 1px 1px 10px;
    padding: 20px 20px;
    border-radius: 8px;
        background-color: white;
        margin-bottom: 10px;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: fit-content;
    background-color: white;
    padding: 20px 20px;
    border-radius: 8px;
    z-index: 10000;
     width: 40%;
}
.livdivs{
    border: 1px solid lightgray;
    padding: 20px;
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
    margin-top: -30px;
    background-color: white;
}

.otp-modal h3{
    font-size: 14px;
    margin-block:5px;
    font-weight: 500;
    margin-top: -30px;
    background-color: white;
   
}

h4{
    font-size: 12px;
    font-weight: 450;
    margin-top: 20px;
}


.myotpss{
    box-shadow: 0px 0px 0px;
    
    padding: 0px;
}

.myotpss input{
    margin-top: 10px;
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
    margin-top: 10px;
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

h3 >span{
    color:  #27324c;
    font-size: 13px;
    font-weight: 600;
}
h4 >span{
    color:  #27324c;
    font-size: 13px;
    font-weight: 600;
}


.conatcoffier{
    font-weight: 500;
    font-size: 12px;
    color:  red;
    /* text-align: center; */
    margin-top: 20px;
}

.conatcoffier span{
    color: black;
}


.messageshow{
      background-color: #d4edda; 
    padding: 8px 8px;
    width: fit-content;
    margin-top: -100px;
    position: fixed;
    color: #155724; 
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}



.phone-number-input-container {
  width: 100%;
  margin-bottom: 15px;
}

.phone-number-input-container label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

.input-wrapper {
  position: relative;
  display: flex;
  border: none;
}




.phone-number-input:focus,
.country-code-select:focus {
  outline: none;

}

.input-wrapper input,
.input-wrapper select {
  box-sizing: border-box;
}



.error-popup {
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff4d4f;
  color: white;
  padding: 14px 22px;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  z-index: 10000;
  font-size: 14px;
  font-weight: 500;
  animation: slideDown 0.3s ease;
   text-align: center;
  width: fit-content;
}

@keyframes slideDown {
  from { opacity: 0; transform: translate(-50%, -20px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}




@media screen and (max-width: 925px) {
   .profilewrapper{
    width: 95%;
   

}

form div{
    width: 100%;
}


.otp-modal {
   width: 95%;
}
}

`