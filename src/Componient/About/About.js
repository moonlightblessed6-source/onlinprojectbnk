import styled from "styled-components";



export const Aboutus = styled.main`
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
    text-align: center;
}

.mainaboutus span{
    font-size: 12px;
}


.Ourmission{
    width: 90%;
    margin: 3rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.write{
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
}

.imge{
    width: 200px;
    flex: 1;
    border-radius: 10px;
}

.imge img{
    width: 100%;
    border-radius: 10px;
}







.ourvalua{
background-color: #f9fafb;
padding: 20px 0px;
}

.mianvalue{
    width: 90%;
    margin: auto;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 14px;
}

.valibox{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 30px 0px;
    gap: 15px;
}

.boxxes{
 display: flex;
 flex-direction: column;
 gap: 10px;
}

.icon{
    background-color: #e0f2fe;
    color: #0284c7;
    padding: 8px 8px;
    border-radius: 10px;
    padding: 10px 10px;
    width: fit-content;
    
}
.ligh{
    background-color: #ccfbf1;
    color: #0d9488;
        padding: 8px 8px;
    border-radius: 10px;
    padding: 10px 10px;
    width: fit-content;
}
.heart{
    background-color: #f3e8ff;
    color: #9333ea;
        padding: 8px 8px;
    border-radius: 10px;
    padding: 10px 10px;
    width: fit-content;
}
.community{
    background-color: #ffedd5;
    color: #ea580c;
        padding: 8px 8px;
    border-radius: 10px;
    padding: 10px 10px;
    width: fit-content;
}






.Journeyout{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 30px 0px; 
}

.myp{
    margin-bottom: 20px;
    font-size: 14px;
}

.ourbox{
    display: flex;
    gap: 10px;
    align-items: center;
    
}
.ourbox1{
    display: flex;
    gap: 10px;
    align-items: center;
    
}

.ourjornrybox{
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.firsbox{
    font-size: 14px;
    padding: 20px 60px;
  
    border-radius: 10px;
    background-color: #e0f2fe;
    color: #0284c7;
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    justify-content: center;
}
.firsbox2{
    font-size: 14px;
    padding: 20px 60px;
  
    border-radius: 10px;
    background-color: #ccfbf1;
    color: #0d9488;
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    justify-content: center;
}
.firsbox3{
    font-size: 14px;
    padding: 20px 60px;
  
    border-radius: 10px;
    background-color: #f3e8ff;
    color: #9333ea;
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    justify-content: center;
}
.firsbox4{
    font-size: 14px;
    padding: 20px 60px;
  
    border-radius: 10px;
    background-color: #ffedd5;
    color: #ea580c;
    display: flex;
    flex-direction: column;
    gap: 7px;
    align-items: center;
    justify-content: center;
}

.secodnbx{
    display: flex;
    flex-direction: column;
    gap: 7px;
    font-size: 15px;
}
.secodnbx p{
    color: #0284c7;
}




.buythnumber{
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background-color: #0284c7;
    color: white;
    padding: 50px 0px;
}

.tops{
    margin-bottom: 20px;
    opacity: .8;
    font-size: 14px;
}
.bythnumberbox span{
    /* margin-bottom: 20px; */
    opacity: .9;
    font-size: 12px;
}

.bythnumberbox{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;
    margin: auto;
    text-align: center;
    gap: 10px;

}










.joinourfamily{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    gap: 7px;
}

.joinourfamily h1{
    font-size: 15px;
}

.joinourfamily p{
    font-size: 13px;
    opacity: .7;
    margin-bottom: 20px;
}

.btn{
    display: flex;
    gap: 20px;
}

.btn button{
    padding: 10px 20px;
    font-size: 15px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #0284c7;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.btn button:hover{
     background-color: #2495ce;
}









@media screen and (max-width: 815px){
   
    .Ourmission{
    width: 95%;
    flex-direction: column;
}

.imge{
    width: 100%;
}



.mianvalue{
    width: 95%;
    text-align: center;
}

.valibox{
   width: 100%;
   grid-template-columns: repeat(2, 1fr);
   text-align: center;
}

.boxxes{
    display: flex;
    justify-content: center;
    align-items: center;
}




.ourbox{
    flex-direction: column;
}

.ourbox1{
    flex-direction: column-reverse;
}


.firsbox2, .firsbox, .firsbox3, .firsbox4{
    width: 100%;
}


.tops{
    text-align: center;
    width: 95%;
    margin: auto;
}

.bythnumberbox{
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
}

.bythnumberbox div{
    padding: 20px 0px;
}



.joinourfamily{
    text-align: center;
    width: 95%;
    margin: auto;
}
}
`

