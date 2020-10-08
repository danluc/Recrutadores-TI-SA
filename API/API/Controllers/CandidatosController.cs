using API.Interfaces;
using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatosController : ControllerBase
    {
        private readonly ICandidatos _candidatos;

        public CandidatosController(ICandidatos candidatos)
        {
            _candidatos = candidatos;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var res = await _candidatos.BuscarTodos();
                return Ok(new { dados = res });
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, new { message = $"Falhou: \n {e.Message}" });
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var res = await _candidatos.BuscarId(id);
                return Ok(new { dados = res });
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, new { message = $"Falhou: \n {e.Message}" });
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Candidatos candidatos)
        {
            try
            {
                var res = await _candidatos.BuscarNome(candidatos.Nome);
                if(res != null)
                {
                    return this.StatusCode(StatusCodes.Status409Conflict, new { message = "Candidato com esse nome já existe nos nossos registros." });
                }
                _candidatos.Salvar(candidatos);
                return Ok(new { message = "Candidato cadastrado com sucesso.", dados = candidatos });
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, new { message = $"Falhou: \n {e.Message}" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromRoute] string id, [FromBody] Candidatos candidatos)
        {
            try
            {
                var res = await _candidatos.BuscarId(id);
                if(res == null)
                {
                    return this.StatusCode(StatusCodes.Status404NotFound, new { message = "Candidato não encontrado." });
                }
                res.Nome            = candidatos.Nome == null ? res.Nome : candidatos.Nome;
                res.Telefone        = candidatos.Telefone == null ? res.Telefone : candidatos.Telefone;
                res.UrlLinkedin     = candidatos.UrlLinkedin;
                res.UsuarioGithub   = candidatos.UsuarioGithub;
                _candidatos.Salvar(res);
                return Ok(new { message = "Candidato atualizado com sucesso.", dados = res });
            }
            catch (Exception e)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, new { message = $"Falhou: \n {e.Message}" });
            }
        }
    }
}
