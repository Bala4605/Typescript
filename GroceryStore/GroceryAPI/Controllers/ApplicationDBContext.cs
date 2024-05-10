using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GroceryAPI.Controllers
{
    public class ApplicationDBContext : DbContext
   {
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> _usersList{get;set;}
    public DbSet<BookingDetails> _bookingsList{get;set;}
    public DbSet<OrderDetails> _ordersList{get;set;}
    public DbSet<ProductDetails> _productsList{get;set;}
    }
}