import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RemarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
