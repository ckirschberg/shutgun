import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-find-a-lift',
  templateUrl: './find-a-lift.component.html',
  styleUrls: ['./find-a-lift.component.scss']
})
export class FindALiftComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
