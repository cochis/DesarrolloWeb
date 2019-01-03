import { Component, ViewChild, ElementRef } from '@angular/core';
import { Runtime, Inspector } from "@observablehq/notebook-runtime";
import notebook from "../assets/graph";

// Runtime.load(notebook, Inspector.into(document.body));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-d3-force-directed-graph';

  @ViewChild('directedGraph') directedGraph: ElementRef;

  ngAfterContentInit() {
    Runtime.load(notebook, Inspector.into(this.directedGraph.nativeElement));

  }
}
