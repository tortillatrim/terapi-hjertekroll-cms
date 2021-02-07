import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo-small.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container py-4">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Hjertekrøll - EQ Terapi">
              <img src={logo} alt="Hjertekrøll - EQ Terapi"/>
              <span className="ml-3 is-size-5 has-text-weight-bold" style={{color: 'rgb(97 109 68)'}}>EQ Terapi</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Om oss
              </Link>
              <Link className="navbar-item" to="/terapeuter">
                Terapeuter
              </Link>
              <Link className="navbar-item" to="/contact">
                Kontakt
              </Link>

            </div>
            <div className="navbar-end has-text-centered">
                <Link to="/terapeuter" className="navbar-item button is-primary is-medium">Bestill time <span className="material-icons pl-2">book_online</span></Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
