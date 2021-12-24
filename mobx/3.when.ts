import { observable, computed, autorun, action, when } from "mobx";
//ctrl+alt+n 開始運行
//ctrl+alt+m 中止運行
class MyResource {
    @observable num: number = 0;

    private interval: number = null;
    constructor() {
        when(
            // 一但
            () => !this.isVisible,
            // 然後
            () => this.dispose()
        );

        this.interval = setInterval(() => {
            this.add();
        }, 1000);
    }

    @computed get isVisible() {
        if (this.num >= 3)
            return false;
        else
            return true;
    }

    private dispose() {
        // 清理
        console.log("dispose!!!! num:", this.num);
        clearInterval(this.interval);
    }

    public add() {
        console.log("after add:", this.num);
        this.num++;
        console.log("before add:", this.num);
    }
}

new MyResource();