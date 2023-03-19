import React from 'react';

export class LoginForm extends React.Component {
    render() {
        return <>
        <div className="form-group bg-white border rounded-3 p-5 bg-opacity-75">
            <h1 className="display-4 text-dark">Login to <span class="badge rounded-pill bg-success">arbr</span></h1>
            <form className="p-2">
            <label for="Username" className="form-label mr-2 text-dark">Username: </label>
            <input type={"text"} id="Username" name="Username" className="mb-3 ml-2 p-1"></input><br/>
            <label for="Password" className="form-label mr-2 text-dark">Password: </label>
            <input type={"password"} id="Password" name="Password" className="mb-3 p-1"></input><br/>
            <input className="btn btn-primary mt-2" type={"submit"} value="Submit"></input> <br/><br/>
            <p className="lead text-dark"><span class="badge rounded-pill bg-success">arbr</span> is the #1 social media platform for trees.<br/>If you're a tree, please login.</p>
            </form>
        </div>
        </>
    }
}

export default LoginForm;