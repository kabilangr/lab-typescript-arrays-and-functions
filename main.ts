import { ArrayService } from "./app-service";

export class ArrayComponent implements ArrayService {

    constructor() {
        var myArray: number[];
    }

    public arrayFindMultiples(myArray: any) : Array<Number> {
        var a: Array<number>;
      for(var i=0;i<myArray.length;i++)
      {
          if(myArray[i]%5==0)
          a[i]=myArray[i];
      }
      return a;
    }

    public arraySeparate(myArray: any) : Array<string>{
        var a : Array<string>;var j:number=0;
        for(var i=0;i<myArray.length;i++)
        {
            if(myArray[i]==="String")
            a[j++]=myArray[i];
        }
        return a;
    }

    public arraySplit(str: any) : Array<number>{
        var a : Array<number>;var k: number=0;
        var l:number=0;
        for(var i=0;i<str.length;i++)
        {
            if(str[i]==='Number')
            {
            for(var j=0;j<str[i];i++)
            {
                if(str[i]%j==0)
                k++;
            }
            if(k>2)
            a[l++]=str[i];
        }
        }
        return a;
    }

    public arraySort(myArray:any):Array<string>{
      var a:Array<string>; var temp:string="";
      for(var i=0;i<myArray.length-1;i++)
      {
          for(var j=i;j<myArray.length;j++)
          {
            if(myArray[i].compareTo(myArray[j]))
            {
                temp=myArray[i];
                myArray[i]=myArray[j];
                myArray[j]=temp;
            }
          }
      }
      return a;
    }

    public arrayReplace(myArray:any):Array<number>{
       
        for(var i=0;i<myArray.length;i++)
        {
            if(myArray[i]%3==0)
            myArray[i]=5;
        }
        return myArray;
}


let  array = new ArrayComponent();
var myArray: number[] = [34, 45, 60, 23, 13, 25, 70];
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySort(myArray));
console.log(array.arrayReplace(myArray));



