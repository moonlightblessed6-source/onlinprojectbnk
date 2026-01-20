import styled from "styled-components";




export const Dashboards = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;
background-color: #e3e7f2;

.main-dashboard{
    margin: auto;
    width: 90%;
    /* margin-bottom: 10px; */
    padding: 20px;
}

.accoutninfo{
    background: linear-gradient(to right, #0d8bda, transparent);

    margin-top:5rem;
    color: white;
    background-color: #1ba2f5;
    width: 100%;
    border-radius: 10px;
    padding: 20px 20px;
}

.names{
    display: flex;
    justify-content: space-between;
}

.names p:first-child{
    font-size: 15px;
}

.names p:nth-child(2){
    font-size: 12px;
}


.banaces{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 8px;
}
.banaces p{
    font-size: 12px;
}
.banaces span{
    font-size: 25px;
}

.actives{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.actives p:nth-child(2){
    font-size: 12px;
}
.acives {
    display: flex;
    gap: 5px;
    font-size: 12px;
}
.acives span{
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
}


.sendtopup{
background-color: #2a3755;
display: flex;
justify-content: center;
border-radius: 10px;
justify-content: space-between;
color: white;
margin-block: 10px;
padding: 10px 20px;
}

.onebyne{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
}

.onebyne1{
        display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
}

.onebyne1 span{
background-color: #f8c728;
    padding: 10px 10px;;
    border-radius: 10px;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
      cursor: pointer;

}

.onebyne, .onebyne1 > p{
    cursor: pointer;
}
.onebyne span{
    padding: 10px 10px;
    background-color: #4a5669;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}




.trasferquick{
    padding: 10px 20px;
    font-size: 18px;
}

.quicktransfrbox{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.myowns{
    flex: 1;
    height: 150px;
    border-radius: 10px;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    gap: 20px;
}

.addes, .addess{
   display: flex;
   flex-direction: column;
   gap: 10px;
   font-size: 13px;
}

.addes span{
    padding: 15px 15px;
    border-radius: 15px;
    border: 1px dashed lightgray;
    cursor: pointer;
    font-size: 25px;
}
.addess span{
    padding: 25px 10px;
    border-radius: 140px;
    font-size: 25px;
    cursor: pointer;
 }

.myss{
        flex: 1;
    border: 1px solid white;
    height: 150px;
    border-radius: 10px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 10px;
    background-color: white;
}

.myss div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 14px;
}

.myss div span{
    padding: 15px 18px;
    border-radius: 15px;
    background-color: #d9eaf8;
    color: #06b7f8;
    width: fit-content;
    font-size: 20px;
    text-align: center;
}







@media screen and (max-width: 630px) {
    .main-dashboard{
width: 100%;
    }
    
}
@media screen and (max-width: 576px) {
    .main-dashboard{
width: 100%;
    }

    .sendtopup{
        font-size: 12px;
    }
    
}
@media screen and (max-width: 440px) {
    .main-dashboard{
width: 100%;
    }

    .sendtopup{
        font-size: 10px;
    }

    .myss div p{
        font-size: 10px;
    }

    .addes, .addess > p{
         font-size: 10px;
    }

    .names p:nth-child(1){
        font-size: 12px;
    }
    
    .names p:nth-child(2){
        font-size: 10px;
    }

    .actives p:nth-child(1){
        font-size: 10px;
    }
    .actives p:nth-child(2){
        font-size: 10px;
    }
    
}
`
