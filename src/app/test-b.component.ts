import ms from 'ms';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { sleep } from './sleep';

@Component({
  selector: 'test-b',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Data: {{ query.data() }}</h1>
      <h1>Refetching: {{ query.isRefetching() }}</h1>
    </div>
  `,
})
export class TestB {
  id = signal('b');

  query = injectQuery(() => ({
    enabled: !!this.id(),
    queryKey: ['test', this.id()],
    queryFn: () => sleep(2000).then(() => 'Test ' + this.id()),
    staleTime: ms('1y'),
  }));
}
