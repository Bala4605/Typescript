using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetrocardApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace MetrocardApi.Controllers
{
    [ApiController]
    [Route("Travel")]
    public class TravelController : ControllerBase
    {

    private readonly ApplicationDBContext _dbContext;
    public TravelController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
    }
    [HttpGet]
    public IActionResult GetData(){
        // Travel.TravelIdAutoIncrement=3001;
        return Ok(_dbContext.travelsList);
    }

    [HttpGet("{id}")]
    public IActionResult GetDataByID(int id){
        // Travel.TravelIdAutoIncrement=3001;
        // var curUser=_dbContext.travelsList.All(m=>m.UserID==id);
        _dbContext.SaveChanges();
        return Ok(_dbContext.travelsList);
    }

    [HttpPost]
    public IActionResult PostData([FromBody] Travel data){
    //   if(_travelList.Count>9){  
    //   Travel.TravelIdAutoIncrement=int.Parse("30"+(_travelList.Count+1));}
    //   else{
    //   Travel.TravelIdAutoIncrement=int.Parse("300"+(_travelList.Count+1));  
    //   }
    //   string[] datas=data.Split(",");
    //   string[] dateSplit=datas[3].Split("/");
      _dbContext.travelsList.Add(data);
      _dbContext.SaveChanges();
      return Ok();
     }
    }
}