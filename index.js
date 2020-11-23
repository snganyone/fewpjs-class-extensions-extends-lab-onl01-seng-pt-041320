// Your code here

class Polygon{
    constructor(arr){
        this.arr = arr;
    }

    get countSides(){
        return this.arr.length;
    }
    
    get perimeter(){
        let count = 0;
        for(let i = 0; i < this.arr.length; i++){
            count += this.arr[i];
        }
        return count;
    }
}