import {Observable} from "rxjs";
import * as  firebase  from 'firebase/firestore'
import { interval, takeUntil, timer } from 'rxjs';

const currentDate = new Date();
const startOfNextMinute = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate(),
  currentDate.getHours(),
  currentDate.getMinutes() + 1
);

// This could be any observable stream
const source = interval(1000);


const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invked')





export const timerFunction = () =>
  new Observable((observer => {

    const timeOBJ = new Date()

    const minute = timeOBJ.getMinutes()
    const hour = timeOBJ.getHours()
    const day =    timeOBJ.getDate()
    const month =  timeOBJ.getMonth() + 1
    const year = timeOBJ.getFullYear()

    setInterval(() => {
     observer.next({minute, hour, day, month, year})
    },1000)
  }))


export const rxjsTimer = () =>
{
const result = source.pipe(
  takeUntil(timer(startOfNextMinute))
);

result.subscribe(console.log)
}
