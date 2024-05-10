using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("Order")]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
        }
        
        [HttpGet]
        public IActionResult GetOrder(){
            return Ok(_dbContext._ordersList);
        }
        [HttpGet("{bookingID}")]
        public List<OrderDetails> GetOrdersByID(int bookingID){
            List<OrderDetails> temporary=new List<OrderDetails>();
            _dbContext._ordersList.ToList().ForEach((value)=>{
                if(value.BookingID==bookingID){
                    temporary.Add(value);
                }
                });
            return temporary;
        }
    
        [HttpPost]
        public IActionResult AddOrders([FromBody] OrderDetails order)
        {
            _dbContext._ordersList.Add(order);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}