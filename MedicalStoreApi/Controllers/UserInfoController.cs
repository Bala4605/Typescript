using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using MedicalStoreApi.model;
using Microsoft.AspNetCore.Mvc;

namespace MedicalStoreApi.Controllers
{
    [ApiController]
    [Route("UserInfo")]
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
        [HttpPost]
        public IActionResult AddMedicineDetails([FromBody] UserInfo user)
        {
            _dbContext._usersList.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}/{amt}")]
        public IActionResult UpdateCount(int id,int amt)
        {
            var medicineOld=_dbContext._usersList.FirstOrDefault(medicine=>medicine.UserID==id);
            if(medicineOld==null)
            {
                return NotFound();
            }
            medicineOld.Amount=amt;
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}