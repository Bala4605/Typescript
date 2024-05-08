using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using MetrocardApi.Models;
using Microsoft.EntityFrameworkCore;

namespace MetrocardApi.Controllers
{
   public class ApplicationDBContext : DbContext, IDisposable
{
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
    {
        AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
    }
    public DbSet<UserInfo> usersList{get;set;}
    public DbSet<Ticket> ticketsList{get;set;}
    public DbSet<Travel> travelsList{get;set;}
    public DbSet<Images> _imageList{get;set;}
    }
}