import React, { Component } from 'react';

import InputPanel from './InputPanel/InputPanel';
import DataField from './DataField/DataField'

import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [
        'adasdasd',
        'ghjghj',
        'dasdasdasda'
      ],
      value: '',
      register: false
    };
  };

  render() {
    const { value, data, register } = this.state;

    return (
      <div className="container test-app">
        <div className="d-flex row">
          <div className="col-md-6 mb-3">
            <InputPanel value={value} />
          </div>
          <div className="d-flex align-items-center col-md-6 mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" checked={register} id="register" />
              <label class="form-check-label" for="register">
                Case sensitive
              </label>
            </div>
            <button className="btn btn-primary ml-auto" type="button">Length</button>
            <button className="btn btn-success ml-2" type="button">Substring</button>
          </div>
        </div>
        <div>
          <DataField data={data} />
        </div>
      </div>
    );
  };
};


