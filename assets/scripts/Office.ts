import { _decorator, Component, JsonAsset, Label, Node, resources } from 'cc';
import { Location } from './Location';
const { ccclass, property } = _decorator;

interface JournalEntry {
    accounts: string[];         
    credits: number[];          
    debits: number[];           
    missingDebitIndex: number;  
    missingCreditIndex: number; 
    options: number[];          
}


@ccclass('Office')
export class Office extends Component {

    @property({
        type: Node,
        tooltip: 'The paperwork button node'
    })
    private paperworkNode : Node;

    @property({
        type: Node,
        tooltip: 'The general journal node'
    })
    private generalJournal : Node;

    @property({
        type: Label,
        tooltip: 'Accounts for the minigame'
    })
    private accountOne: Label;

    @property({
        type: Label,
        tooltip: 'Accounts for the minigame'
    })
    private accountTwo: Label;

    @property({
        type: Label,
        tooltip: 'Accounts for the minigame'
    })
    private accountThree: Label;

    @property({
        type: Label,
        tooltip: 'Accounts for the minigame'
    })
    private accountFour: Label;

    @property({
        type: Label,
        tooltip: 'Debit quantities for the minigame'
    })
    private debitOne: Label;

    @property({
        type: Label,
        tooltip: 'Debit quantities for the minigame'
    })
    private debitTwo: Label;

    @property({
        type: Label,
        tooltip: 'Debit quantities for the minigame'
    })
    private debitThree: Label;

    @property({
        type: Label,
        tooltip: 'Debit quantities for the minigame'
    })
    private debitFour: Label;

    @property({
        type: Label,
        tooltip: 'Credit quantities for the minigame'
    })
    private creditOne: Label;

    @property({
        type: Label,
        tooltip: 'Credit quantities for the minigame'
    })
    private creditTwo: Label;

    @property({
        type: Label,
        tooltip: 'Credit quantities for the minigame'
    })
    private creditThree: Label;

    @property({
        type: Label,
        tooltip: 'Credit quantities for the minigame'
    })
    private creditFour: Label;

    @property({
        type: Label,
        tooltip: 'The page of the paper work'
    })
    private page: Label;

    @property({
        type: Label,
        tooltip: 'Option one'
    })
    private optionOne : Label;

    @property({
        type: Label,
        tooltip: 'Option two'
    })
    private optionTwo : Label;

    @property({
        type: Label,
        tooltip: 'Option three'
    })
    private optionThree : Label;

    @property({
        type: Label,
        tooltip: 'Total credit'
    })
    private totalCredit : Label;

    @property({
        type: Label,
        tooltip: 'Total debit'
    })
    private totalDebit : Label;

    private accounts : Label[] = [];
    private debits : Label[] = [];
    private credits : Label[] = [];

    private journals : JournalEntry[] = [];

    start() {
        this.accounts.push(
            this.accountOne,
            this.accountTwo,
            this.accountThree,
            this.accountFour
        );

        this.debits.push(
            this.debitOne,
            this.debitTwo,
            this.debitThree,
            this.debitFour
        );

        this.credits.push(
            this.creditOne,
            this.creditTwo,
            this.creditThree,
            this.creditFour
        );

        resources.load('data/work', JsonAsset, (err, data)=> {
            this.journals = data.json as JournalEntry[];
        });
    }

    public showPaperWork() : void {
        this.paperworkNode.active = true;
    }

    public updatePaperWork(index : number) : void {
        this.page.string = 'Page ' + (index + 1).toString();
        
        for (let i : number = 0; i < 4; i++) {
            this.debits[i].string = this.journals[index].debits[i].toString();
            this.credits[i].string = this.journals[index].credits[i].toString();
            this.accounts[i].string = this.journals[index].accounts[i];
        }

        this.optionOne.string = this.journals[index].options[0].toString();
        this.optionTwo.string = this.journals[index].options[1].toString();
        this.optionThree.string = this.journals[index].options[2].toString();

        this.totalCredit.string = this.journals[index].credits.reduce((accum, current)=> {
            return accum + current;
        }, 0).toString();

        this.totalDebit.string = this.journals[index].debits.reduce((accum, current)=> {
            return accum + current;
        }, 0).toString();
    }

    public startPaperWork() : void {
        this.updatePaperWork(1);
        this.paperworkNode.active = false;
        this.generalJournal.active = true;
    }

    update(deltaTime: number) {
        
    }
}


