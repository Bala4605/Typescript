using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MedicalStoreApi.model
{
    [Table("medicine", Schema = "public")]
    public class Medicine
    {
  
    [Key]
    public int MedicineID { get; set; }
    public string MedicineName{ get; set; }
    public int MedicineCount { get; set; }
    public int MedicinePrice { get; set; }
    public DateTime ExpiryDate { get; set; }

    }
}