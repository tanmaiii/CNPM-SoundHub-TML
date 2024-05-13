import { TUser, ResLoginApi, ResVerifyForgotPassword } from "./../../types";
import axiosClient from "../../configs/axios/axiosClient";

//: Promise<ResLoginApi>
const authApi = {
  signin(email: string, password: string): Promise<ResLoginApi> {
    const url = "auth/signin";
    return axiosClient.post(url, { email, password });
  },
  signup(name: string, email: string, password: string): Promise<TUser> {
    const url = "auth/signup";
    return axiosClient.post(url, { name, email, password });
  },
  signout() {
    const url = "auth/signout";
    return axiosClient.get(url);
  },
  sendVerifyAccount(email: string) {
    const url = "auth/send-verify-account";
    return axiosClient.post(url, { email });
  },
  verifyForgotPassword(email: string, code: string): Promise<ResVerifyForgotPassword> {
    const url = "auth/verify-forgot-password";
    return axiosClient.post(url, { email, code });
  },
  verifyAccount(email: string, code: string) {
    const url = "auth/verify-account";
    return axiosClient.post(url, { email, code });
  },
  resetPassword(resetPasswordToken: string, password: string) {
    const url = "auth/reset-password";
    return axiosClient.post(`${url}?token=${resetPasswordToken}`, {
      password,
    });
  },
};

export default authApi;
