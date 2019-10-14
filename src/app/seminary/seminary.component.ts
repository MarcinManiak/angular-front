import { Component, OnInit } from '@angular/core';
import { SemDate } from '../modele/semDate';
import { SeminaryDatesService } from '../seminary-dates.service';

@Component({
  selector: 'app-seminary',
  templateUrl: './seminary.component.html',
  styleUrls: ['./seminary.component.css']
})
export class SeminaryComponent implements OnInit {

  semDates: SemDate[];

  constructor(private datesService: SeminaryDatesService) { }

  ngOnInit() {

    this.datesService.allSemDates().subscribe(
      (data) => {
        this.semDates = data
      },
      (error) => {
        console.log(error)
      }
    )

    console.log(this.semDates)

  }

}
