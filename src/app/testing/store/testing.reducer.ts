import * as TestingAction from "./testing.action";

const initialValue = {testingValue: [1, 2]}

export interface TestingState {
  testingValue: number[]
}

export const testingReducer = (state = initialValue, action: TestingAction.TestingAction): TestingState => {

  switch (action.type) {
    case TestingAction.ADD_VALUE:
      console.log(action)
       return {testingValue: [...state.testingValue, ...action.payload]}
    default:
      return state

  }

}
