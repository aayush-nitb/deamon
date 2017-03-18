import { Model_Course } from 'app/models/courses/Model_Course'

const COURSES: Model_Course[] = [
    { start: '00:00', name: 'What is Angular and what you can do with it' },
    { start: '03:31', name: 'Architecture of Angular 2 apps' },
    { start: '08:23', name: 'Getting the tools' },
    { start: '09:40', name: 'Your first Angular 2 app' },
    { start: '18:54', name: 'Angular 2.0 with TypeScript for Beginners (Udemy course)' },
    { start: '19:50', name: 'Creating components' },
    { start: '36:39', name: 'Dependency injection' },
    { start: '42:25', name: 'Exercise' },
    { start: '53:46', name: 'Discount coupon to get Angular 2 course on Udemy' }
];

export class App_Courses_Fetcher {
    getCourses(): Model_Course[] {
        return COURSES;
    }
    getCourse(name: String): Model_Course {
        return COURSES.find(course => course.name === name);
    }
}