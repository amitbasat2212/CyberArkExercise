const excrice = require('./Exercises')

describe('Testing Exercises API',()=>{
    afterEach(() => {
        // restore the spy created with spyOn
        jest.restoreAllMocks();
      });
    //excrice1
    test("is even function right way ", ()=>{
        let IsEvenFunc = new excrice.Exercises();
        expect(IsEvenFunc.isEven(2)).toBeTruthy();
        expect(IsEvenFunc.isEven(3)).not.toBeTruthy();        
        expect(IsEvenFunc.isEven()).toEqual({error:"wrong it is not number"});
        expect(IsEvenFunc.isEven(null)).toEqual({error:"wrong it is not number"});
        expect(IsEvenFunc.isEven(undefined)).toEqual({error:"wrong it is not number"});
    })

    //excrice2
    test("removeAtLeastOne -check if it remove at least one place ", ()=>{
        let array = ["cherry", "lightbulb", "Tazmania","timbacto"]
        let Arry=[];
        let removeAtLeastOneFunc = new excrice.Exercises();
        expect(removeAtLeastOneFunc.removeAtLeastOne(array).length).toBeLessThanOrEqual(3);
        expect(removeAtLeastOneFunc.removeAtLeastOne(Arry)).toEqual([])
    })


    //excrice3 
    test("simplify -return clean string", ()=>{
        let str1="amit";
        let str2 = "d!s#.l,t'jmm."
        let str3=""        
        let simplifyfunc = new excrice.Exercises();
        expect(simplifyfunc.simplify(str1)).toEqual("amit");
        expect(simplifyfunc.simplify(str2)).toEqual("dsltjmm");
        expect(simplifyfunc.simplify(str3)).toEqual("");
        expect(simplifyfunc.simplify(undefined)).toEqual({error:"null and undifend not right "});
    })

    //excrice4    
    test("validte if there is bpllen in an arry and hoemuch of each",()=>{
        let array1 = [true,true,false,true];
        let array2 = [false,false,false,true];
        let array3= ["amit",true,"amit",true];
        let array4= ["amit","amit","amit","amit"];
        let validateFunc = new excrice.Exercises();     
        expect(validateFunc.validate(array1)).toBeTruthy();
        expect(validateFunc.validate(array2)).not.toBeTruthy();
        expect(validateFunc.validate(array3)).toBeTruthy();
        expect(validateFunc.validate(array4)).toEqual({error: "Need at least one boolean"});
        
    })


    ///exctinsion 
    test("to check how many time push has benn active ", ()=>{
        let excrice1 = new excrice.Exercises();
        const spy = jest.spyOn(excrice1,'add');
        const isadd = excrice1.add(4,5);
        expect(spy).toHaveBeenCalled();
       
          
       
    })
    




});



