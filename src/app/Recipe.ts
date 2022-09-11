export class Recipe{
    constructor (public Id:string,public Name:string,public CategoryId:string,public TimeOfPreparation:number,
        public LevelOfDifficulty:number,public AddDate:Date,public Ingredients:string[],
       public PreparationMethod:string[] ,public UseId:string,public ImgRouting:string
        )
    {
        
    }
 }