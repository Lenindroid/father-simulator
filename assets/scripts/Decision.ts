import { _decorator, Button, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

type Day = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY';

interface Stats {
    family: number;
    work: number;
    money: number;
}
  
interface DecisionObject {
    id: string;
    location: string;
    day: Day; 
    hour: number;
    minute: number;
    question: string;
    firstOption: string;
    secondOption: string;
    firstOptionStats: Stats;
    secondOptionStats: Stats;
}

@ccclass('Decision')
export class Decision extends Component {
    @property({
        type: Label,
        tooltip: 'Context of the decision'
    })
    public questionLabel : Label;

    @property({
        type: Button, 
        tooltip: 'First option'
    })
    public buttonLeft : Button;

    @property({
        type: Label,
        tooltip: 'First option text'
    })
    public textLeft : Label;

    @property({
        type: Button, 
        tooltip: 'Second option'
    })
    public buttonRight : Button;

    @property({
        type: Label,
        tooltip: 'Second option text'
    })
    public textRight : Label;

    start() {

    }

    update(deltaTime: number) {
        
    }
}


