using Microsoft.AspNetCore.Mvc;
using Registerproject.Models;
using System.Threading.Tasks;

namespace Registerproject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistionController : ControllerBase
    {
        private AppDbContext db;

        public RegistionController(AppDbContext db)
        {
            this.db = db;
        }
        [Route("Create")]
        [HttpPost]
        public async Task<IActionResult> Create(Registration registion)
        {
            db.Registration.Add(registion);
            db.SaveChanges();
            return Ok();
        }

    }
}
