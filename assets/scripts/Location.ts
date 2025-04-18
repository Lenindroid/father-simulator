import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Location')
export class Location extends Component {
    @property({
        type: Node,
        tooltip: 'Locations UI node'
    })
    private locationsUI : Node;
    start() {

    }

    update(deltaTime: number) {
        
    }

    displayLocations() {
        this.locationsUI.active = true;
    }

    hideLocations() {
        this.locationsUI.active = false;
    }
}


