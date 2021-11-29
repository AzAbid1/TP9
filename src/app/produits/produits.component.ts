import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  lesproduits: Produit[]=[];
  prodForm:FormGroup= new FormGroup({});
 
  constructor(private fb:FormBuilder,private produitService:ProduitService) { }

  onAjouter(){
    this.produitService.addProduit(this.prodForm.value)
    .subscribe (data => console.log(data));
  }

  ngOnInit(): void {
    this.prodForm = this.fb.group({
      libelle:[''],
      prix:[]
    });
    this.produitService.getProduits()
 .subscribe (data => this.lesproduits = data);
  }

}
