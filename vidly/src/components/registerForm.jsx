import React from "react";
import Joi, { format } from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = { data: { username: "", password: "", name: "" }, errors: {} };

  schema = {
    username: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required(),
  };

  doSubmit = () => {
    console.log("submitting the register form");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
