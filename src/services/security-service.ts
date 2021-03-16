import { ILoginResponse } from "../models/ILoginResponse";
import { IUserProfile } from "../models/IUserProfile";

export function saveProfileToLocalStorage(loginResponse: ILoginResponse): void {
  localStorage.setItem(
    "user",
    JSON.stringify({ id: loginResponse.id, username: loginResponse.username })
  );
  localStorage.setItem("access_token", loginResponse.token);
}

export function getUserProfile(): IUserProfile {
  return JSON.parse(localStorage.getItem("user") as string);
}

export function logout(): void {
  localStorage.removeItem("access_token");
}
