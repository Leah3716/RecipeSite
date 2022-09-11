import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './Recipe';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(arr:Recipe[], start:number=0,end:number=300,id:string,name): Recipe[] {

   return arr.filter((item,index)=>{
     if(name==null)
     { if(id==null||id=="-1")
      return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end;
      return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.CategoryId==id;
   }
   if(id==null||id=="-1")
   {
   return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.Name.includes(name);
   }
   
   return item.CategoryId==id;
    })
  }


}
