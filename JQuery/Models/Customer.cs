using System.ComponentModel.DataAnnotations;

namespace JQuery.Models
{
    public class Customer
    {
        public  int Id {get; set; }

        [Required]
        [MaxLength(100)]
        public string FirstName {get; set; }
        [Required]
        [MaxLength(100)]
        public string LastName {get; set; }

        public string Email {get; set; }

        [MaxLength(100)]
        public string Contact {get; set; }  
        public DateTime DateOfBirth { get; set; }
       

    }
}
