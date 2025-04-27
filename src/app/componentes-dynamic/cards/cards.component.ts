import { Component, OnInit } from '@angular/core';
import { DatacardsService } from '../../servicios/datacards.service';
import { Cards } from '../../common/cards';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent implements OnInit {
  card!: Cards;

  constructor(private dataservice: DatacardsService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(){
    this.dataservice.getCards().subscribe(
      {
        next: (data)=>{
          console.log(data);
          this.card = data;
        },
        error: (err)=>{
          console.error(err);
        },
        complete: ()=>{
          console.log("Carga completada");
        }
      }
    )
  }
  
}

