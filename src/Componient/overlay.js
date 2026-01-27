import styled from "styled-components";



export const Overlyloadinf = styled.main`


.overlay {
  position: fixed;
  inset: 0;
  backdrop-filter: blur(1.5px);
  background: rgba(30, 64, 175, 0.35);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: l5 1s infinite linear alternate;
}

@keyframes l5 {
  0%  { box-shadow: 20px 0 #22c55e, -20px 0 #22c55e33; background: #22c55e }
  33% { box-shadow: 20px 0 #22c55e, -20px 0 #22c55e33; background: #22c55e33 }
  66% { box-shadow: 20px 0 #22c55e33, -20px 0 #22c55e; background: #22c55e33 }
  100%{ box-shadow: 20px 0 #22c55e33, -20px 0 #22c55e; background: #22c55e }
}




`