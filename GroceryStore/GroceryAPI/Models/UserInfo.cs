using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Models
{
    [Table("UserInfo",Schema ="public")]
    public class UserInfo
    {
        [Key]
        public int UserID {get;set;}
        public string Name  {get;set;}
        public string Email  {get;set;}
        public string Password  {get;set;}
        public string[] Image {get;set;}
        public int Amount {get;set;}

    }
}