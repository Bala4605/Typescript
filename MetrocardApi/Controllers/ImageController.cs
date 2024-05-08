using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetrocardApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace MetrocardApi.Controllers
{
    [ApiController]
    [Route("image")]
    public class ImageController : ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
       public ImageController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
       } 
       
    [HttpPost]
     public IActionResult PostData([FromBody] Images data){
      _dbContext._imageList.Add(data);
      _dbContext.SaveChanges();
      return Ok();
     }
     [HttpGet]
     public IActionResult GetUser(){
        _dbContext.SaveChanges();
        return Ok(_dbContext._imageList);
     }

    }
}