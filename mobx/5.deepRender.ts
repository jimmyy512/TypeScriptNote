import { observable, computed, autorun, action, when } from "mobx";
class Ticker {
    @observable tick = 0;

    @action.bound
    increment() {
        this.tick++;
    }

    constructor() {
        autorun(() =>{
            this.test1();
            console.log("----");
            console.log("autorun call!");
        })
    }

    private test1(){
        console.log("test1 call!");
        this.test2();
    }

    private test2(){
        console.log("test2 call!",this.tickName);
    }

    @computed get tickName(){
        return "Name"+this.tick;
    }
}

const ticker = new Ticker()
setInterval(ticker.increment, 1000)