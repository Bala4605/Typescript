using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetrocardApi.Models
{
    [Table("travel", Schema = "public")]
    public class Travel
    {
        [Key]
        public int  TravelID{get;set;}
        public int UserID{get;set;}
        public string From{get;set;}
        public string To{get;set;}
        public DateTime TravelDate{get;set;}
        public int Fair{get;set;}
}
}