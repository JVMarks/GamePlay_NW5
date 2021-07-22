import axios from 'axios';

const api = axios.create({
  baseURL: 'https://discord.com/api'
});

export { api }

//https://discord.com/api

//https://discord.com/api/oauth2/authorize?client_id=858780550672154624&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds