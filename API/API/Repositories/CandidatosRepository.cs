using API.Entities;
using API.Interfaces;
using API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repositories
{
    public class CandidatosRepository : ICandidatos
    {
        private readonly BancoContext _bancoContext;

        public CandidatosRepository(BancoContext bancoContext)
        {
            _bancoContext = bancoContext;
        }

        public async Task<Candidatos> BuscarId(string id)
        {
            IQueryable<Candidatos> query = _bancoContext.Candidatos.Where(c => c.Id == id);
            return await query.FirstOrDefaultAsync();
        }

        public async Task<Candidatos> BuscarNome(string nome)
        {
            IQueryable<Candidatos> query = _bancoContext.Candidatos.Where(c => c.Nome.Trim() == nome.Trim());
            return await query.FirstOrDefaultAsync();
        }

        public async Task<Candidatos[]> BuscarTodos()
        {
            IQueryable<Candidatos> query = _bancoContext.Candidatos;
            return await query.ToArrayAsync();
        }

        public void Salvar(Candidatos dados)
        {
            if (dados.Id != null)
            {
                _bancoContext.Update(dados);
            }
            else
            {
                _bancoContext.Add(dados);
            }
            _bancoContext.SaveChanges();
        }
    }
}
