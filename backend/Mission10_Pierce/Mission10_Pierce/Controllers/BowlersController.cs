using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Pierce.Data;
using Mission10_Pierce.Entities;

namespace Mission10_Pierce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlersController : ControllerBase
    {
        private readonly BowlingLeagueContext _context;

        public BowlersController(BowlingLeagueContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetBowlers()
        {
            var bowlers = await _context.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks")
                .Select(b => new
                {
                    Name = $"{b.BowlerFirstName} {b.BowlerMiddleInit} {b.BowlerLastName}",
                    Team = b.Team.TeamName,
                    Address = b.BowlerAddress,
                    City = b.BowlerCity,
                    State = b.BowlerState,
                    Zip = b.BowlerZip,
                    Phone = b.BowlerPhoneNumber
                })
                .ToListAsync();

            return Ok(bowlers);
        }
    }
}

