import React from "react";
import "./style.scss";
import My_image from "../../image/photo.png"

const Index = () => {
    return (
        <div className='Home'>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 m-auto pt-5">
                        <div className="card border-0 bg-white shadow">
                            <div className="card-header bg-white text-center p-3">
                                <img src={My_image} alt="..." style={{ width: 50, height: 50 }} />
                                <h3>Login</h3>
                            </div>
                            <div className="card-body p-3">

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
                                    <div className="text-center">
                                        <button type="button" className="btn btn-link">Signup</button>
                                        <button type="button" className="btn btn-link">Reset Password</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Index;