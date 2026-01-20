import styled from "styled-components";
import metroImg from './../../assets/hompage/metro.jpg'


export const Homepages = styled.main`

font-family: "Zalando Sans Expanded", sans-serif;

.homepage-main{
   background: linear-gradient(to right, #373d40, transparent),
              url(${metroImg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
object-fit: contain;
width: 100%;
height: auto;
/* margin-top: 10px; */
}

.witht{
    width: 90%;
    margin: auto;
    padding: 20px 0px;
  
}

.homepage-topic{
    color: white;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* padding: 0px 80px; */
    
}

.homepage-topic h2{
    margin-top: 60px;
    font-weight: 900;
    font-size: 50px;
    line-height: 45px;
    margin-bottom: 20px;
}

.Openaccount{
    display: flex;
    width: fit-content;
    gap: 20px;
}


.Openaccount button:first-child{
    padding: 13px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color:#0488cb ;
    color: white;
    font-weight: 500;
}

.Openaccount button:nth-child(2){
    padding: 13px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color:#373d40 ;
    color: white;
    font-weight: 500;
}

.Rountine{
    color: white;
    display: flex;
    margin-top: 30px;
     gap: 10px;
    

}

.box-same:first-child{
    flex: 1;
   padding: 25px 20px;
   border-radius: 10px;
   display: flex;
   justify-content:space-between;
   align-items: center;
    background-color:#0488cb ;
    

}
.box-same:nth-child(2){
    flex: 1;
   padding: 25px 20px;
   border-radius: 10px;
   display: flex;
   justify-content:space-between;
   align-items: center;
    background-color:#14b8a6 ;
   
}
.box-same:nth-child(3){

    flex: 1;
   padding: 25px 20px;
   border-radius: 10px;
   display: flex;
   justify-content:space-between;
   align-items: center;
    background-color:#9333ea ;
   
}
.box-same:hover{
    transform: scale(1.1);
    transition: 2s ease-in;
    cursor: pointer;
}

.writeup{
    display: flex;
    flex-direction: column;
    gap: 4px;
     font-size: 14px;
}

.box-same div svg{
    font-size: 25px;
}




.homepage-body{
    width: 90%;
    margin: 2rem auto;

}

.onliebank{
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
}

.onliebank h2{
    font-size: 16px;
}

.westbank{
    width: fit-content;
    background-color: #14b8a6;
    padding: 8px 16px;
    border-radius: 10px;
    color: white;
    font-size: 12px;
}

.Discover{
    opacity: .7;
    font-size: 12px;
}





.rate-box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    margin-top: 30px;

    
}

.rate-box div{
    flex: 1;
    border-radius: 8px;
    cursor: pointer;
    background-color: whitesmoke;
    padding: 10px 10px;
    font-size: 14px;
    border-radius: 10px;
}

.spans1 {
    padding: 7px 7px;
    border-radius: 10px;
    background-color: #1274d8;
    display: flex;
    justify-content: center;
    width: fit-content;
}
.spans2 {
    padding: 7px 7px;
    border-radius: 10px;
    background-color: #119b67;
    display: flex;
    justify-content: center;
    width: fit-content;
}
.spans3 {
    padding: 7px 7px;
    border-radius: 10px;
    background-color: #bd2ca8;
    display: flex;
    justify-content: center;
    width: fit-content;
}
.spans4 {
    padding: 7px 7px;
    border-radius: 10px;
    background-color: #e23c1a;
    display: flex;
    justify-content: center;
    width: fit-content;
}
.percent1{
color: #1274d8;
font-weight: 700;
}
.percent2{
color: #119b67;
font-weight: 700;
}
.percent3{
color: #bd2ca8;
font-weight: 700;
}
.percent4{
color: #e23c1a;
font-weight: 700;
}

.apy{
    font-size: 10px;
}

.yeild{
    font-size: 10px;
    font-weight: 600;
}

.highyiled{
    font-size: 10px;
    opacity: .7;
}

.futured1{
    padding: 7px 7px;
    width: fit-content;
    border-radius: 8px;
    font-size: 10px;
    background-color: #c3ddfe;
    color: #0284c7;
    font-weight: 700;
}
.futured2{
    padding: 7px 7px;
    width: fit-content;
    border-radius: 8px;
    font-size: 10px;
    background-color: #baf9ed;
    color: #119b6b;
    font-weight: 700;
}
.futured3{
    padding: 7px 7px;
    width: fit-content;
    border-radius: 8px;
    font-size: 10px;
    background-color: #f0e1ff;
    color: #bd2ca8;
    font-weight: 700;
}
.futured4{
    padding: 7px 7px;
    width: fit-content;
    border-radius: 8px;
    font-size: 10px;
    background-color: #ffe0bc;
    color: #e23c1a;;
    font-weight: 700;
}

.rate-box div span svg{
    font-size: 25px;
    color: white;
    z-index: 9999;
}

.insid-ratebox{
    display: flex;
    flex-direction: column;
    gap: 17px;
    align-items: center;
}

.rate-box div:hover{
    transform: scale(1.1);
    transition: 2s ease-in-out;
}


.AnnualPercentage{
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    box-shadow: 2px 2px 3px;
    padding: 7px 10px;
    border-radius: 9px;
    cursor: pointer;
    font-size: 12px;
}




.howtohelpyoutoday{
    background-color: #177fb6;
    padding: 40px 0px;
}

.server{
    width: 90%;
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
    /* margin-top: 60px; */
    color: white;
    gap: 10px;
}

.server p{
    font-size: 14px;
}
.server h2{
    font-size: 15px;
}
.server span{
    font-size: 12px;
}
.howtohlepyoubox{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.howtohlepyoubox div{
    flex: 1;
    border: 1px solid #4695c0;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

.howtohlepyoubox div:hover{
    transform: scale(1.1);
    transition: 2s ease-in;
}
.howtohlepyoubox div p{
    text-align: center;
    font-size: 12px;

}
.howtohlepyoubox div h1{
    text-align: center;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 900;
}

.howtohlepyoubox div span {
    padding: 15px 15px;
    background-color: #4695c0;
    border-radius: 10px;
}
.howtohlepyoubox div span svg{
    font-size: 25px;
}





.Financialstrength{
    width: 90%;
    margin: 2rem auto;
    display: flex;
    gap: 35px;
}

.Financial{
    flex: 1;
    width: 400px;
    border-radius: 10px;
}

.Financial img{ 
    width: 100%;
border-radius: 10px;
    
}
.Financialbuilding{
    flex: 1;
}

.Financialbuilding{
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* justify-content: center; */
    /* align-items: center; */
}

.topichere{
  background-color: #c9f9da;
  color: #15803d;
  padding: 10px;
  width: fit-content;
  border-radius: 10px;
  font-size: 12px;
}

.businesss{
    display: flex;
    flex-direction: column;
    gap: 7px;
    
}
.businesss h1{
    color: #14753b;
    font-size: 30px;
}
.businesss p{
    opacity: .7;
    font-size: 14px;
}

.minimumbalance{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: fit-content;
}
.minimumbalance span{
    display: flex;
    gap: 8px;
    font-size: 14px;
    align-items: center;
    opacity: .7;
}

.btn{
    padding: 13px 17px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    background-color: #0488cb;
    color: white;
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;
}

.btn:hover{
    cursor: pointer;
    background-color: #177fb6;
}







.MemberFocusedBanking{
margin-top: 6rem;
background-color: #f2f9fe;
padding: 20px 0px;
}
.div{
        width: 90%;
    margin: 1rem auto;
    
}
.topicp{
    width: fit-content;
    color: #0369a1;
    background-color: #cefaf2;
    padding: 7px 10px;
    border-radius: 10px;
    font-size: 12px;
}

.firsrbox{
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* flex: 1; */
}

.columbox{
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.h1here{
    color: #046093;
    font-size: 25px;
}

.pfirsrbox{
   width: 80%;
   margin-bottom: 20px;
   font-size: 14px;
}

.columbox div{
    border: 1px solid white;
    width: 80%;
    padding: 16px 16px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 13px;
    background-color: white;
}

.columbox div p{
    opacity: .8;
    font-weight: 700;
}
.columbox div span{
    opacity: .8;
}

.focuedbox{
    display: flex;
    width: 90%;
margin: auto;
   justify-content: center;
   align-items: center;
}

.imgebuld {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px; /* optional */
}
.imgebuld div{
    width: 200px;
}

.imgebuld div img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 10px;
}





.testimonial{
    padding: 10px 0px;
}

.testheader{
    padding: 30px;
    text-align: center;
    border-radius: 14px;
    
}

.testmoniabox{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    margin: auto;
    gap: 10px;
}

.heade{
    font-size: 14px;
}
.testmoniabox div p{
    font-size: 12px;
    opacity: .7;
}
.testmoniabox div{
    background-color: #f9fafb;
    padding: 10px 10px;
    border-radius: 8px;
      
}

.mystart{
   display: flex;
   justify-content: center;
   align-items: center;
   margin-block: 8px;
   color: yellow;
}

.heade{
    text-align: center;

}



.image{
    display: flex;
    justify-content: center;
    align-items: center;

  
}

.spamhuman{
    padding: 12px 12px;
    border-radius: 16px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0f2fe;
    color: #0284c7;
}



.spamhuma{
        padding: 12px 12px;
    border-radius: 16px;
    font-size: 18px;
    background-color: #e0f2fe;
    color: #0284c7;
    width: fit-content;
    display: flex;
    justify-content: center;
}





.openshours{
    background-color: #f0f9ff;
    margin-top: 30px;
}

.openhoursmain{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    margin: auto;
    gap: 10px;
    font-size: 12px;
    padding: 50px;
}

.openhoursmain div span svg{
    font-size: 25px;
}
.openhoursmain div{
    display: flex;
    flex-direction: column;
    gap: 7px;
}
`