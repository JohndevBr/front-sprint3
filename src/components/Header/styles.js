import styled from 'styled-components'

export const Container = styled.header `
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    flex-direction:column;
    border-bottom: 1px solid #ebebeb;
    
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .find-input {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0.5px solid #E9E9E9;
      border-radius: 10px;
      
      input {
        margin-left: 1rem;
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        letter-spacing: 0.2rem;
        border: none;
        color:#a7a7a7;

        &:focus {
        box-shadow: none;
        border: none;
        outline: none;
        }
        
      } 
    }
       
`