using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetrocardApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetrocardApi.Controllers
{
    [ApiController]
    [Route("ticket")]
    
    public class TicketController : ControllerBase
    {
    private readonly ApplicationDBContext _dbContext;
    public TicketController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
    }

    // private static List<Ticket> _ticketList=new List<Ticket>
    // {};


    [HttpGet]
    public IActionResult GetData(){
        // Ticket._travelID=2001;
        _dbContext.SaveChanges();
        return Ok(_dbContext.ticketsList.ToList());
    }

    }
}