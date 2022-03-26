import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.webp'

export default function Home() {
  return (
    <>
      <header className='header'>
        <Navbar collapseOnSelect expand='lg'>
          <Container>
            <Link href='/'>
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
                <Link href='/#'>
                  <a>
                    {' '}
                    <span className='live-updates'>Live updates</span>
                  </a>
                </Link>
                <Link href='/cart'>
                  <a> How it works </a>
                </Link>
                <Link href='/cart'>
                  <a> Help </a>
                </Link>
                <Link href='/signin'>
                  <a> Login </a>
                </Link>
              </Nav>
              <Nav>
                <Link href='/signup'>
                  <a className='btnStyle'>Sign up</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Hero />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Optimus pro</a>
        </h1>
      </main>
    </>
  )
}
