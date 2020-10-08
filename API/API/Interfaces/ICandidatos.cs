using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface ICandidatos
    {
        Task<Candidatos>    BuscarId(string id);
        Task<Candidatos>    BuscarNome(string nome);
        Task<Candidatos[]>  BuscarTodos();
        void Salvar(Candidatos dados);
    }
}
