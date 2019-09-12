import { apiModels } from './apiModel';

const BASE_URL_CREDENTIAL = 'https://accounts.spotify.com';
const BASE_URL = 'https://api.spotify.com/v1';
let accessToken = null;

const setAcessToken = (token) => {
  accessToken = token;
}

export const getAccessToken = async () => {
  const body = {
    grant_type: 'client_credentials'
  }
  const res = await apiModels(`${BASE_URL_CREDENTIAL}/api/token`, 'POST', body, null);
  if (res && res.access_token) {
    setAcessToken(res.access_token);
    return { success: true, token: res.access_token };
  }
  alert(JSON.stringify(res));
  return { success: false };
}

export const getPlayLists = async (countryCode) => {
  const res = await apiModels(`${BASE_URL}/browse/featured-playlists?country=${countryCode}`, 'GET', {}, accessToken);
  if (res && res.playlists) {
    return { success: true, playlists: res.playlists };
  }
  return { success: false };
}

export const getTracks = async (playlistID, offset) => {
  const result = await apiModels(`${BASE_URL}/playlists/${playlistID}/tracks?limit=10&offset=${offset}`, 'GET', {}, accessToken);
  if (result && result.items) {
    return { success: true, result };
  }
  return { success: false };
}