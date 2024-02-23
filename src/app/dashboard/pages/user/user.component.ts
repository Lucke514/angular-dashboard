import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: `
    <app-title title="{{ titleLabel() }}"/>

    @if (user() ) {

      <section class="flex items-center bg-gray-400 rounded-2xl">
        <img class=" rounded-full h-20 w-20" [srcset]="user()!.avatar" [alt]="user()!.first_name">

        <div class="ml-4 flex justify-start items-center flex-col">
          <h1 class="text-2xl font-bold">
            {{ user()!.first_name }} {{ user()!.last_name }}
          </h1>
          <p class="text-gray-500">
            {{ user()!.email }}
          </p>
        </div>
      </section>
    } @else {
      <p>Cargando informacion...</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute)
  private usersServices = inject(UsersService);


  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersServices.GetUserById(id))
    )
  )
  public titleLabel = computed(() => {
    if (this.user()) {
      return `Informacion del usuario : ${this.user()!.first_name} ${this.user()!.last_name}`
    } else {
      return 'Informacion del usuario :'
    }
  })
}
