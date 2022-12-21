import * as  firebase  from 'firebase/firestore'




const timeStamp = firebase.Timestamp


export const currentTime = () =>  timeStamp.now()

console.log('Timer function invked')



