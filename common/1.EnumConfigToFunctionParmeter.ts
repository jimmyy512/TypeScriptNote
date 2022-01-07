enum Config {
  LiveBoard,
  SitUp,
  Leave,
  Join,
}

type MenuEnumKeys = keyof typeof Config;
export type MenuConfig = { [key in MenuEnumKeys]: boolean };

class Menu {
  private _btnMap: Map<Config, number> = new Map<Config, number>();
  public init(config: any) {
    let i = 0;
    for (const [key, value] of Object.entries(config)) {
      this._btnMap.set(Config[key as MenuEnumKeys], i++);
    }
    this.printAll();
  }

  private printAll(): void {
    for (const [key, value] of this._btnMap) {
      console.log(key, value, Config[key]);
    }
  }
}

new Menu().init({
  LiveBoard: true,
  Join: true,
  Leave: false,
  SitUp: true,
});
