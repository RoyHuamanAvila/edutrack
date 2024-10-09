using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlataformaSeguimientoEducativo.Models
{
    public class Communication
    {
        public int CommunicationId { get; set; }
        public int SenderId { get; set; }
        public int ReceiverId { get; set; }
        public string Message { get; set; }
        public DateTime DateSent { get; set; }

        public User Sender { get; set; }
        public User Receiver { get; set; }
    }
}
