import * as  firebase  from 'firebase/firestore'
import {Observable} from "rxjs";




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invoked')

export const calculateTime = (params: {startTime: number, package: number}) => {


  // return new Observable(observer => {

  let clearTime =  setInterval(() => {

   let packageTime = (params.startTime + params.package)



    console.log('package' , packageTime)
    console.log('current time', currentTime().seconds)

    if (packageTime <= currentTime().seconds){
      clearInterval(clearTime)
    }

  },1000)

  // })
}



