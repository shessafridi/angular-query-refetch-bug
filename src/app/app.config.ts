import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';

import { routes } from './app.routes';

const queryClient = new QueryClient();

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAngularQuery(queryClient)],
};
