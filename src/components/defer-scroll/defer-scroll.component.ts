import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'defer-scroll',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ description }}</p>
  `,
})
export class DeferScrollComponent {
  @Input({ required: true })
  description!: string;
}
