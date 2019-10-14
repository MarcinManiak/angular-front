import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SemDate } from '../modele/semDate';
import { Injectable } from '@angular/core';
import { SeminaryDatesService } from '../seminary-dates.service'
import { Location } from '@angular/common'


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  date: SemDate;

  constructor(private http: HttpClient, private datesService: SeminaryDatesService, private location: Location) { }

  ngOnInit() { }

  back() {
    this.location.back();
  }

  
  addDate(author: String, topic: String, date: Date): void {
    author = author.trim();
    topic = topic.trim();
    if (!author && !topic && !date) { return; window.alert('Please fill all forms!') }
    this.datesService.addDate ({ author,topic,date } as SemDate)
    .subscribe(
      (val) => {
          window.alert('Succes!')
          console.log("POST call successful value returned in body", 
                      val);
          this.back();
      },
      response => {
          console.log("POST call in error", response);
          window.alert('Error! Please fill all forms or contact with admin!')
      },
      () => {
          console.log("The POST observable is now completed.");
      });
  }
  
  
  }