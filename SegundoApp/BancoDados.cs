using SegundoApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SegundoApp
{
    public static class BancoDados
    {
        public static List<TrabalhadorModel> trabalhadores = new List<TrabalhadorModel>()
        {
            new TrabalhadorModel()
            {
                Nome = "Jhordan",
                Status = true,
                Id = 1
            }
        };
    }
}
