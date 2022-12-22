import * as  firebase  from 'firebase/firestore'
import {Observable} from "rxjs";




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invoked')

export const calculateTime = (params: {startTime: number, package: number}) => {

  let packageTime = (params.startTime + params.package)


  return new Observable(observer => {


    let clearTime = setInterval(() => {

      observer.next(((params.package / (packageTime - currentTime().seconds)) / 10).toFixed(2))

      // if (packageTime <= currentTime().seconds) {
      //   clearInterval(clearTime)
      // }

      if(((params.package / (packageTime - currentTime().seconds)) / 10) >= 1){
        clearInterval(clearTime)
      }

    }, 3000)
  })
}




