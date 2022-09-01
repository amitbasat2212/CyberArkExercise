const code = require('./code')

describe('Testing code API',()=>{

    test("add should return sum of a + b", () => {
        let sum = code.add(1, 2)
        expect(sum).toBe(3)
    })

    test("should return the square root of the sum of the numbers squares", () => {
        let sum = code.calculateHyp(3,4)
        expect(sum).toBe(5)
    });

    //  test("should remove all BUGs from list of code", () => {
    //     let code = ["great code", "good code", "BUG", "async await awesome code", "BUG", "BUG", "general code"]
    //     let bugFreeCode = code.removebugs1(code)
    
    //     expect(bugFreeCode).not.toContain("BUG")
    //     expect(bugFreeCode).toContain("good code") //this is just an example, there are other ways to check
    //     })

    test("test the clearLowPriority function",()=>{
        let tasks = [{ text: "dummy1", priority: "HIGH" }, { text: "dummy", priority: "LOW" }]
        let letnewTasksHigh = code.clearLowPriority(tasks);
        expect(letnewTasksHigh[0].text).not.toBe("dummy")
        expect(letnewTasksHigh[0].priority).toBe("HIGH")
    })

    test("addPicture should add a picture URL to the pictureURLs array", function () {
        //sanity 
        const picManager = new code.PictureManager() 
        expect(picManager.pictureURLs.length).toBe(0)
        
        picManager.addPicture("some_url")
        expect(picManager.pictureURLs.length).toBe(1)           //test
        expect(picManager.pictureURLs).toContain("some_url")    //double check 
      })

      test("remove picture should remove a picture URL ", function () {
        //sanity 
        const picManager = new code.PictureManager() 
        picManager.addPicture("some_url")
        expect(picManager.pictureURLs.length).toBe(1) 
        picManager.removePicture("some_url");
        expect(picManager.pictureURLs.length).toBe(0)

     })

     test("manipulate test",()=>{
        let x = ["food", "item", "location"]
        let y = ["cherry", "lightbulb", "Tazmania"]
        const MapNew = new code.ArrayManipulator();
        const ObjectXy = MapNew.manipulate(x,y);
        let objectLength =(Object.keys(ObjectXy).length);
        expect(objectLength).toEqual(3);
        expect(ObjectXy).toEqual({
            food: "cherry",
            item: "lightbulb",
            location: "Tazmania"
          });
        expect(ObjectXy["food"]).toBe("cherry");
    
    })

    test("should return a message when array lengths don't match", () => {
        let x = ["food", "item", "location"]
        let y = ["cherry", "lightbulb"]    
        const MapNew = new code.ArrayManipulator();
        const ObjectXy = MapNew.manipulate(x,y);    
        expect(ObjectXy).toEqual("Array lengths don't match")
    })



});



