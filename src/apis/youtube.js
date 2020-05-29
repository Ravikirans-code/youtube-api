import axios from 'axios';

const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';

export const baseParams = {
    part: 'snippet',
    maxResults: 5,
    key: KEY
}
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});

