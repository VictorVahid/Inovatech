import img from '../assets/Laptop.png'
import styled from 'styled-components'

const Right = styled.div`
    img{
        width: 25rem;
    }
`
const Main = styled.div`
    display: flex;
    align-items: center;
    
    h1{
        margin-bottom: 3rem;
        font-size: 3rem;
    }
    p{
        margin-bottom: 3rem;
    }
    button{
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        background-color:#456d7e;
        color: #fff;
        font-weight: 600;
    }

    
`
export default function Section() {
    return (
        <Main>
            <div>
                <h1>Respira</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla quisquam numquam, accusantium, iure similique tempora,
                    dolorem minima facilis illum suscipit velit reiciendis cupiditate
                    provident! Vero delectus magnam adipisci iste doloribus!</p>
                    <button>TESTE</button>
            </div>
            <Right>
                <img src={img} alt="imagem" />
            </Right>
        </Main>
    )
}