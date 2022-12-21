import * as  firebase  from 'firebase/firestore'
import {Observable} from "rxjs";




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invoked')

export const calculateTime = (params: {stop: boolean}) => {

  let timer = null;

  return new Observable(observer => {

  timer =  setInterval(() => {
      observer.next(timeStamp)
    },60000)

    if (params.stop){
      clearInterval(timer)
    }


  })
}



