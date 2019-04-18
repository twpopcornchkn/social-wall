import React, {Component} from "react";
import {saveProfileImg} from "../store/actions/auth";
import {connect} from "react-redux";



class UserAside extends Component {

  state = {
    img: this.props.profileImageUrl
  }

handleChange(e){
    this.setState({img: URL.createObjectURL(e.target.files[0])});
    let formData = new FormData();
    formData.append('image', e.target.files[0]);
    this.props.saveProfileImg(formData);
}
  render(){
    return(
      <aside className="col-sm-3">
        <div className="avatar-upload">
            <div className="avatar-edit">
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={ (e) => this.handleChange(e) }/>
                <label htmlFor="imageUpload"><i className="fas fa-pen"></i></label>
            </div>
            <div className="avatar-preview">
                <div className="imagePreview" style={{backgroundImage: "url("+ this.state.img +")" }}>
                </div>
            </div>
        </div>
      <div className="panel-footer">@{this.props.username}</div>
      </aside>
    );
  }
}

function mapStateToProps(state){
  return {
      errors: state.errors,
      currentUser: state.currentUser
  }

}
export default connect(mapStateToProps, {saveProfileImg})(UserAside);
