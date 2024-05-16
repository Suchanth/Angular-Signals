import { Component,signal,computed, ChangeDetectionStrategy, ChangeDetectorRef,inject, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SignalsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'signals';
  // t1 = signal(1);
  // t2 = signal(1);
  // t3 = computed(() => this.t2() * 5)//Readable Signals
  // #cdr=inject(ChangeDetectorRef);
  // constructor(){
  //   window.setTimeout(()=>{
  //     this.title="From Timer";
  //     console.log(this.title);
  //     this.#cdr.detectChanges()
  //   },2000);
  //   effect(()=>{
  //     console.log('effect',this.t2(),this.t1())
  //   })
  // }

  // handleClick(){
  //   //this.title="Angular Signals"
  //   //this.t2.set('Angular Signals');//Writable Signals
  //   this.t2.update((pre) => pre + 1);//Writable Signals
  // }
}
