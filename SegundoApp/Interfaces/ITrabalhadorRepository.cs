using SegundoApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SegundoApp.Interfaces
{
    public interface ITrabalhadorRepository
    {
        IEnumerable<TrabalhadorModel> GetTrabalhador();
        IEnumerable<TrabalhadorModel> GetAtivos();
        void InserirTrabalhador(TrabalhadorModel trabalhador);
        void AlterarTrabalhador(TrabalhadorModel trabalhador);
        TrabalhadorModel ObterTrabalhadorPorId(int id);
    }
}
