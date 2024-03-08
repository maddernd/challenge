import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { PostsService } from './services/posts.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), PostsService] 
};