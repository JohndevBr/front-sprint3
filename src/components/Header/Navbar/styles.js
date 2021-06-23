import styled from 'styled-components'

export const Content = styled.nav `
    width: 100%;
    ul {
        display: flex;
        margin-top: 1rem;
        justify-content: space-around;

        li {
        padding: 0 .3rem;
        text-transform: uppercase;
        list-style-type: none;
        
        a {
          color: #000000;
          text-decoration: none;
          font-weight: 600;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }

    

`