import React, { Component } from 'react';

import AppService from '../services/AppService';
import InputPanel from './InputPanel/InputPanel';
import DataField from './DataField/DataField'

import './App.css';

export default class App extends Component {

  constructor() {
    super();
    this.appService = new AppService();
    this.state = {
      data: [],
      value: '',
      register: false,
      filter: 'none'
    };
    this.updateData()
  };

  onDataLoaded = (data) => {
    this.setState({ data });
  };

  updateData() {
    this.appService.getData()
      .then(this.onDataLoaded);
  }

  lengthSearch(data) {
    const { value } = this.state;
    const reg = /^\d+$/;
    if (value === '') return data;
    if (!reg.test(value)) {
      return data
    }

    return data.filter(el => el.length > +value);
  }

  substringSearch(data) {
    const { value, register } = this.state;

    if (!register) {
      return data.filter(el => el.toLowerCase().indexOf(value.toLowerCase()) > -1);
    }
    return data.filter(el => el.indexOf(value) > -1);
  }

  filter(data) {
    switch (this.state.filter) {
      case "none":
        return data;
      case "substring":
        return this.substringSearch(data);
      case "length":
        return this.lengthSearch(data);
      default: return data;
    }
  }

  inputHandler = (value) => {
    this.setState({ value })
  }

  onToggleLength = () => {
    this.setState({
      filter: 'length'
    })
  }

  onToggleSubstring = () => {
    this.setState({
      filter: 'substring'
    })
  }

  onToggleRegister = () => {
    this.setState((state) => {
      return {
        register: !state.register
      }
    })
  }

  render() {
    const { value, data, register, filter } = this.state;

    const visibleData = this.filter(data);

    const primary = 'btn-primary';
    const secondary = 'btn-outline-primary'

    return (
      <div className="container test-app">
        <div className="d-flex row">
          <div className="col-md-6 mb-3">
            <InputPanel value={value} inputHandler={this.inputHandler} filter={filter} />
          </div>
          <div className="d-flex align-items-center col-md-6 mb-3">
            <div className="form-check">
              <input className="form-check-input" onChange={this.onToggleRegister} type="checkbox" checked={register} id="register" />
              <label className="form-check-label text-muted" htmlFor="register">
                Case sensitive
              </label>
            </div>
            <button onClick={this.onToggleLength} className={`btn ${filter === 'length' ? primary : secondary} ml-auto`} type="button">Length</button>
            <button onClick={this.onToggleSubstring} className={`btn ${filter === 'substring' ? primary : secondary} ml-2`} type="button">Substring</button>
          </div>
        </div>
        <div>
          <DataField data={visibleData} />
        </div>
      </div>
    );
  };
};


