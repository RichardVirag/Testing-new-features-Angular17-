import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'defer-hover',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>{{ description }}</p>
  `,
})
export class DeferHoverComponent {
  @Input({ required: true })
  description!: string;
}
