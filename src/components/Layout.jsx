import React, { Fragment } from 'react'
import styles from '../styles.module.css'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1320px;
    margin: 0 auto;
`

function Layout({children}) {
  return (
    <Container>
        <header>Menu</header>
        <main>{children}</main>
        <footer>Copyright</footer>
    </Container>
  )
}

export default Layout