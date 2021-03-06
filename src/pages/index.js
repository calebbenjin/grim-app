import { useEffect } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ChooseSection from '../components/ChooseSection'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.webp'
import MobileSection from '../components/MobileSection'
import CardSection from '../components/CardSection'

export default function Home() {

  return (
    <>
      <header className='header'>
        <Navbar collapseOnSelect expand='lg'>
          <Container>
            <Link href='/' passHref>
              <Navbar.Brand>
                <Image src={logo} alt='logo' width='150' height='40' />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse
              id='responsive-navbar-nav'
              className='justify-content-end'
            >
              <Nav>
                <Link href='/#' passHref>
                  <a>
                    <span className='live-updates'>Live updates</span>
                  </a>
                </Link>
                <Link href='/cart' passHref>
                  <a> How it works </a>
                </Link>
                <Link href='/cart' passHref>
                  <a> Help </a>
                </Link>
                <Link href='/signin' passHref>
                  <a> Login </a>
                </Link>
              </Nav>
              <Nav>
                <Link href='/signup' passHref>
                  <a className='btnStyle'>Sign up</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Hero />
      <ChooseSection />
      <MobileSection />
      <CardSection />
    </>
  )
}
