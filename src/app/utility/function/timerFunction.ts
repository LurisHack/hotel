import * as  firebase  from 'firebase/firestore'
import {Observable} from "rxjs";




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invoked')

export const calculateTime = (params: {startTime: number, package: number}) => {

  let timer = null;

  // return new Observable(observer => {

  timer =  setInterval(() => {

   let packageTime = (params.startTime + params.package)


    console.log(packageTime)
    console.log(currentTime().seconds)

     console.log('progressTime' , packageTime - currentTime().seconds)

  },10000)

  // })
}



