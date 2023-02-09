import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses = [
    {id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
     price: 0.00, ratings: 3.5, image : 'assets/courses/course-image-1.jpeg',
     description: 'In this course you will learn the fondamentals of Javascript.  This course is purely designed for begginers.'},
    {id: 102, name: 'Angular for beginners', author: 'Mark Vouggt', duration: 28, type: 'Premium',
     price: 129.00, ratings: 4.5, image : 'assets/courses/course-image-2.jpeg',
     description: 'This course teaches Angular from basic to advanced level by creating a Customer data entry project.'},
    {id: 103, name: 'React for beginners', author: 'Steve Smith', duration: 18.5, type: 'Free',
     price: 0.00, ratings: 4.0, image : 'assets/courses/course-image-3.jpeg',
     description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!'},
    {id: 104, name: 'Advanced Angular Course', author: 'Steve Smith', duration: 19.5, type: 'Premium',
     price: 145.50, ratings: 4.8, image : 'assets/courses/course-image-4.jpeg',
     description: 'Build Your Own Library, Learn Advanced Angular Features'},
    {id: 105, name: 'Advanced JavaScript Course', author: 'John Heikela', duration: 60, type: 'Premium',
     price: 150.00, ratings: 4.5, image : 'assets/courses/course-image-5.jpeg',
     description: 'In only sixty hours you will learn enough javascript to transform from a Junior JS Dev into a Senior JS Guru'},
    {id: 106, name: 'Angular with .NET core', author: 'Mark Vought', duration: 68, type: 'Premium',
     price: 129.00, ratings: 4.5, image : 'assets/courses/course-image-6.jpeg',
     description: 'Build a proof of concept e-commerce store using Angular, .Net and Stripe for payment processing'},
    {id: 107, name: 'Advanced React Course', author: 'Merry Smith', duration: 18.5, type: 'Free',
     price: 0.00, ratings: 4.0, image : 'assets/courses/course-image-7.jpeg',
     description: 'A practical deep dive into building, scaling and maintaining high-quality design systems for software engineers.'},
    {id: 108, name: 'UX Design Course', author: 'Steve Smith', duration: 19.0, type: 'Premium',
     price: 115.50, ratings: 4.8, image : 'assets/courses/course-image-8.jpeg',
     description: 'Learn App Design to Make Beautiful, Lovable Apps'},
    {id: 109, name: 'UX Design Course: Advance', author: 'Steve Smith', duration: 20.0, type: 'Premium',
     price: 115.50, ratings: 4.8, image : 'assets/courses/course-image-9.jpeg',
     description: 'Learn UI/UX design for designing mobile applications and websites, learn how to use figma and design interactive apps.'},
  ];

  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type === 'Premium').length;
  }

  courseCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChange(data: string){
    this.courseCountRadioButton = data;
    // console.log(this.courseCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }

}
