import { Routes } from '@angular/router';

import { TestA } from './test-a.component';
import { TestB } from './test-b.component';

export const routes: Routes = [
  {
    path: 'test-a',
    component: TestA,
  },
  {
    path: 'test-b',
    component: TestB,
  },
];
