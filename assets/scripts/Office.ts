import { _decorator, Component, Node } from 'cc';
import { Location } from './Location';
const { ccclass, property } = _decorator;

@ccclass('Office')
export class Office extends Component {


    @property({
        type: Node,
        tooltip: 'The paperwork button node'
    })
    private paperworkNode : Node;

    start() {

    }

    public showPaperWork() : void {
        this.paperworkNode.active = true;
    }

    public startPaperWork() : void {
        this.paperworkNode.active = false;
    }

    update(deltaTime: number) {
        
    }
}


