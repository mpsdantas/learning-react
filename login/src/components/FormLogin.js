import React, { Component } from 'react';
import fetch from 'node-fetch';
import FormData from 'form-data';
var formurlencoded = require('form-urlencoded');
const request = require('superagent');
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { senha: '',
                       email:''};

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*
    Mudança de valor no campo
    handleChange(event) {
        
    }
    colocar no input: onChange={this.handleChange}
    */
    handleSubmit(event) {
        event.preventDefault();
        //alert('Email: ' + this.state.email + '\nSenha: ' + this.state.senha);
        var obj = {
            email: this.state.email,
            senha: this.state.senha
        };
        request
            .post('http://localhost:4000')
            .type('form')
            .send(formurlencoded(obj))
            .end((err, res) => {
                console.log(res.body);
            });
        
    }
    render() {
        const tamanho = this.props.tamanhoForm;
        return (
            <div className="container">
                <div className="row">
                    <div className={tamanho}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input onInput={(e) => this.setState({ email: e.target.value })}
                                  type="email" className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input onInput={(e) => this.setState({ senha: e.target.value })} 
                                type="password" className="form-control"></input>
                            </div>
                            <button type="submit" value="Submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;