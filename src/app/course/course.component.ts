import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  text = 'Lorem Ipsum is a dummy Data . I am from Itech Company thanks you !! Phehlukwayo to Manish Pandey, 1 run, fifty for Pandey. Looked iffy when he came out to bat, but the one over from Shamsi settled him down. Now he has to bat through and help India post a good total. Fuller and outside off, Pandey eases the drive towards sweeper cover and wanted two, but Dhoni declines and it was the right call';
 course = {
   title : "The Complete Angular Course",
   rating : 4.9754,
   students : 30123,
   price : 190.95,
   releaseDate: new Date(2016, 3, 1)
}
 constructor() { }

  ngOnInit() {
  }

}
