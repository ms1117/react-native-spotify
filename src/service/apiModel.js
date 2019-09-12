import AppConfig from '../config/appConfig';
import { decode as atob, encode as btoa } from 'base-64';

const { Spotify } = AppConfig;

export const apiModels = async (url, method, parameters, token) => {
  let ret = null;
  let queryURL = '';
  let params = {};
  try {
    queryURL = `${url}`;
    // const body = JSON.stringify(parameters);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    if (!token || token === '') {
      const baseStr = btoa(`${Spotify.clientID}:${Spotify.clientSecret}`);
      headers.authorization = `Basic ${baseStr}`;
    } else {
      headers.authorization = `Bearer ${token}`;
    }
    params = { headers, method };
    if (method.toUpperCase() === 'POST' || method.toUpperCase() === 'PUT' || method.toUpperCase() === 'DELETE') {

      let formBody = [];
      for (let property in parameters) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(parameters[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      params.body = formBody;
    }
    // eslint-disable-next-line
    const response = await fetch(queryURL, params);

    if (method.toUpperCase() !== 'DELETE') {
      ret = await response.json();
    } else {
      ret = {};
    }
    if (response.status >= 400) {
      debugger;
      ret = { error: true, success: false };
    }
    console.log('request result', queryURL, params, ret);
  } catch (err) {
    console.log('err', queryURL, params, err);
    ret = { error: true, success: false, errorCode: -1 };
  }
  return ret;
};
