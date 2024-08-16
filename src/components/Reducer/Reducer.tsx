import { createContext } from "react";


export const MyAppContext=createContext({})as any



export const InitialState = {
    valueStr1: {
        "equipmentCosts": 0,
        "estimatedProfit": 0,
        "machineOperatorSalary": 0,
        "mainCosts": 0,
        "materials": 0,
        "mimExploitation": 0,
        "overheads": 0,
        "parentId": null,
        "rowName": "",
        "salary": 0,
        "supportCosts": 0
      },
      clearStr1: {
        "equipmentCosts": 0,
        "estimatedProfit": 0,
        "machineOperatorSalary": 0,
        "mainCosts": 0,
        "materials": 0,
        "mimExploitation": 0,
        "overheads": 0,
        "parentId": null,
        "rowName": "",
        "salary": 0,
        "supportCosts": 0
      },
      update: true,
      value: 0
}


export const reducer=(state:any, action:any)=>{
    switch (action.type) {
        case 'valueStr1rowName': return {
            ...state,
            valueStr1: {
                ...state.valueStr1,
                rowName: action.payload
            }
        }
        case 'valueStr1salary': return {
            ...state,
            valueStr1: {
                ...state.valueStr1,
                salary: action.payload
            }
        }
        case 'valueStr1equipmentCosts': return {
            ...state,
            valueStr1: {
                ...state.valueStr1,
                equipmentCosts: action.payload
            }
        }
        case 'valueStr1overheads': return {
            ...state,
            valueStr1: {
                ...state.valueStr1,
                overheads: action.payload
            }
        }
        case 'valueStr1estimatedProfit': return {
            ...state,
            valueStr1: {
                ...state.valueStr1,
                estimatedProfit: action.payload
            }
        }
        case 'clearStr1': return {
            ...state,
            valueStr1: state.clearStr1
        }
        case 'togelInputUpdate': return {
            ...state,
            update: action.payload,
            value: action.value
        }
            
            break;
    
        default:
            break;
    }
}