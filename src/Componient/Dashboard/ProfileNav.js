import styled from "styled-components";




export const Nav = styled.main`
background-color: #27324c;

.navbars{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 10px 0px;
}


.right{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 14px;
}

.dspps{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
}

.iconss{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
}

.right div{
    display: flex;
        justify-content: center;
    align-items: center;
    gap: 3px;
}

.left{
    width: 110px;
}

.left img{
    width: 100%;
}

.name{
 position: relative;
}

.dropdown{
   position: absolute;
   display: flex;
   flex-direction: column;
   top: 20px;
   background-color: #27324c;
   color: white;
   padding: 10px 10px;
   border-radius: 7px;
   width: 150px;
}

.dropdown span{
font-size: 16px;
cursor: pointer;
margin-block: 5px;
}



`