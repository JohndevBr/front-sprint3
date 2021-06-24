import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    
    ol {
        display: flex;
        flex-wrap: wrap;

        li {
            display: flex;
            width: 20%;
            margin-right: 4.2rem;
            justify-content:space-between;
            
            p {
                margin-top: 1rem;
                text-align: center;
                color: #000000;
            }
            p:nth-child(3) {
                font-weight: bold;
            }
        }
    }
`