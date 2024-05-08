using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalStoreApi.model;
using Microsoft.AspNetCore.Mvc;

namespace MedicalStoreApi.Controllers
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
         [HttpPost]
        public IActionResult AddMedicineDetails([FromBody] OrderInfo medicine)
        {
            _dbContext._ordersList.Add(medicine);
            _dbContext.SaveChanges();
            return Ok();
            
        }

        [HttpPut("{orderID}")]
        public IActionResult UpdateStatus(int orderID)
        {
            var medicineOld=_dbContext._ordersList.FirstOrDefault(medicine=>medicine.OrderID==orderID);
            if(medicineOld==null)
            {
                return NotFound();
            }
            medicineOld.PurchaseStatus="Cancelled";
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{orderID}")]
        public IActionResult DeleteMedicine(int orderID)
        {
        var order=_dbContext._ordersList.FirstOrDefault(medicine=>medicine.MedicineID==orderID);
            if(order==null)
            {
                return NotFound();
            }
            _dbContext._ordersList.Remove(order);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}