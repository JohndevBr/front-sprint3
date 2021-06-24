import styled from 'styled-components'

export const Navcontainer = styled.nav `
    display: flex;
    border-bottom: 1px solid #ebebeb;

    ol {
        display: flex;
        list-style: none;

        li {
            padding: 0.5rem;
            a {
            color: #000000;
            text-decoration: none;
            font-weight: 400;

            &:hover {
            background-color: #F6F6F6;
            }

            }
        }

        li:nth-child(2n) {
          color: #000000;
          padding: 0.5rem;
        }
        li:last-child {
          color: #000000;
          font-weight: 600;
        }
    }
`