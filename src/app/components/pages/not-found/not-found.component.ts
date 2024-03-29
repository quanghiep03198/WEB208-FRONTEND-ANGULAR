import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
})
export class NotFoundPage implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {
		this.router.navigate(['/']);
	}
}
