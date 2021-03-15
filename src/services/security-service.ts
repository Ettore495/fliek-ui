import { ILoginResponse } from "../models/ILoginResponse";

export function saveProfileToLocalStorage(loginResponse: ILoginResponse): void {
  localStorage.setItem("access_token", loginResponse.token);
}

export function logout(): void {
  localStorage.removeItem("access_token");
}
