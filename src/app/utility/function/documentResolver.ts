
export const docResolver = (docData: any) =>{
  console.log(docData)
  console.log(docData.payload.data())

  return  docData.payload.data()
}
