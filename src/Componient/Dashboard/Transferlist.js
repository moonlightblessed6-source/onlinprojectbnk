import styled from "styled-components";



export const Transferlis = styled.main`
font-family: "Zalando Sans Expanded", sans-serif;
.mains{
    width: 80%;
    margin: auto;
}

.header{
    display: flex;
       width: 80%;
    margin: auto;
    justify-content: flex-start;
    align-items: center;
    gap: 6px;
    padding: 20px 0px;
    cursor: pointer;
}

.mains div{
  border: 1px solid;
  padding: 20px 10px;
  cursor: pointer;
  font-size: 14px;
}



@media screen and (max-width: 925px) {
   .mains, .header{
    width: 95%;
   

}
}

`