import React from 'react'
import './about.css';
import Ruturaj from "../../images/profile-pic.png";
import Kartik from "../../images/profile-kartik.png";
import Parth from "../../images/profile-parth.png";
import Rohit from "../../images/profile-rohit.png";
const aboutus = () => {
  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <p className="text-blk section-head-text">About Us</p>
        <p className="text-blk section-subhead-text">Here we are working together on DE sheet generator Project, and we are trying to help engineering students.</p>
        <div className="responsive-container-block">
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
            <div className="team-card">
              <div className="img-wrapper">
                <img src={Ruturaj} className="team-img" style={{ marginBottom: '25px' }} />
              </div>
              <p className="text-blk name">Ruturaj Bayad</p>
              <p className="text-blk position">Back-end Work</p>
              <div className="social-media-links">
                <a href="http://www.twitter.com/" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="http://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
            <div className="team-card">
              <div className="img-wrapper">
                <img src={Parth} className="team-img" style={{ marginBottom: '25px' }} />
              </div>
              <p className="text-blk name">Parth Vanaliya</p>
              <p className="text-blk position">Front-End Work</p>
              <div className="social-media-links">
                <a href="http://www.twitter.com/" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="http://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
            <div className="team-card">
              <div className="img-wrapper">
                <img src={Rohit} className="team-img" style={{ marginBottom: '25px' }} />
              </div>
              <p className="text-blk name">Rohit Solanki</p>
              <p className="text-blk position">Front-End Work</p>
              <div className="social-media-links">
                <a href="http://www.twitter.com/" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="http://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
            <div className="team-card">
              <div className="img-wrapper">
                <img src={Kartik} className="team-img" style={{ marginBottom: '25px' }} />
              </div>
              <p className="text-blk name">Kartik Purohit</p>
              <p className="text-blk position">Research Work</p>
              <div className="social-media-links">
                <a href="http://www.twitter.com/" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="http://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default aboutus