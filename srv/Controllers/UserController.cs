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
    public class UserController : ApiController
    {
        [HttpPost]
        public IHttpActionResult register(User u)
        {
            //SmallUser su = new SmallUser();
            //su.Name = u.Name;
            //su.Password = u.Password;
            //if (logIn(u.Id) == null)
            if (DB.Users.FirstOrDefault(i => u.Name == i.Name && u.Password == i.Password) == null)
            {
                DB.Users.Add(new User() { Id = u.Id, Name = u.Name, Password = u.Password, Email = u.Email });
                return Ok(u);
            }
            logIn(new SmallUser(u.Name,u.Password));
            return Conflict();
        }

        [HttpPost]
        public IHttpActionResult logIn(SmallUser use)
        {
            if ((DB.Users.FirstOrDefault(i => use.Name == i.Name ) == null))
            return  Content(HttpStatusCode.NotFound, "Foo does not exist.");
            if ((DB.Users.FirstOrDefault(i => use.Name == i.Name && use.Password == i.Password) == null))
                return StatusCode(HttpStatusCode.Conflict);

            return Ok(DB.Users.FirstOrDefault(i => use.Name == i.Name && use.Password == i.Password));
        }
        [HttpGet]
        public List<User> Get()
        {
            return DB.Users;
        }



    }
}
