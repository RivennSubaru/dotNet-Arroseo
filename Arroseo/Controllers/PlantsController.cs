using Arroseo.Models;
using Arroseo.Services;
using Microsoft.AspNetCore.Mvc;

namespace Arroseo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlantsController : ControllerBase
    {
        private readonly PlantService _service;

        public PlantsController(PlantService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var plants = await _service.GetAllPlantsAsync();
            return Ok(plants);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            var plant = await _service.GetPlantByIdAsync(id);
            if (plant == null) return NotFound();
            return Ok(plant);
        }

        [HttpGet("needs-watering")]
        public async Task<IActionResult> GetPlantsThatNeedWatering()
        {
            var plants = await _service.GetPlantsThatNeedWateringAsync();
            return Ok(plants);
        }

        [HttpPost]
        public async Task<IActionResult> Create(PlantSchedule plant)
        {
            var createdPlant = await _service.SavePlantAsync(plant);
            return CreatedAtAction(nameof(GetById), new { id = createdPlant.Id }, createdPlant);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(long id, PlantSchedule updatedPlant)
        {
            var existingPlant = await _service.GetPlantByIdAsync(id);
            if (existingPlant == null) return NotFound();

            existingPlant.PlantName = updatedPlant.PlantName;
            existingPlant.LastWatered = updatedPlant.LastWatered;
            existingPlant.WateringFrequencyInDays = updatedPlant.WateringFrequencyInDays;
            existingPlant.Species = updatedPlant.Species;

            await _service.SavePlantAsync(existingPlant);
            return Ok(existingPlant);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            await _service.DeletePlantAsync(id);
            return NoContent();
        }
    }
}
