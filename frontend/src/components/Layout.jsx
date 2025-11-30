import React from 'react'
import NavBar from "./NavBar"
import Container from '@mui/material/Container'


function Layout({ children }) {
    return (
        <>
            <NavBar />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout