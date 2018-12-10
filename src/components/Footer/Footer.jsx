/*eslint-disable*/
import React from 'react'
import { Container, Row } from 'reactstrap'
// used for making the prop types of this component
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={'footer' + (this.props.default ? ' footer-default' : '')}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    CSE-299
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Niloy Saha Roy
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Ashiqur Rahman
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Shafayet Zim
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Abdur Raufus Saleheen
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                &copy; {1900 + new Date().getYear()}, made with{' '}
                <i className="fa fa-heart heart" /> by Team Noksa
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    )
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
}

export default Footer
