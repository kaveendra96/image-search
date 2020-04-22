import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CqCC2Rsbv_GbB-HDB316cAFDqk4VRlBHPScYYVXsXGQ ',
  },
});
