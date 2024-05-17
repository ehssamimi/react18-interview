export interface Todo{
    title:string,
    id:Date,
    done:boolean
}
export enum filterType{
    isDone='isDone',
    isNotDone='isNotDone',
    all='all'
}
