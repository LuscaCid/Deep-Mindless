import React from 'react'
import {Container} from './style'
import teacher from '../assets/teacher.svg'
const PrincipalPage = () => {
  return (
    <Container>
        <header>
          <h1>BC</h1>
          <section>Contact</section>
        </header>
        <main>
          <img src={teacher} alt="teacher image" />
        </main>
    </Container>
  )
}

export default PrincipalPage