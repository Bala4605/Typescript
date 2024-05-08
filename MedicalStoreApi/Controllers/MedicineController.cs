using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalStoreApi.model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MedicalStoreApi.Controllers
{
    [ApiController]
    [Route("Medicine")]
    public class MedicineController : ControllerBase
    {

        private readonly ApplicationDBContext _dbContext;
        public MedicineController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
        }

        [HttpGet]
        public IActionResult GetMedicine(){
            return Ok(_dbContext._medicinesList);
        }
        [HttpGet("{medicineID}")]
        public IActionResult GetIndividualMedicineDetails(int medicineID)
        {
            var medicine=_dbContext._medicinesList.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }
        [HttpPost]
        public IActionResult AddMedicineDetails([FromBody] Medicine medicine)
        {
            _dbContext._medicinesList.Add(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpPut("{MedicineID}")]
        public IActionResult UpdateMedicineDetails(int medicineID,[FromBody] Medicine medicine)
        {
            var medicineOld=_dbContext._medicinesList.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicineOld==null)
            {
                return NotFound();
            }
            medicineOld.MedicineCount=medicine.MedicineCount;
            medicineOld.ExpiryDate=medicine.ExpiryDate;
            medicineOld.MedicineName=medicine.MedicineName;
            medicineOld.MedicinePrice=medicine.MedicinePrice;
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpPut("{MedicineID}/{MedicineCount}")]
        public IActionResult UpdateCount(int medicineID,int MedicineCount)
        {
            var medicineOld=_dbContext._medicinesList.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicineOld==null)
            {
                return NotFound();
            }
            medicineOld.MedicineCount=MedicineCount;
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpDelete("{MedicineID}")]
        public IActionResult DeleteMedicine(int medicineID)
        {
        var medicine=_dbContext._medicinesList.FirstOrDefault(medicine=>medicine.MedicineID==medicineID);
            if(medicine==null)
            {
                return NotFound();
            }
            _dbContext._medicinesList.Remove(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}