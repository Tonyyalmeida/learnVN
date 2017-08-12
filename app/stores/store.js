import { observable, action } from 'mobx';

class store {
@observable listing = [
    {id: "1", name1: "Nam", name2: "The Bills"},
    {id: "2", name1: "Paasdsaying", name2: "The Bilqqlsads"},
    {id: "3", name1: "Paasdqsaying", name2: "The Bilqelsads"},
    {id: "4", name1: "Paasdqwsaying", name2: "The Bilqwewqlsads"},
    {id: "6", name1: "Paasdqweqsaying", name2: "The Billsads"},
    {id: "7", name1: "Paasdwesaying", name2: "The Billsweqads"},
    {id: "8", name1: "Paasdsqaying", name2: "The Billqqsads"},
    {id: "9", name1: "Paasdsqwaying", name2: "The Billsqads"},     
    {id: "10", name1: "Paasdqsaying", name2: "The Bilewlsads"},   
    {id: "11", name1: "Paasdsasying", name2: "The Bilqlsads"}
    ];
@action.bound increment (a) {
  const newState = this.listing.filter( (item) => item.name1 !== a)
  this.listing = newState;
}
@action.bound addNew( newListing) {
  if(newListing.which === 13)   {
  this.listing.push(new Listing (newListing.target.value));
  newListing.target.value = "";
}
};}


class Listing {
  @observable name1;
  @observable id;
  constructor(value, id) {
    this.name1 = value;
    this.id = id ? id : Date.now();
  }
}

export default { store: new store() };
