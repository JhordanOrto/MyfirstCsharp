using SegundoApp.Interfaces;
using SegundoApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SegundoApp.Repositories
{
    public class TrabalhadorRepository : ITrabalhadorRepository
    {
        public void AlterarTrabalhador(TrabalhadorModel trabalhador)
        {
            var trab = BancoDados.trabalhadores.Where(t => t.Id == trabalhador.Id).FirstOrDefault();
            if(trab == null)
            {
                return;
            }

            trab.Id = trabalhador.Id;
            trab.Nome = trabalhador.Nome;
            trab.Status = trabalhador.Status;
        }

        public IEnumerable<TrabalhadorModel> GetAtivos()
        {
            return BancoDados.trabalhadores.Where(t => t.Status);
        }

        public IEnumerable<TrabalhadorModel> GetTrabalhador()
        {
            return BancoDados.trabalhadores;
        }

        public void InserirTrabalhador(TrabalhadorModel trabalhador)
        {
            var id = BancoDados.trabalhadores.Max(t => t.Id);
            trabalhador.Id = id+1;
            BancoDados.trabalhadores.Add(trabalhador);
        }

        public TrabalhadorModel ObterTrabalhadorPorId(int id)
        {
            return BancoDados.trabalhadores.Where(t => t.Id == id).FirstOrDefault();
        }
    }
}
