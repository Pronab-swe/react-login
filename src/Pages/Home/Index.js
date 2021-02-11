import React from "react";
import "./style.scss";
import My_image from "../../image/photo.png"

const Index = () => {
    return (
        <div className='Home'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <div className="back">
                            <div className="card">
                            <img src={My_image} alt="Girl in a jacket" style={{width:50,height:50 } } className="center" />
                                <div className="div-center">
                                  <div className="content">
                                        <h3>Login</h3>
                                        <hr />
                                        <form>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="example@email.com"></input>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                            </div>
                                            <button type="submit" className="btn btn-primary bttn" >Login</button>
                                            <hr />
                                            <button type="button" className="btn btn-link">Signup</button>
                                            <button type="button" className="btn btn-link">Reset Password</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;