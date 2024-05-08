using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MetrocardApi.Models
{
    [Table("image", Schema = "public")]
    public class Images
    {
    
      [Key]
      public int UserID { get; set; }
      public string UserName { get; set; }
      public string Image { get; set; }
    }
}