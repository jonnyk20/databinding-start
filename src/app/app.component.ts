import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  counter: number[] = [0,6,2];
  counterOdd: number[] = [3,7,1];

onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
 }

 onChangeFirst(){
   this.serverElements[0].name = 'Changed!';
 }

 onNumberPosted(val){
  if ((val % 2)==0){
   this.counter.push(val);}
else {this.counterOdd.push(val);}

 }
  
}
