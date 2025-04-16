import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;
type Period = 'AM' | 'PM';
type Day = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';
type Clock = {
    period: Period,
    hour: number,
    minute: number
}

@ccclass('ProgressDisplayController')
export class ProgressDisplayController extends Component {
    @property({
        type: Label, 
        tooltip: "Here goes the day label"
    })
    public dayLabel: Label;
    public day : Day = 'MONDAY';


    @property({
        type: Label, 
        tooltip: "Here goes the hour label"
    })
    public hourLabel: Label;
    public clock: Clock = {
        period: 'AM',
        hour: 7,
        minute: 35
    }

    @property({
        type: Label, 
        tooltip: "Here goes the money label"
    })
    public moneyLabel : Label;
    public money : number = 0;

    start() {
        this.dayLabel.string = this.day;
        this.hourLabel.string = `${this.clock.hour.toString().padStart(2, '0')}:${this.clock.minute.toString().padStart(2, '0')} ${this.clock.period}`;
        this.moneyLabel.string = "$" + this.money;
    }

    update(deltaTime: number) {
        
    }
}


