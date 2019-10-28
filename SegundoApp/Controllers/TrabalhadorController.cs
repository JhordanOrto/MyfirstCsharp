using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SegundoApp.Interfaces;
using SegundoApp.Models;

namespace SegundoApp.Controllers
{
    [ApiController]
    [Route("api/trabalhadores")]


     public class TrabalhadorController : ControllerBase
    {
        private readonly ITrabalhadorRepository _repo;

        public TrabalhadorController(ITrabalhadorRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<TrabalhadorModel> GetTrabalhador()
        {
            return _repo.GetTrabalhador();
        }

        [HttpGet("ativos")]
        public IEnumerable<TrabalhadorModel> GetAtivos()
        {
            return _repo.GetAtivos();
        }

        [HttpGet("{id}")]
        public TrabalhadorModel ObterTrabalhadorPorId(int id)
        {
            return _repo.ObterTrabalhadorPorId(id);
        }

        [HttpPost]
        public void InserirTrabalhador(TrabalhadorModel trabalhador)
        {
            _repo.InserirTrabalhador(trabalhador);
        }

        [HttpPut]
        public void AlterarTrabalhador(TrabalhadorModel trabalhador)
        {
            _repo.AlterarTrabalhador(trabalhador);
        }
    }
}
