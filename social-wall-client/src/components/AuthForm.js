import React, {Component} from 'react';
class AuthFrom extends Component {
    state ={
        email: "",
        username: "",
        password: "",
        profileImageUrl: ""
    }

    handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    };

    handleSubmit = e => {
      e.preventDefault();
      const authType = this.props.signUp ? "signup" : "signin";
      this.props.onAuth(authType, this.state).then(() => {
        this.props.history.push("/"); 
      })
      .catch(()=>{
        return;
      })
    };
  

    render(){
        const {email, username, password, profileImageUrl} = this.state;
        const {
          signUp,
          heading,
          buttonText,
          errors,
          history,
          removeError
        } = this.props;
        
        history.listen(() => {
          removeError();
        });
    
        return (
            <div>
              <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                  <form onSubmit={this.handleSubmit}>
                    <h2>{heading}</h2>
                    {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                    <label htmlFor="email">E-mail</label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={this.handleChange}
                      type="text"
                      value={email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      autoComplete="off"
                      className="form-control"
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                      type="password"
                      value={password}
                    />

                    {signUp && (
                        <div>
                        <label htmlFor="username">Username</label>
                        <input
                            autoComplete="off"
                            className="form-control"
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                            type="text"
                            value={username}
                        />
                        <label htmlFor="image-url">Image URL</label>
                        <input
                            autoComplete="off"
                            className="form-control"
                            id="image-url"
                            name="profileImageUrl"
                            onChange={this.handleChange}
                            type="text"
                            value={profileImageUrl}
                        />
                        </div>
                    )}
                    <br/>
                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    {buttonText}
                  </button>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}

export default AuthFrom;