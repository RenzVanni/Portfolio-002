import axios from "axios";

export const playlist = async () => {
  try {
    const token = localStorage.getItem("access_token");

    const playlistId = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = playlistId.data.items[0].id;

    const playlistCoverImage = await axios.get(
      `https://api.spotify.com/v1/playlists/${data}/images`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const coverImage = playlistCoverImage.data[0];

    const lists = await axios.get(
      `https://api.spotify.com/v1/playlists/${data}/tracks`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const playlist = lists.data.items;
    return { playlist, coverImage };
  } catch (error) {
    const refresh_token = localStorage.getItem("refresh_token");

    const err = await axios.get(
      `${import.meta.env.VITE_BACKEND_REFRESH}?refresh_token=${refresh_token}`
    );

    localStorage.setItem("access_token", err.data.access_token);
    localStorage.setItem("refresh_token", err.data.refresh_token);

    return null;
  }
};

export const favorite = async () => {
  try {
    const token = localStorage.getItem("access_token");

    const music = await axios.get(
      `https://api.spotify.com/v1/search?type=track&q=track:Drugs&money`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return music.data.tracks.items[0];
  } catch (error: any) {
    const refresh_token = localStorage.getItem("refresh_token");

    const err = await axios.get(
      `${import.meta.env.VITE_BACKEND_REFRESH}?refresh_token=${refresh_token}`
    );

    console.log(err);
    throw new Error(error);
  }
};
