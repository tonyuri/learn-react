import React, { Fragment } from 'react'

function Layout({children}) {
  return (
    <>
        <header>Menu</header>
        <main>{children}</main>
        <footer>Copyright</footer>
    </>
  )
}

export default Layout