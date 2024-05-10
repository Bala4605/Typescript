using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("users")]
    public class UserInfoController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserInfoController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
        }
        
        [HttpGet]
        public IActionResult GetUser(){
            return Ok(_dbContext._usersList);
        }

        [HttpGet("{userID}")]
        public IActionResult GetIndividualUser(int userID)
        {
            var user=_dbContext._usersList.FirstOrDefault(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult AddUserDetails([FromBody] UserInfo user)
        {
            _dbContext._usersList.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }
        
        [HttpPut("{userID}/{amount}")]
        public IActionResult UpdateCount(int userID,int amount)
        {
            var user=_dbContext._usersList.FirstOrDefault(user=>user.UserID==userID);
            if(user==null)
            {
                return NotFound();
            }
            user.Amount=amount;
            _dbContext.SaveChanges();
            return Ok(user);
        }
        
    }
}