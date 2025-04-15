import { _decorator, Component, Node, ProgressBar } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerStats')
export class PlayerStats extends Component {
    @property({
        type: ProgressBar, 
        tooltip: "Here goes the family bar"
    })
    public familyBar : ProgressBar;
    public familyValue : number = 100;

    @property({
        type: ProgressBar, 
        tooltip: "Here goes the work bar"
    })
    public workBar :  ProgressBar;
    public workValue : number = 100;

    updateFamily(newValue : number) {
        this.familyBar.progress = 0.8;
    }

    
    
    public money : number = 0;
    /*start() {

    }*/

    /*
    update(deltaTime: number) {
        
    }*/
}


