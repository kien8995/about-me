import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import imageURL from './_static/kientran.jpeg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const About = () => (
  <div className="container content">
    <div>
      <h2>About Me</h2>
      <p><img className="profile-picture" src={imageURL} /></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus ipsum ac erat aliquam dapibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus ipsum ac erat aliquam dapibus. Vestibulum vehicula placerat ex, a consectetur odio pharetra quis. </p>
    </div>

    <div>
      <h2>Research Interest</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus ipsum ac erat aliquam dapibus.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus ipsum ac erat aliquam dapibus. Vestibulum vehicula placerat ex, a consectetur odio pharetra quis. </p>
    </div>

    <div>
      <h2>Publications</h2>
      <ol>
        <li>F.Bar, J.Doe: Effects of having a placeholder of a name</li>
        <li>S.Holmes, J.Watson: Consequences of living with a sociopath in London</li>
      </ol>
    </div>

    <div>
      <h2>Typography</h2>
      <p>This is a <a href="http://google.com">link</a>. Something <em>italics</em> and something <strong>bold</strong>.</p>
      <p>Here is a table</p>
      <table>
        <thead>
        <tr>
          <th>Year</th>
          <th>Award</th>
          <th>Category</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>2014</td>
          <td>Emmy</td>
          <td>Won Outstanding Lead Actor in a miniseries or a movie</td>
        </tr>
        <tr>
          <td>2015</td>
          <td>BAFTA</td>
          <td>Nominated for Best Leading Actor for Sherlock</td>
        </tr>
        <tr>
          <td>2014</td>
          <td>Satellite</td>
          <td>Won Best Actor miniseries or television film</td>
        </tr>
        </tbody>
      </table>
      <p>Here is a horizontal rule</p>
      <hr/>
      <p>Here is a blockquote</p>
      <blockquote>
        <p>To a great mind, nothing is little</p>
      </blockquote>
    </div>

    <div>
      <h2>References</h2>
      <ul>
        <li>Foo Bar: Head of Department, Placeholder Names, Lorem</li>
        <li>John Doe: Associate Professor, Department of Computer Science, Ipsum</li>
      </ul>
    </div>
  </div>
);

const Contact = () => (
  <div className="container content contact">
    <ul>
      <li>
        <p>Email: <a href="mailto:trandongkien.sine@gmail.com">trandongkien.sine@gmail.com</a></p>
      </li>
      <li>
        <p>Phone: <a href="tel:+84-1653135706">+84-1653135706</a></p>
      </li>
    </ul>

    <hr/>

    <h2>Mailing Address</h2>

    <blockquote>
      <p>Quang Trung Street</p>
      <p>Ha Dong District</p>
      <p>Hanoi</p>
      <p>Vietnam</p>
    </blockquote>

    <hr/>

    <h2>Social</h2>
    <ol>
      <li><a target="_blank" href="https://www.facebook.com/trandongkien">Facebook</a></li>
      <li><a target="_blank" href="https://twitter.com/trandongkien">Twitter</a></li>
      <li><a target="_blank" href="https://plus.google.com/u/0/+KienTranDong">Google+</a></li>
    </ol>
  </div>
);

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="navbar container">
            <a id="author-name" className="alignable pull-left" href="#">Dong Kien Tran</a>
            <ul className="alignable pull-right navbar-ul">
              <li className="alignable nav-list"><a href="/">About</a> / </li>
              <li className="alignable nav-list"><a target="_blank" href="http://www.kien8995.tech/">Resume</a> / </li>
              <li className="alignable nav-list"><a href="/about">Contact</a></li>
            </ul>
          </div>
          <div style={{clear:"both"}}></div>

          <hr/>

          <Route exact path="/" component={About} />
          <Route path="/about" component={Contact} />
        </div>
      </Router>
    )
  }
}
