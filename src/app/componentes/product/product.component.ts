import { Component } from '@angular/core';
import { P1Component } from '../../productos/p1/p1.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink,P1Component],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
