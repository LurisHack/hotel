
export const docResolver = (docData: any) =>{
  console.log(docData)
  console.log(docData.data())

  return  docData.data()
}
