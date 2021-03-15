import { ILoginResponse } from "../models/ILoginResponse";

export function saveProfileToLocalStorage(loginResponse: ILoginResponse) {
  localStorage.setItem("access_token", loginResponse.token);
}
