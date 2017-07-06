import { Component,
          OnInit, 
          Input, 
          ViewEncapsulation, 
          OnChanges, 
          SimpleChanges, 
          DoCheck,
          ViewChild,
          ElementRef,
          ContentChild,
          AfterContentInit,
          AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element:{type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() { 
    console.log('constructor called!');
  }

 

  ngOnInit() {
    
  }


}
