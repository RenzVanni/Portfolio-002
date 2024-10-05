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
    console.log(error);
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
    throw new Error(error);
  }
};
