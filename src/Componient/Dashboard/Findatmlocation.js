import styled from "styled-components";




export const Findlocation = styled.main`

.back{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 20px 0px;
    width: 80%;
    margin: auto;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 15px;
}

.find{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px 0px;
    flex-direction: column;
}


@media screen and (max-width: 925px) {
    
    .back{
        width: 95%;
    }
}
`