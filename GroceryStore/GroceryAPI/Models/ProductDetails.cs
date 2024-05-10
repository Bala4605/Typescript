using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Models
{
    [Table("ProductDetails",Schema ="public")]
    public class ProductDetails
    {
    
        [Key]
        public int ProductID {get;set;}
        public string ProductName  {get;set;}
        public int QuantityAvailable  {get;set;}
        public int PricePerQuantity  {get;set;}
        public string[] Image {get;set;}
        public DateTime PurchaseDate {get;set;}
        public DateTime ExpiryDate {get;set;}
    }
}