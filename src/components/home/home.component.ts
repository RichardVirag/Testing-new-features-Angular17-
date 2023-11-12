import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

import { DeferScrollComponent } from '../defer-scroll/defer-scroll.component';
import { DeferHoverComponent } from '../defer-hover/defer-hover.component';


@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <header class="container">
      <h3>Testing new features (Angular17)</h3>
    </header>
    <section class="container">
      <h4>Testing new conditional statements</h4>
      @if (test) {
        <p>Yes, it is true 😊!</p>
      } @else {
        <p>No, it is false 😒</p>
      }
    </section>
    <section class="container">
      <h4>Testing built-in for loop</h4>
      <ol>
        @for (genre of movieGenre$ | async; track $index) {
          <li>{{ genre }}</li>
        }
      </ol>
    </section>
    <section class="container">
      <h4 #trigger>Testing deferrable views</h4>
      @defer (on viewport(trigger)) {
       <defer-scroll description="Triggered on Scroll 📜!" />
      } @placeholder {
        <p>Aguardando trigger scroll</p>
      }

      @defer (on hover(trigger)) {
        <defer-hover description="Triggered on Hover 🔗!" />
      } @placeholder {
        <p>Aguardando trigger Hover</p>
      }
    </section>
  `,
    styleUrl: './home.component.scss',
    imports: [
      CommonModule,
      DeferScrollComponent,
      DeferHoverComponent
    ]
})
export class HomeComponent {

  public test = false;
  public movieGenre$ = of([
    'Action 💪🏻', 'Horror 👻', 'Thriller 😱', 'Criminal 🔫', 'Science fiction 🧪', 'Drama 😭', 'Romance 💘'
  ]);
}
