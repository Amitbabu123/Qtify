import axios from "axios";

const backendEndpoint = 'https://qtify-backend-labs.crio.do';

export async function fetchTopAlbums() { // Mark the function as async
    try {
        const res = await axios.get(`${backendEndpoint}/albums/top`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

