import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template : `
    <section [ngClass]="['w-full h-[600px]', cssClass]" >
      heavy loaders slow
    </section>
  `
})
export class HeavyLoadersSlowComponent {

  @Input({required: true}) cssClass!: string;

  constructor() {
    const start = Date.now();
    while (Date.now() < start + 2000) {}

    console.log('HeavyLoadersSlowComponent has been loaded');
  }

}
