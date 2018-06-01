﻿using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeeApi.Entities
{
    /// <summary>
    /// Represents a Work.
    /// </summary>
    public class Work
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        [Key]
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        /// <value>
        /// The name.
        /// </value>
        [MaxLength(30)]
        public string Name { get; set; }
        /// <summary>
        /// Gets or sets the date.
        /// </summary>
        /// <value>
        /// The date.
        /// </value>
        public DateTime Date { get; set; }
        /// <summary>
        /// Gets or sets the note.
        /// </summary>
        /// <value>
        /// The note.
        /// </value>
        [MaxLength(200)]
        public string Note { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this instance is completed.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this instance is completed; otherwise, <c>false</c>.
        /// </value>
        public bool IsCompleted { get; set; }
        /// <summary>
        /// Gets or sets the beekeeper.
        /// </summary>
        /// <value>
        /// The beekeeper.
        /// </value>
        public int BeekeeperId { get; set; }
        /// <summary>
        /// Gets or sets the beekeeper.
        /// </summary>
        /// <value>
        /// The beekeeper.
        /// </value>
        [ForeignKey("BeekeeperId")]
        public Beekeeper Beekeeper { get; set; }
    }
}