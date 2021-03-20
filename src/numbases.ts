
export class Numberbases{

    private _counts:string[] = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    private _base:number;
    //private _counted:string[];
    constructor(base:number){
        this._base =base;
    }
    
    getNumFromBaseTenNum(baseTen:number):string{
        let rem:string="";
        let div:number =baseTen;
        let newNum:string ='';
        while(div>0){
        if(div>0){
        rem =this._counts[div%this._base];
        div = Math.floor(div/this._base);
        }
        newNum=rem+newNum; 
        }
    return newNum;
    }
    
    getBase():number{
        return this._base;
    }
    }
    
    
    