import { observable, action } from 'mobx';

class generalWordStore {
@observable listing = [
    {id: "1", name1: "Nam", name2: "does this work", status: "new"},
    {id: "2", name1: "Paasdsaying", name2: "Zweites Wort", status: 1},
    {id: "3", name1: "Paasdqsaying", name2: "The Bilqelsads", status: 2},
    {id: "4", name1: "Paasdqwsaying", name2: "TDirrtesqwewqlsads", status: 1},
    {id: "6", name1: "PaHahasausang", name2: "The Billsads", status: 1},
    {id: "7", name1: "Paasdwesaying", name2: "The Billsweqads", status: "new"},
    {id: "8", name1: "Psdsdsdsg", name2: "Lasuhussdfs", status: "new"},
    {id: "9", name1: "JWEJDsn", name2: "The Billsqads", status: "new"},     
    {id: "10", name1: "Paasdqsaying", name2: "The Bilewlsads", status: "new"},   
    {id: "11", name1: "Paasdsasying", name2: "Looasjdw", status: "new"}
    ];

//initaliaze state with componentDidMount to 
@action.bound increment (a) {
  const newState = this.listing.filter( (item) => item.name1 !== a)
  this.listing = newState;
}
@action.bound addNew( newListing) {
  if(newListing.which === 13)   {
  this.listing.push(new Listing (newListing.target.value));
  newListing.target.value = "";
}
}
@observable sessionList = [];
@action.bound initialLize (a) {
  const newState = this.listing;
  this.sessionList = newState; // to be completed (sample)
}
@action.bound handleDone (wordPairId, isCorrect) 
{ 
  const newState = this.sessionList.filter( (item) => item.id !== wordPairId) 
  this.sessionList = newState; // filter new state
  this.doneList.push(wordPairId) // construct a new object with right or wrong status
}
@observable doneList = []; // needs to be iniated by API or should it not ? 


//checkAddOrRemove (who should carry the state? give it to MobX)
// Show toast component 
// Which state should be carried in the component and which in MobX ? 
};


// class Listing {
//   @observable name1;
//   @observable id;
//   constructor(value, id) {
//     this.name1 = value;
//     this.id = id ? id : Date.now();
//   }
// }

export default generalWordStore;
