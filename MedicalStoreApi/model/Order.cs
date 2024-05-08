using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MedicalStoreApi.model
{
    [Table("orderinfo", Schema = "public")]
    public class OrderInfo
    {
    [Key]    
    public int OrderID { get; set; }
    public int MedicineID { get; set; }
    public int UserID { get; set; }
    public int MedicineCount { get; set; }
    public int MedicinePrice { get; set; }
    public string PurchaseStatus { get; set; }
    public DateTime OrderDate { get; set; }

    }
}