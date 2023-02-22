import { ChangePasswordForm } from './../shared/change-password-form/change-password-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TokenInterceptor } from 'src/app/services/httpClientInterceptor.service';
import { Homepage } from '../pages/homepage/homepage.component';
import { ProjectPage } from '../pages/project-page/project-page.component';
import { AddTaskForm } from '../shared/add-task-form/add-task-form.component';
import { EditTaskForm } from '../shared/edit-task-form/edit-task-form.component';
import { EditUserInfo } from '../shared/edit-profile-form/edit-profile-form.component';
import { TasksList } from '../shared/task-list/task-list.component';
import { CreateProjectForm } from './../shared/create-project-form/create-project-form.component';
import { EditProjectForm } from './../shared/edit-project-form/edit-project-form.component';

@NgModule({
	imports: [
		CommonModule,
		RouterLink,
		RouterLinkActive,
		DragDropModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	exports: [
		Homepage,
		ProjectPage,
		AddTaskForm,
		TasksList,
		EditTaskForm,
		CreateProjectForm,
		EditProjectForm,
		EditUserInfo,
		ChangePasswordForm,
	],
	declarations: [
		Homepage,
		ProjectPage,
		AddTaskForm,
		TasksList,
		EditTaskForm,
		CreateProjectForm,
		EditProjectForm,
		EditUserInfo,
		ChangePasswordForm,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
	],
})
export class DashboardModule {}
