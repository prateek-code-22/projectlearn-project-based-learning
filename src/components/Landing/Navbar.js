import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

import Circle from "../../utils/loading-spinner";

//Redux Stuff
import { connect } from "react-redux";
import { getGitHubStars } from "../../redux/actions/dataActions";

//Icons and Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faHome, faPenNib } from "@fortawesome/free-solid-svg-icons";

const NavWrapper = styled.div`
  margin: 0vh 0vw;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto auto;
  padding: 4vh 5vw;
  .nav-components-container {
    display: flex;
    margin-left: auto;
    align-items: center;
  }
  .nav-component {
    display: flex;
    align-items: center;
    margin-left: 2em;
    font-size: 3.3vh;
    .svg-inline--fa {
      font-size: 1.4em;
      margin-right: 0.2em;
    }
    cursor: pointer;
  }
  .gt-container {
    display: flex;
    flex-direction: row;
    background: black;
    color: white;
    border-radius: 4vh;
    padding: 0rem 0.8rem 0rem 0;
    .svg-inline--fa {
      font-size: 1.8em;
    }
  }
  .pl-branding {
    display: flex;
    align-items: center;
  }
  .pl-logo {
    height: 3rem;
    padding: 1rem;
  }
  .pl-title {
    font-size: 5.5vh;
    margin: 0;
  }
  .mobile-nav {
    display: none;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    padding: 2vh;
    grid-template-columns: 1fr;
    .nav-components-container,
    .pl-branding {
      display: none;
    }
    .mobile-nav {
      display: flex;
      width: 100%;
    }
    .nav-component {
      margin: 2vh;
      font-size: 1.25rem;
    }
    .m-github {
      margin-left: auto;
    }
  }
`;

class Navbar extends Component {
  componentDidMount() {
    this.props.getGitHubStars();
  }

  render() {
    const { stars } = this.props;
    return (
      <NavWrapper>
        <div className="pl-branding">
          {/* <img src={plLogo} alt="ProjectLearn Logo" className="pl-logo" /> */}
          <h1 className="pl-title">ProjectLearn.io</h1>
        </div>
        <div className="mobile-nav">
          <Link href="/">
            <div className="nav-component">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </Link>
          <Link href="/blog">
            <div className="nav-component">
              <FontAwesomeIcon icon={faPenNib} />
            </div>
          </Link>

          <a
            href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning"
            target="_blank"
            className="m-github"
          >
            <div className="nav-component gt-container">
              <FontAwesomeIcon icon={faGithub} />
              {stars ? `${stars} stars` : <Circle/>}
            </div>
          </a>
        </div>
        <div className="nav-components-container">
          <Link href="/">
            <div className="nav-component">
              <FontAwesomeIcon icon={faHome} />
              Home
            </div>
          </Link>
          <Link href="/blog">
            <div className="nav-component">
              <FontAwesomeIcon icon={faPenNib} />
              Blog
            </div>
          </Link>

          <a
            href="https://github.com/Xtremilicious/ProjectLearn-Project-Based-Learning"
            target="_blank"
          >
            <div className="nav-component gt-container">
              <FontAwesomeIcon icon={faGithub} />
              {stars ? `${stars} stars` : <Circle/>}
            </div>
          </a>
        </div>
      </NavWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stars: state.data.stars,
  };
};

const mapDispatchToProps = {
  getGitHubStars,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
