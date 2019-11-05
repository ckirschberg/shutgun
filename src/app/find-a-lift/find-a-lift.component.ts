import { LiftActions } from './lift-actions';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';

@Component({
  selector: 'app-find-a-lift',
  templateUrl: './find-a-lift.component.html',
  styleUrls: ['./find-a-lift.component.scss']
})
export class FindALiftComponent implements OnInit {
  private isLift: boolean;

  constructor(private dataService: DataService, private liftActions: LiftActions,
              private ngRedux: NgRedux<AppState>) { }

    // Subscribe to the store.
  ngOnInit() {
    this.ngRedux.select(x => x.trips).subscribe((state) => {
      this.isLift = state.isLift;
    });
  }

  onDeleteLift(id: string): void {
    this.dataService.deleteTrip(id);
  }

  onTestClick(): void {
    // dispatch action by calling an action creator.
    this.liftActions.setType(true);
  }
}
