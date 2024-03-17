import {reactive} from "vue";

export class Stack<T> {
    private list: T[]
    constructor() {
        this.list = reactive([]);
    }

    push(val: T){
        if (this.list.length >= 6) {
            this.list.shift();
        }
        this.list.push(val)
    }

    size(){
        return this.list.length
    }

    peek(){
        return this.list[this.list.length - 1]
    }

    pop(){
        return this.list.pop()
    }

    map<U>(callback: (val: T, index: number) => U){
        return this.list.map(callback)
    }

    shift(){
        return this.list.shift()
    }

    isEmpty(){
        return this.list.length === 0
    }

    clear(){
        this.list = []
    }
}