import * as  firebase  from 'firebase/firestore'
import {Observable} from "rxjs";




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invoked')

export const calculateTime = (params: {startTime: number, package: number}) => {

  let timer = null;

  return new Observable(observer => {

  timer =  setInterval(() => {

    console.log((params.startTime + params.package) - currentTime().seconds)


  },60000)




  })
}



