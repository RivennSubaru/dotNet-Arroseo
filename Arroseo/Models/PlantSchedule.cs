using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Arroseo.Models
{
    [Table("plant_schedule")]
    public class PlantSchedule
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        public string PlantName { get; set; }

        public string Species { get; set; }

        public DateTime? LastWatered { get; set; }

        public int? WateringFrequencyInDays { get; set; }
    }
}
