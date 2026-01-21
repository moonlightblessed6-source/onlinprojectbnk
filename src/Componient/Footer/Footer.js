import styled from "styled-components";




export const Footers = styled.main`
background-color: #0f172a;
color: white;
font-family: "Zalando Sans Expanded", sans-serif;

.main-foort{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 90%;
    margin: auto;
    padding: 40px 0px;
    gap: 20px;
}

/* .main-foort div{
    flex: 1;
} */

.mainlogo{
    width: 120px;
    border: none;
    cursor: pointer;
}

.mainlogo img{
    width: 100%;
}

.socialmidai{
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    margin-block: 10px;
}

.socialmidai span{
  background-color: #0373ae;
  color: white;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.testban{
    font-size: 12px;
}

ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    gap: 17px;
}

li{
    font-size: 12px;
    cursor: pointer;
}

ul li:first-child{
    font-weight: 700;
    font-size: 16px;
}


@media screen and (max-width: 815px){
    .main-foort{
        grid-template-columns: repeat(1, 1fr);
    }
}
`