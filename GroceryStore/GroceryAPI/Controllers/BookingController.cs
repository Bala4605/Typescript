using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("booking")]
    public class BookingController : ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
        public BookingController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
        }
        
        [HttpGet]
        public IActionResult GetBookings(){
            return Ok(_dbContext._bookingsList);
        }

        // [HttpGet("{userID}")]
        // public IActionResult GetBookingsByUser(int userID)
        // {
        //     var booking=_dbContext._bookingsList.FirstOrDefault(booking=>booking.CustomerID==userID);
        //     if(booking==null)
        //     {
        //         return NotFound();
        //     }
        //     return Ok(booking);
        // }
    
        [HttpPost]
        public IActionResult AddBookings([FromBody] BookingDetails booking)
        {
            _dbContext._bookingsList.Add(booking);
            _dbContext.SaveChanges();
            return Ok(booking);
        } 
        
    }
}