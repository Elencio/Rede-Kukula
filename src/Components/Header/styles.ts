import styled from 'styled-components'


export const HeaderContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0 2rem;

   a {
    text-decoration: none;
   }
   

   strong {
    font-size: 1.2rem;
    font-family: 'Outfit', sans-serif;
    line-height: 1.7;
    font-weight: 800;
   }

   span {
    font-size: 1.2rem;
    font-family: 'Outfit', sans-serif;
    line-height: 1.7;
    font-weight: 300;
    color:  #be7702;
   }

`