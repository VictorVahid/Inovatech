import Navbar from "../../components/Navbar"
import Section from "../../components/Section"
import styled from "styled-components"

const Container = styled.div`
    max-width: 100em;
`

export default function App() {
    return (
        <Container>
           <Navbar/>
           <Section/>
        </Container>
    )
}