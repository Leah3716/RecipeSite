import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './Recipe';

@Pipe({
  name: 'range'
})
// start:number=0,end:number=300,id:string,name
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
  //   if(id=="-1"||id==null)
  //    {
  //     return item.Name.includes("עו");
  //  }
  // //  return item;
  // //  if(name!=null&&id=="-1"||id==null)
  // //    {
  // //     return item.Name.includes(name);
  // //  }
  //  return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.CategoryId==id&&item.Name.includes(name);
      // if(id==null||id=="-1")
    // if(name!=null)
    //   return item.Name.includes(name);
    //   return item;
      // return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.Name.includes(name);
//  if(name==null&&id==null||id=="-1")
//        return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end;
//  if(id=="-1"||id==null)
//       return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.Name.includes(name);
//       if(name==null&&id!="-1"&&id!=null)
//       return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.CategoryId==id;
//       return item.TimeOfPreparation>=start&&item.TimeOfPreparation<=end&&item.CategoryId==id&&item.Name.includes(name);
    })
  }


}
