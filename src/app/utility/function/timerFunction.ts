import * as  firebase  from 'firebase/firestore'
import {Observable} from "rxjs";




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invoked')

export const calculateTime = (params: {startTime: number, package: number}) => {

  let timer = null;

  // return new Observable(observer => {

  timer =  setInterval(() => {

   let useTime = (params.startTime + params.package) - currentTime().seconds

   let remainTime = (currentTime().seconds) - (params.startTime  + params.package)


    console.log('use time' , useTime)

    console.log('remain time' , remainTime )




  },60000)

  // })
}



