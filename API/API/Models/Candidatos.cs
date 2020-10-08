using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Candidatos
    {
        public string Id { get; set; }
        [MaxLength(100)]
        public string Nome { get; set; }
        [MaxLength(25)]
        public string Telefone { get; set; }
        [MaxLength(500)]
        public string UrlLinkedin { get; set; }
        [MaxLength(150)]
        public string UsuarioGithub { get; set; }
    }
}
