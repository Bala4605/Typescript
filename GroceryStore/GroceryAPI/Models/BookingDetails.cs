using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryAPI.Models
{
    [Table("BookingDetails",Schema ="public")]
    public class BookingDetails
    {
        [Key]
        public int BookingID {get;set;}
        public int CustomerID {get;set;}
        public int TotalPrice  {get;set;}
        public DateTime DateOfBooking  {get;set;}
        public string BookingStatus  {get;set;}

    }
}