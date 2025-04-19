import { _decorator, Component, JsonAsset, Label, Node, resources, Sprite, SpriteFrame } from 'cc';
import { ProgressDisplayController } from './ProgressDisplayController';
import { PlayerStats } from './PlayerStats';
const { ccclass, property } = _decorator;

type WeekDay = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

interface DialogReference {
    id: string;
    locked: boolean;
}

interface TimeRange {
    minimum: number;
    maximum: number;
}

interface RequiredStats {
    day: WeekDay[];
    pm: TimeRange;
    am: TimeRange;
    minimumWork: number;
    minimumFamily: number;
    money: number;
}


interface Room {
    id: string;
    locked: boolean;
    image: {
        morning: string;
        afternoon: string;
        night: string;
    };
    dialogs: DialogReference[];
    stats : RequiredStats;
}


@ccclass('Location')
export class Location extends Component {
    @property({
        type: Node,
        tooltip: 'Locations UI node'
    })
    private locationsUI : Node;

    @property({
        type: Sprite,
        tooltip: 'Background image'
    })
    public backgroundImageSprite : Sprite;

    @property({
        type: Node,
        tooltip: 'The progress display controller script'
    })
    private progressNode : Node;
    private progressScript : ProgressDisplayController;

    @property({
        type: Node,
        tooltip: 'Player stats script node'
    })
    private playerStatsNode : Node;
    private playerStatsScript : PlayerStats;

    @property({
        type: Node,
        tooltip: 'Inside locations'
    })
    private insideLocationsUI : Node;

    @property({
        type: Node,
        tooltip: 'Outside locations group'
    })
    private outsideLocationsUI : Node;

    @property({
        type: Label,
        tooltip: 'Shows the area type'
    })
    private environmentNode : Label;

    start() {
        this.progressScript = this.progressNode.getComponent(ProgressDisplayController);
        this.changeLocation('son-bedroom')
    }

    update(deltaTime: number) {
        
    }

    displayLocations() {
        this.locationsUI.active = true;
        this.displayLocationsInside();
    }

    displayLocationsOutside() {
        this.insideLocationsUI.active = false;
        this.outsideLocationsUI.active = true;
        this.environmentNode.string = 'Outside';
    }

    displayLocationsInside() {
        this.outsideLocationsUI.active = false;
        this.insideLocationsUI.active = true;
        this.environmentNode.string = 'Inside';
    }

    hideLocations() {
        this.locationsUI.active = false;
    }

    public changeLocation(id : string) : void {
        resources.load('data/places', JsonAsset, (err, data)=> {
            if(err) {
                console.error('There was an error while trying to load the data ', err);
                return;
            }

            const locations = data.json;
            let location : Room;

            locations.forEach((element : Room) => {
                if(element.id == id) location = element;
            });

            let roomPath : string = location.image[this.progressScript.getTimeOfDay(this.progressScript.clock)];

            resources.load(roomPath, SpriteFrame, (err, spriteFrame)=> {
                if (err) {
                    console.error(`Error loading sprite: ${err}`);
                    return;
                }
                this.backgroundImageSprite.spriteFrame = spriteFrame;
            });
        });
    }
}


