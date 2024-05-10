using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Models
{
    [Table("OrderDetails",Schema ="public")]
    public class OrderDetails
    {
        [Key]
        public int OrderID {get;set;}
        public int BookingID {get;set;}
        public string ProductName  {get;set;}
        public int PurchaseCount  {get;set;}
        public int PriceOfOrder  {get;set;}

    }
}