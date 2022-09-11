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
        public static List<User> Users = new List<User>()
        {
              new User{Id="1",Name="david",Password="01234",Email="123@gmail.com"},
            new User{Id="123456787",Name="chaim",Password="01234",Email="123@gmail.com"}
        };

    }
}