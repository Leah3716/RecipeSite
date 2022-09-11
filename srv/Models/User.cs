using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace srv.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
    public class SmallUser
    {
        public SmallUser()
        {

        }
        public SmallUser(string name,string password)
        {
            Name = name;
            Password = password;
        }
        public string Name { get; set; }
        public string Password { get; set; }
       
    }
}