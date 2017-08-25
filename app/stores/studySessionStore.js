import { observable, action, computed } from 'mobx';

class studySessionStore {
@observable listing = [
    {id: "1", name1: "Nam", name2: "I'm from the store", status: 0},
    {id: "2", name1: "Paasdsaying", name2: "Zweites Wort", status: 0},
    {id: "3", name1: "Paasdqsaying", name2: "The Bilqelsads", status: 0},
    {id: "4", name1: "Paasdqwsaying", name2: "TDirrtesqwewqlsads", status: 0},
    {id: "6", name1: "PaHahasausang", name2: "The Billsads", status: 0},
    {id: "7", name1: "Paasdwesaying", name2: "The Billsweqads", status: 0},
    {id: "8", name1: "Psdsdsdsg", name2: "Lasuhussdfs",status: 0},
    {id: "9", name1: "JWEJDsn", name2: "The Billsqads",status: 0},     
    {id: "10", name1: "Paasdqsaying", name2: "The Bilewlsads", status: 0},   
    {id: "11", name1: "Paasdsasying", name2: "Looasjdw", status: 0}
    ];
@observable curtainOpen = false;
@observable currentIndex = 0;
@action.bound toggleAnimationState () {
this.curtainOpen = !this.curtainOpen
console.log('hello from the roof')
}
@action.bound incrementIndex () {
if (this.listing.length - this.currentIndex !== 1)
{const newIndex = this.currentIndex + 1;
this.currentIndex = newIndex; 
}
else {
this.showSuccessScreen();
}
}
@computed get totalItems() {
return this.listing.length;
}
@action.bound showSuccessScreen () {
//called when incrementIndex length - currentIndex == 1
console.log("show success screen")    
}
@computed get remainingItems() {
return this.listing.filter((item)=> item.status !== 1).length;
}
@computed get doneItems() {
return this.listing.filter((item)=> item.status !== 0).length;
}
@action.bound handleDone(status) {
// if wrong, add it to the end, if right, just change it's status
this.listing[this.currentIndex].status = 1;
this.incrementIndex();
this.toggleAnimationState();
}
@action.bound handleAgain() {
this.listing.push(this.listing[this.currentIndex])
// if wrong, add it to the end, if right, just change it's status
this.incrementIndex();
this.toggleAnimationState();
}
}

export default studySessionStore;