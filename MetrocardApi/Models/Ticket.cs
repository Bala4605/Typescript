using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetrocardApi.Models
{
    [Table("ticket", Schema = "public")]
    public class Ticket
    {
      [Key]
      public int TravelID{get;set;}  
      public string From{get;set;}  
      public string	To{get;set;}
      public int Fair{get;set;}

    }
}