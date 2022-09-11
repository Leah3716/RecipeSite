using srv.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace srv.Controllers
{
 
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RecipeController : ApiController
    {
        public List<Recipe> Get()
        {
            return DB.recipes;
        }
        
        public List<Category> getCategory()
        {
            return DB.Categories;
        }
        public Recipe GetById(string id)
        {
            return DB.recipes.FirstOrDefault(i => i.Id == id);
        }
        public List<Recipe> GetByTimeOfPreparation(int min)
        {
            return DB.recipes.Where(i => i.TimeOfPreparation < min).ToList();
        }
        [HttpPost]
        public void AddRecipe(Recipe r)
        {
             DB.recipes.Add(r);
        }
        [HttpDelete]
        public void Delete(string id)
        {
            Recipe toDelete = DB.recipes.FirstOrDefault(i => i.Id==id);
            DB.recipes.Remove(toDelete);
           
        }
        [HttpPut]
        public void Edit(String id,string name)
        {
            DB.recipes.FirstOrDefault(i => i.Id == id).Name = name;
        }

    }
}
