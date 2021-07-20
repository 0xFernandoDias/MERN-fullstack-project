import React, { ReactElement } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/react'
import { Container, Alert, Lead, Form } from './styles'

interface Props {
  action: string
  uporin: string
}

export function SignIn({ action, uporin }: Props): ReactElement {
  return (
    <Container>
      {uporin === 'signin' ?
        <Alert>
          Invalid credentials
        </Alert>
        : null
      }

      <h1>
        {uporin === 'signin' ?
          'Sign In'
          : 'Sign Up'
        }
      </h1>

      <Lead>
        <FontAwesomeIcon icon={faUser} />
        {uporin === 'signin' ?
          ' Sign into Your Account'
          : ' Create Your Account'
        }
      </Lead>

      <Form action={action}>

        {uporin === 'signup' ?
          <Form>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </Form>
          : null
        }

        <Form>
          <input
            type='email'
            placeholder="Email Address"
            name="email"
            required
          />

          {uporin === 'signup' ?
            <small>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
            : null
          }
        </Form>

        <Form>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength={8}
          />
        </Form>

        {uporin === 'signup' ?
          <Form>
            <input
              type="password"
              placeholder="Confirm Password"
              name="password"
              minLength={8}
            />
          </Form>
          : null
        }

        <Button
          colorScheme="blue"
          type="submit"
        >
          {uporin === 'signin' ?
            'Login'
            : 'Register'
          }
        </Button>

      </Form>

      <Lead>
        {uporin === 'signin' ?
          "Don't have an account?"
          : "Already have an account?"
        }
        <Link href={uporin === 'signin' ? '/Register' : '/Login'}>
          {uporin === 'signin' ? ' Sign Up' : ' Sign In'}
        </Link>
      </Lead>

    </Container>
  )
}