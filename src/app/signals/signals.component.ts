import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { signal,effect,computed } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [FormsModule,
    NgForOf,
  ],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // username=signal('Raj Kumar');
  // constructor(){
  //   effect(()=>{
  //     console.log("Change the Username :",this.username())
  //   });
  
  // console.log(this.username());
  // this.username.set('xyz');
  // console.log(this.username());

  // this.username.update((name)=>name.toUpperCase());
  // console.log(this.username())
  // }
  // change(){
  //   this.username.set(Math.random().toString())
  // }


  quantity=signal(1);
  quantityAvailable=signal([1,2,3,4,5,6]);
  selectedVehicle=signal<Vehicle>({id:1,name:'Honda',price:80000})
  vehicles=signal<Vehicle[]>([])

  exPrice = computed(()=>this.selectedVehicle().price * this.quantity())


  constructor(){
    console.log(this.quantity())
    this.quantity.update(qty => qty * 2)
  }
  quantityeffect=effect(()=>console.log("Latest Quantity:",this.quantity()))


  onQuantitySelected(qty:number){
    this.quantity.set(qty)
    // this.quantity.set(5);
    // this.quantity.set(42);
  }

}
export interface Vehicle{
  id:number;
  name:string;
  price:number;
}
