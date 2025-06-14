using Arroseo.Models;
using Arroseo.Data;
using Microsoft.EntityFrameworkCore;

namespace Arroseo.Services
{
    public class PlantService
    {
        private readonly PlantDbContext _context;

        public PlantService(PlantDbContext context)
        {
            _context = context;
        }

        public async Task<List<PlantSchedule>> GetAllPlantsAsync()
        {
            return await _context.Plants.ToListAsync();
        }

        public async Task<PlantSchedule> SavePlantAsync(PlantSchedule plant)
        {
            if (plant.Id == 0)
                _context.Plants.Add(plant);
            else
                _context.Plants.Update(plant);
            await _context.SaveChangesAsync();
            return plant;
        }

        public async Task DeletePlantAsync(long id)
        {
            var plant = await _context.Plants.FindAsync(id);
            if (plant != null)
            {
                _context.Plants.Remove(plant);
                await _context.SaveChangesAsync();
            }
        }

        public bool NeedsWatering(PlantSchedule plant)
        {
            if (plant.LastWatered == null || plant.WateringFrequencyInDays == null)
                return false;

            var nextWatering = plant.LastWatered.Value.AddDays(plant.WateringFrequencyInDays.Value);
            return DateTime.Now > nextWatering;
        }

        public async Task<List<PlantSchedule>> GetPlantsThatNeedWateringAsync()
        {
            var allPlants = await GetAllPlantsAsync();
            return allPlants.Where(p => NeedsWatering(p)).ToList();
        }

        public async Task<PlantSchedule> GetPlantByIdAsync(long id)
        {
            return await _context.Plants.FindAsync(id);
        }
    }
}
