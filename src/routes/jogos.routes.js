import express from "express";

import {
    listarJogos,
    buscarJogo,
    criarJogo,
    atualizarJogo,
    excluirJogo
} from "../services/jogos.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const jogos = await listarJogos();
        res.json(jogos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {

        const jogo = await buscarJogo(req.params.id);

        if (!jogo) {
            return res.status(404).json({
                message: "Jogo não encontrado"
            });
        }

        res.json(jogo);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.post("/", async (req, res) => {
    try {

        const { nome, genero } = req.body;

        const jogo = await criarJogo(nome, genero);

        res.status(201).json(jogo);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.patch("/:id", async (req, res) => {
    try {

        const { nome, genero } = req.body;

        const jogo = await atualizarJogo(
            req.params.id,
            nome,
            genero
        );

        if (!jogo) {
            return res.status(404).json({
                message: "Jogo não encontrado"
            });
        }

        res.json(jogo);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {

        const jogo = await excluirJogo(req.params.id);

        if (!jogo) {
            return res.status(404).json({
                message: "Jogo não encontrado"
            });
        }

        res.json({
            message: "Jogo removido com sucesso"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

export default router;