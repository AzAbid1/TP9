import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/model/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  lesproduits: Produit[]=[];
  prodForm:FormGroup= new FormGroup({});
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.prodForm = this.fb.group({
      libelle:[''],
      prix:[]
    })

  }

}
