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
export class ServerElementComponent implements OnInit,
 OnChanges, 
 DoCheck,
 AfterContentInit {
  @Input('srvElement') element:{type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

   ngDoCheck() {
    console.log('ngDoCheck called!');
    
  }

 ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }


}
