using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace srv.Models
{
    public class Recipe
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string CategoryId { get; set; }
        public int TimeOfPreparation { get; set; }
        public int LevelOfDifficulty { get; set; }
        public DateTime AddDate { get; set; }
        public List<string> Ingredients { get; set; }
        public List<string> PreparationMethod { get; set; }
        public string UseId { get; set; }
        public string ImgRouting { get; set; }

    }
}