using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetrocardApi.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;

namespace MetrocardApi.Controllers
{
    [ApiController]
    [Route("User")]
    public class UserController : ControllerBase
    {
       
   private readonly ApplicationDBContext _dbContext;
    public UserController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
    }

     
     
     [HttpGet]
     public IActionResult GetUser(){
        _dbContext.SaveChanges();
        return Ok(_dbContext.usersList);
     }


    [HttpGet("{id}")]
     public IActionResult GetUserByID(int id){
        var curUser=_dbContext.usersList.FirstOrDefault(m=>m.UserID==id);
        _dbContext.SaveChanges();
        return Ok(curUser);
     }


     [HttpPost]
     public IActionResult PostData([FromBody] UserInfo data){
      _dbContext.usersList.Add(data);
      _dbContext.SaveChanges();
      return Ok();
     }


     [HttpPut("{id}/{amount}")]
     public IActionResult PutData(int id,string amount){
         var curUser=_dbContext.usersList.FirstOrDefault(m=>m.UserID==id);
         if(curUser!=null){
         curUser.Amount+=int.Parse(amount);
         _dbContext.SaveChanges();
         }
         return Ok();
     }
     
    }
   
    
    
}