using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace srv.Models
{
    public class DB
    {

        public static List<Category> Categories = new List<Category>()
        {
            new Category{Id="0",Name="לחמים ומאפים",Routing="assets/img/sandwich.png"},
            new Category{Id="1",Name="קינוחים",Routing="assets/img/0.png"},
            new Category{Id="2",Name="מנות עיקריות",Routing="assets/img/food-donation.png"},
            new Category{Id="3",Name="מרקים",Routing="assets/img/soup.png"}
        };
        public static List<Recipe> recipes = new List<Recipe>()
        {
            new Recipe{Id="0",Name="עוגה בטעם וניל",CategoryId="1",Ingredients=new List<string>(){"floor","sugar"},TimeOfPreparation=40,LevelOfDifficulty=2,AddDate=DateTime.Today,PreparationMethod=new List<string>(){"mix","bake"},UseId="123456789",ImgRouting="assets/img/Vanilla Cake.jpg"},
            new Recipe{Id="1",Name="עוגת טריקולד",CategoryId="1",Ingredients=new List<string>(){"floor","sugar"},TimeOfPreparation=80,LevelOfDifficulty=5,AddDate=DateTime.Today,PreparationMethod=new List<string>(){"mix","bake"},UseId="123456789",ImgRouting="assets/img/עוגת טריקולד.jpg"},
            new Recipe{Id="2",Name="מרק בצל",CategoryId="3",Ingredients=new List<string>(){ "  כף גדושה שמרים יבשים", "3 כפות גדושות סוכר","4 כפות מלאות דבש" },TimeOfPreparation=22,LevelOfDifficulty=2,AddDate=DateTime.Today,PreparationMethod=new List<string>(){ "-מערבבים את הקמח עם השמרים והסוכר. מוסיפים דבש, ביצה ומים פושרים ומערבבים. מוסיפים את השמן ולשים את הבצק במשך 3-4 דקות (כמובן שניתן להשתמש במיקסר עם וו לישה). אם הבצק דביק- להוסיף עוד קמח. אם הבצק יבש- להוסיף עוד קצת מים. מפזרים מעל הבצק כפית מלח באופן אחיד וממשיכים ללוש במשך 4-5 דקות נוספות עד לקבלת בצק אחיד וחלק.", "bake"},UseId="123456789",ImgRouting="assets/img/onion soup.jpg"},
            new Recipe{Id="3",Name="לחמניות",CategoryId="0",Ingredients=new List<string>(){ "  כף גדושה שמרים יבשים", "3 כפות גדושות סוכר","4 כפות מלאות דבש" },TimeOfPreparation=120,LevelOfDifficulty=5,AddDate=DateTime.Today,PreparationMethod=new List<string>(){ "-מערבבים את הקמח עם השמרים והסוכר. מוסיפים דבש, ביצה ומים פושרים ומערבבים. מוסיפים את השמן ולשים את הבצק במשך 3-4 דקות (כמובן שניתן להשתמש במיקסר עם וו לישה). אם הבצק דביק- להוסיף עוד קמח. אם הבצק יבש- להוסיף עוד קצת מים. מפזרים מעל הבצק כפית מלח באופן אחיד וממשיכים ללוש במשך 4-5 דקות נוספות עד לקבלת בצק אחיד וחלק.", "bake"},UseId="123456789",ImgRouting="assets/img/לחמניות.jpg"},
            new Recipe{Id="4",Name="עוגת גבינה",CategoryId="1",Ingredients=new List<string>(){"floor","sugar"},TimeOfPreparation=40,LevelOfDifficulty=2,AddDate=DateTime.Today,PreparationMethod=new List<string>(){"mix","bake"},UseId="123456789",ImgRouting="assets/img/Cheese Cake.jpg"},
            new Recipe{Id="5",Name="שניצלונים",CategoryId="2",Ingredients=new List<string>(){"floor","sugar"},TimeOfPreparation=80,LevelOfDifficulty=5,AddDate=DateTime.Today,PreparationMethod=new List<string>(){"mix","bake"},UseId="123456789",ImgRouting="assets/img/Chinese Chicken.jpg"},
            new Recipe{Id="6",Name="מרק תפוחי אדמה",CategoryId="3",Ingredients=new List<string>(){"floor","sugar"},TimeOfPreparation=35,LevelOfDifficulty=2,AddDate=DateTime.Today,PreparationMethod=new List<string>(){"mix","bake"},UseId="123456789",ImgRouting="assets/img/potato soup.jpg"},
            new Recipe{Id="7",Name="פיצה",CategoryId="0",Ingredients=new List<string>(){"floor","sugar"},TimeOfPreparation=120,LevelOfDifficulty=5,AddDate=DateTime.Today,PreparationMethod=new List<string>(){"mix","bake"},UseId="123456789",ImgRouting="assets/img/פיצה.jpg"}
        };
        //מצרכים למתכון

//        כף גדושה שמרים יבשים

//3 כפות גדושות סוכר

//4 כפות מלאות דבש

//ביצה

//3/4 כוס מים פושרים(180 מ”ל)

//6 כפות שמן

//כפית מלח

//לציפוי: ביצה טרופה, כפית דבש ושומשום



//20 מנות/יחידות, 115 גרם למנה\יחידה(תלוי בגודל המנה)

        //הבצק
        //קמח חיטה לבן בהיר מנופה - חבילה(1000 גרם)
        //שמרים יבשים - 2 כף - סה"כ (22 גרם)
        //סוכר - כוס(179 גרם)
        //מים - 3 כוס - סה"כ (720 מ"ל)
        //פושרים-חמימים
        //שמן קנולה - כוס(240 מ"ל)
        //ביצה - Large
        //מלח - כף שטוחה
        //הציפוי
        //חלמון ביצה - יחידה (18 גרם)
        //טרוף
        //סילאן טהור - כפית(9 גרם)
        //שומשום - 2 חופן - סה"כ (32 גרם)
        //לפי הטעם(או קצח)
        //- פרסומת -
        //אופן הכנת המתכון
        //אחר
        //סוג המנה
        //בינוני
        //דרגת קושי
        //מעל שעה
        //זמן הכנה
        //פרווה, כשר
        //כשרות
        //1
        //לערבב קלות בקערת המיקסר את השמרים יחד עם הסוכר והמים, ולהמתין כ- 10 דקות לתפיחה(אם השמרים לא תופחים - יש סיכוי שהם כבר לא פעילים).
        //2
        //להוסיף לקערה את הקמח, השמן והביצה, וללוש כ- 3 דקות עד שנוצר בצק.להוסיף את המלח וללוש כ- 7 דקות נוספות (סה"כ כ- 10 דקות של לישה, אפשר גם ידנית). במידה והבצק ממש ממש דביק - אפשר להוסיף כף קמח (אך הוא צריך להיות מעט דביק).
        //3
        //להניח את הבצק בקערה משומנת, להפוך אותו כך שיהיה משומן מכל הצדדים ולהתפיח כשעה או עד להכפלת הנפח.
        //4
        //לאחר שהבצק תפח יש להוציא ממנו את האוויר, לחלק לחתיכות של 100 גרם כל אחת ולכדרר לכדורים.להניח את הכדורים להתפחה של כחצי שעה נוספת. בינתיים, לערבב את החלמון ביחד עם הסילאן בקערה קטנה.
        //5
        //לסדר את עיגולי הבצק בתבנית עגולה ומשומנת (שימו לב ל"ציוד נדרש" - סה"כ 2 תבניות שונות), להבריש אותם בחלמון הטרוף עם הסילאן ולפזר מעל שומשום/קצח (או שילוב שלהם) בנדיבות ולפי הטעם האישי.
        //6
        //לאפות את החלות בתנור שחומם מראש לחום של 180 מעלות למשך כחצי שעה או עד שהן מוכנות. מתקבלות חלות שבת מושלמות, טעימות ורכות כמו עננים!
        //7
        //בתיאבוןחיוך
        //ללא צבעי מאכלללא חומרים משמרים
        //
        //ציוד נדרש: תבנית גדולה עגולה (28 ס"מ) + חלה בינונית נוספת שאופים ללא תבנית.

        //
        //טוב, אז אני חייבת לעצור רגע ולכתוב משהו: זה המתכון האהוב עליי, שמעתם? אין יותר טוב ממנו.הייתי כל כך גאה בו כשכל המשפחה באו אליי לארוחת שישי...הבצק תפח לי בצורה מדהימה, הוא ממש יצא מהקערה והיה פשוט רך ברמות, היה לי כיף ונעים להכין אותו והתוצאה יצאה מטורפת, פשוט ענן שאפשר לקפוץ עליו והוא יתפוס אותך כשאתה נופל. נשבעת, אני חולמת על החלה הזאת בלילה (:.

        public static List<User> Users = new List<User>()
        {
              new User{Id="1",Name="david",Password="01234",Email="123@gmail.com"},
            new User{Id="123456787",Name="chaim",Password="01234",Email="123@gmail.com"}
        };

    }
}