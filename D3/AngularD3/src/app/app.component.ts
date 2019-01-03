import {Component, ElementRef, ViewChild} from '@angular/core';
import { Runtime, Inspector } from "@observablehq/notebook-runtime";
import notebook from "../assets/graph";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularD3';

  @ViewChild('directedGraph') directedGraph: ElementRef;

  ngAfterContentInit() {

    Runtime.load(notebook, Inspector.into(this.directedGraph.nativeElement));

  }
}
