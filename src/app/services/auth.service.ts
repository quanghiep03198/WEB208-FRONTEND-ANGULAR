import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import env from "../environment/environment.production";
import { LoginData, User } from "../interfaces/user.interface";
import { AuthGuardService } from "./authGuard.service";

@Injectable({ providedIn: "root" })
export class AuthService {
	currentUser: Partial<User> | any = {
		_id: null,
		username: null,
		photoUrl: null,
	};
	isLoggedIn: boolean = false;
	constructor(private httpClient: HttpClient, private router: Router, private authService: AuthGuardService) {}
	getUser() {
		return this.httpClient.get(env.baseUrl + "/user");
	}
	login(data: Pick<User, "email" & "password">) {
		return this.httpClient.post(env.baseUrl + "/login", data) as Observable<LoginData>;
	}
	register(data: Partial<User>) {
		return this.httpClient.post(env.baseUrl + "/register", data) as Observable<User>;
	}
	changePassword({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) {
		return this.httpClient.patch(env.baseUrl + "/change-password", {
			currentPassword,
			newPassword,
		});
	}
	refreshToken(credential: string) {
		return this.httpClient.get(env.baseUrl + "/refresh-token/" + credential);
	}
	findUser(searchTermValue: string) {
		return this.httpClient.get(env.baseUrl + "/find-user", {
			params: {
				searchTerm: searchTermValue,
			},
		});
	}
	editProfile(updatedData: Partial<User>) {
		return this.httpClient.patch(env.baseUrl + "/edit-profile", updatedData);
	}
	logout() {
		localStorage.removeItem("auth");
		localStorage.removeItem("accessToken");
		this.router.navigate(["/login"]);
	}
}
