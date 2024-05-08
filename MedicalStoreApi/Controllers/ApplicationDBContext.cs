using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalStoreApi.model;
using Microsoft.EntityFrameworkCore;

namespace MedicalStoreApi.Controllers
{
    public class ApplicationDBContext : DbContext
{
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> _usersList{get;set;}
    public DbSet<OrderInfo> _ordersList{get;set;}
    public DbSet<Medicine> _medicinesList{get;set;}
    }
}