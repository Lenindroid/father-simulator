import { _decorator, Button, Component, JsonAsset, Label, Node, resources } from 'cc';
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
    private currentDecision : DecisionObject;

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
        resources.load('dialogs/decision', JsonAsset, (err, data) => {
            if (err) {
                console.error('There was an error while trying to access to the dialogs:', err);
                return;
            }
            const dialogsJSON = data.json;
        })
    }

    update(deltaTime: number) {
        
    }
}


