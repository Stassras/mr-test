export default class AppService {

    _proxyurl = "https://cors-anywhere.herokuapp.com/";
    _dataBase = 'https://www.mrsoft.by/data.json';

    async getData() {
        const res = await fetch(`${this._proxyurl + this._dataBase}`);

        if (!res.ok) {
            throw new Error(`could not fetch ${this._dataBase} , received ${res.status}`);
        }

        const body = await res.json();

        return this._transformData(body);
    };

    _transformData(data) {
        return [...data.data];
    }

};

