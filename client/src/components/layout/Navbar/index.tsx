import React, { ReactElement } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { DarkNavbar } from './styles'
// import { Button } from '@chakra-ui/react'


export function Navbar(): ReactElement {
  return (
    <DarkNavbar>
      <h1>
        <a href="/">
          <Link href="/">
            <FontAwesomeIcon icon={faCode} />
          </Link>
          DevConnector
        </a>
      </h1>
      <ul>
        <li>
          <Link href="/Profiles">
            <a>Developers</a>
          </Link>
        </li>
        <li>
          <Link href="/Register">
            <a>Register</a>
          </Link>
        </li>
        <li>
          <Link href="/Login">
            <a>Login</a>
          </Link>
        </li>
      </ul>
    </DarkNavbar>
  )
}