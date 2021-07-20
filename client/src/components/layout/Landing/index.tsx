import React from 'react'
import Link from 'next/link'
import { LandingSection, DarkOverlay, LandingInner } from './styles'
import { Button } from '@chakra-ui/react'

export function Landing() {
  return (
    <LandingSection>
      <DarkOverlay>
        <LandingInner>
          <h1>Developer Connector</h1>
          <p>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div>
            <Link href="/Register">
              <Button
                colorScheme="blue"
                color="white"
              >
                Sign Up
              </Button>
            </Link>
            <Link href="/Login">
              <Button
                colorScheme="whiteAlpha"
                color="white"
              >
                Login
              </Button>
            </Link>
          </div>
        </LandingInner>
      </DarkOverlay>
    </LandingSection>
  )
}