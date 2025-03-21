﻿namespace Mission10_Pierce.Entities
{
    public class Bowler
    {
        public int BowlerID { get; set; }
        public string? BowlerFirstName { get; set; }  // Allow NULL values
        public string? BowlerMiddleInit { get; set; }
        public string? BowlerLastName { get; set; }
        public string? BowlerAddress { get; set; }
        public string? BowlerCity { get; set; }
        public string? BowlerState { get; set; }
        public string? BowlerZip { get; set; }
        public string? BowlerPhoneNumber { get; set; }

        public int TeamID { get; set; }
        public Team? Team { get; set; }  // Allow null team associations
    }
}

