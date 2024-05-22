import { createContext, useContext } from "react";

export const GameContext=createContext({
    score:0,
    selectedValue:null,
    currentDice:1,
    error:"",
    showRules:false,
     rolldice:()=>{},
resetScore:()=>{}
})
export const GameContextProvider=GameContext.Provider;
export  function useGame(){
    return useContext(GameContext);
}
