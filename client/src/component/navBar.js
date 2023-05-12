import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const navBar = () => {
  return (
   <>
   <Navbar className='yellotail'>
    <LinkContainer to={'/'}>
    <Navbar.Brand>
        newsware
    </Navbar.Brand>
    </LinkContainer>
   </Navbar>
   <Nav className='mb-4'>
    <Nav.Item>
        <LinkContainer to = {'/'}>
            <Nav.Link>
                Home
            </Nav.Link>
        </LinkContainer>
    </Nav.Item>
    <Nav.Item>
        <LinkContainer to = {'/news/new'}>
            <Nav.Link>
              Newnews
            </Nav.Link>
        </LinkContainer>
    </Nav.Item>
    <Nav.Item>
        <LinkContainer to = {'/contact'}>
            <Nav.Link>
                 Contact
            </Nav.Link>
        </LinkContainer>
    </Nav.Item>

   </Nav>
   </>
  )
}

export default navBar
