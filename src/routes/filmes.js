import Router from 'express'

const filmesRouter = Router()

filmesRouter.get('/api/filmes', obterFilmes)

const filmes = [
    {
        id: 0,
        filme: "Como eu era antes de voçê"
    },
    {
        id: 1,
        filme: "Antes que eu me esqueça"
    }
]

function obterFilmes(req, res){
    return res.status(200).json(filmes)
}

export default filmesRouter;