import styled from "styled-components"

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    
    ul{
        display: flex;
        list-style: none;
    }

    li{
        margin-right: 2rem;
        font-weight: 600;
        cursor: pointer;
    }
    
    h2{
        font-size: 1rem;
        color: #ffffff;
        padding: 1rem 2rem;
        background-color: #27475589;
        border-radius: 2rem;
    }
`
export default function Navbar() {
    return (
        <Menu>
            <div>
                <ul>
                    <li>Inicio</li>
                    <li>Serviço</li>
                    <li>Sobre</li>
                </ul>
            </div>
            <div>
                <h2>Contato</h2>
            </div>
        </Menu>
    )
}