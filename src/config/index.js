// const API_PATH = 'ws://159.65.43.125:8000/ws/chat';
const address = process.env.REACT_APP_SERVER_ADDRESS ? process.env.REACT_APP_SERVER_ADDRESS : 'localhost:8000';
const API_PATH = `ws://${address}/ws/chat`;


export default {
  API_PATH
};