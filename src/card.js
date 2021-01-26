import React from 'react';
import './card.css';

class Card extends React.Component {
    render() {
      return (
        <div className="wrapper">
            <div className="sub-con">
              <a href="#" alt="edit profile icon"><i className="fas fa-pen pen"></i></a>
              <img src={this.props.user.image} alt="test" className="image-top ">
              </img>
            </div>
            <div className="container">
            <img src={this.props.user.profileImage} alt="" className="profile-img"></img>
            <div className="content">
            <div className="sub-content">
              <h1>{this.props.user.fullName}</h1>
              <p>{this.props.user.work}</p>
              <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.user.location}</span>
              <p>{this.props.user.info}</p>
            </div>
         
            <center><div><a href={this.props.user.facebook} className="btn">Facebook</a></div></center>
          </div>
            </div>
        </div>
      );
    }
  }
  
  export default Card;