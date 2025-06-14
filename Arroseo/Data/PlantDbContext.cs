using Arroseo.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Arroseo.Data
{
    public class PlantDbContext : DbContext
    {
        public PlantDbContext(DbContextOptions<PlantDbContext> options) : base(options) { }
        public DbSet<PlantSchedule> Plants { get; set; }
    }
}
