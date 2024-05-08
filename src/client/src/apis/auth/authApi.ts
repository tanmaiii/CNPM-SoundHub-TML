import { TUser, ResLoginApi } from "./../../types";
import axiosClient from "../../configs/axios/axiosClient";

//: Promise<ResLoginApi>
const authApi = {
  signup(name: string, email: string, password: string): Promise<TUser> {
    const url = "auth/signup";
    return axiosClient.post(url, { name, email, password });
  },

  sendVerifyAccount(email: string) {
    const url = "auth/send-verify-account";
    return axiosClient.post(url, { email });
  },
  verifyAccount(email: string, code: string) {
    const url = "auth/verify-account";
    return axiosClient.post(url, { email, code });
  },
};

export default authApi;
