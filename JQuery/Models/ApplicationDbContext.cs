using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace JQuery.Models
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options) 
        {
             
            
        }
        public DbSet<Customer> customers {  get; set; }
    }
}
