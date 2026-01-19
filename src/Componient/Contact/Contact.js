import styled from "styled-components";





export const Contactus = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;

.mainaboutus{
background-color: #112c38;
height: 200px;
width: 100%;
}

.topics{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: fit-content;
    background-color: #283b4a;
    border-radius: 10px;
    padding: 9px 9px;
    font-size: 12px;
}

.mainaboutus{
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    font-size: 14px;
    gap: 10px;
    padding: 20px;
}

.mainaboutus span{
    font-size: 12px;
}




.contactform{
    width: 90%;
    margin: 2rem auto;
    display: flex;
}

.firsdiv{
    flex: 1;
}

form{
    /* border: 1px solid green; */
    width: fit-content;
    margin: auto;
    padding: 15px 30px;
    background-color: #f3f4f5;
    border-radius: 10px;
}

.mycontacfom{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
}

.firstname{
    display: flex;
    width: 100%;
    gap: 5px;
}

.firstname div{
    width: 100%;
}

input{
    width: 100%;
    padding: 10px 14px;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 16px;
}

input::placeholder{
     color: #999;
  font-size: 12px;
  font-style: italic;
}

textarea{
    width: 100%;
    padding: 10px 10px;
    height: 100px;
}
textarea::placeholder{
     color: #999;
  font-size: 12px;
  font-style: italic;
}

label{
    font-size: 12px;
    display: block;
}

.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.btn button{
    padding: 13px 30px;
    border-radius: 10px;
    border: none;
    background-color: #0284c7;
    color: white;
    font-size: 15px;
}



.seconddiv{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.seconddiv h1{
    font-size: 25px;
    
}
.seconddiv p{
    font-size: 14px;
    opacity: .8;
}

.intouhbox{
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}

.boxs{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
}

.writeips{
    display: flex;
    flex-direction: column;
    font-size: 14px;
    justify-content: flex-start;
}

.conshere1{
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0284c7;
    background-color: #e0f2fe;
    font-size: 18px;
}
.conshere2{
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0d9488;
    background-color: #ccfbf1;
    font-size: 18px;
}
.conshere3{
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9333ea;
    background-color: #f3e8ff;
    font-size: 18px;
}
.conshere4{
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ea580c;
    background-color: #ffedd5;
    font-size: 18px;
}







.locationmap{
    background-color: #f9fafb;
    padding: 20px 0px;
}

.find{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    font-weight: 900;
}

.find span{
    margin-bottom: 10px;
    opacity: .8;
        font-size: 13px;
    font-weight: 400;
}

`