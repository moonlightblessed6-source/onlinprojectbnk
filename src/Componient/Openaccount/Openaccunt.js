
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
    width: fit-content;
}



.infosslide{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    
}

.parts{
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
}

.parts.active{
    background-color: #0284c7;
    color: white;
}

.icons1{
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: black;
    background-color: lightgray;
}

.icons1 svg{
    font-size: 20px;
}

.icons1.active{
    color: white;
    background-color: #0284c7;
    width: fit-content;
}

.persoanlinf{
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.mytop{
    font-size: 14px;
    font-weight: 500;
}
.persoanlinf span{
    font-size: 12px;
    opacity: .7;
}




.formespersonal{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

label{
    display: block;
    font-size: 12px;
}

input, select{
    width: 100%;
    font-size: 16px;
    padding: 10px 10px;
    border: 1px solid lightgray;
    outline: none;
    border-radius: 8px;
}

input::placeholder{
    font-size: 12px;
    font-style: italic;
}


.btn{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-block: 20px;
}

.btn button{
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    border: none;
    background-color: #0284c7;
    color: white;
}

.btn button:hover{
    cursor: pointer;
    background-color: #0c71a9;
}
.btn1{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 20px;
}

.btn1 button{
    padding: 8px 15px;
    border-radius: 8px;
    font-size: 14px;
    border: none;
    background-color: #0284c7;
    color: white;
}

.btn1 button:hover{
    cursor: pointer;
    background-color: #0c71a9;
}

.alreadymemeber{
    text-align: center;
    font-size: 13px;
    margin-bottom: 40px;
}
.alreadymemeber span{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}


.reserved{
    text-align: center;
    font-size: 9px;

}
select {
  transition: font-size 0.2s ease;
}


.agreedtoterm{
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px;
    font-size: 10px;
   gap: 4px;
}

.agreedtoterm span{
    color: blue;
    text-decoration: underline;
}
`