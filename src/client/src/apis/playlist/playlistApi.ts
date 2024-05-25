import axiosClient from "../../configs/axios/axiosClient";
import { ListResponse, TPlaylist } from "../../types";

interface CheckLikedResponse {
  isLiked: boolean;
}

const playlistApi = {
  getAll(page: number, limit: number, q?: string, sort?: string): Promise<ListResponse<TPlaylist>> {
    const url = "playlist";
    return axiosClient.get(url, {
      params: {
        page: page,
        limit: limit,
        q: q,
        sortBy: sort,
      },
    });
  },
  createPlaylist(
    token: string,
    title: string,
    isPublic: number
  ): Promise<{ id: string; title: string; isPublic: number }> {
    const url = "playlist";
    return axiosClient.post(
      url,
      {
        title: title,
        public: isPublic,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  },
  updatePlaylist(token: string, playlistId: string, body: TPlaylist) {
    const url = "playlist/";
    return axiosClient.put(url + playlistId, body, {
      headers: {
        authorization: token,
      },
    });
  },
  deletePlaylist(token: string, playlistId: string) {
    const url = "playlist/delete/";
    return axiosClient.patch(
      url + playlistId,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
  },
  getDetail(playlistId: string, token: string): Promise<TPlaylist> {
    const url = "playlist/detail/";
    return axiosClient.get(url + playlistId, {
      headers: {
        authorization: token,
      },
    });
  },
  checkLikedPlaylist(playlistId: string, token: string): Promise<CheckLikedResponse> {
    const url = "playlist/checkLiked/";
    return axiosClient.get(url + playlistId, {
      headers: {
        authorization: token,
      },
    });
  },
  likePlaylist(playlistId: string, token: string) {
    const url = "playlist/like/";
    return axiosClient.post(url + playlistId, undefined, {
      headers: {
        authorization: token,
      },
    });
  },
  unLikePlaylist(playlistId: string, token: string) {
    const url = "playlist/like/";
    return axiosClient.delete(url + playlistId, {
      headers: {
        authorization: token,
      },
    });
  },
  checkSongInPlaylist(
    playlistId: string,
    songId: string,
    token: string
  ): Promise<{ isAdd: boolean }> {
    const url = "playlist/checkSong";
    return axiosClient.post(
      url,
      { song_id: songId, playlist_id: playlistId },
      {
        headers: {
          authorization: token,
        },
      }
    );
  },
};

export default playlistApi;
