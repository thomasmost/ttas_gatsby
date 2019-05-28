import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import ReactSVG from 'react-svg'

// import Header from "./header"
import "./layout.scss"

import LeftArt from '../images/left-border.svg';
import RightArt from '../images/right-border.svg';

interface ILayoutProps {
   zenMode: boolean;
}

const Layout: React.SFC<ILayoutProps> = ({ children, zenMode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div id="bg" className={zenMode ? 'zen' : ''}></div>

      <div className="decorative-layer">
          <div className="left-border-col" >
               <LeftArt />
          </div>
          <div className="center-col">
            <header>
            </header>
          </div>
         <div className="right-border-col" >
               <RightArt />
         </div>
      </div>
      <div className="star-loader"></div>
      <div id="app">
          <div className="left-border-col" >
            <div />
          </div>
          <div className="center-col">
            <main className={zenMode ? 'zen' : ''}>{children}</main>
         
      <footer>
      © {new Date().getFullYear()}
      {` `}
      {/* <Link to="/">Home</Link>
      <Link to="/credits">Credits</Link> */}
      </footer>
         </div>
         <div className="right-border-col" >
            <div />
         </div>
      </div>
      </>
    )}
  />
)

export default Layout
