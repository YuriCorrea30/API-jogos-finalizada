import pool from "../db.js";

export async function listarJogos() {
    const result = await pool.query("SELECT * FROM jogos ORDER BY id");
    return result.rows;
}

export async function buscarJogo(id) {
    const result = await pool.query(
        "SELECT * FROM jogos WHERE id = $1",
        [id]
    );

    return result.rows[0];
}

export async function criarJogo(nome, genero) {
    const result = await pool.query(
        "INSERT INTO jogos(nome,genero) VALUES($1,$2) RETURNING *",
        [nome, genero]
    );

    return result.rows[0];
}

export async function atualizarJogo(id, nome, genero) {
    const result = await pool.query(
        `UPDATE jogos
         SET nome=$1,
             genero=$2
         WHERE id=$3
         RETURNING *`,
        [nome, genero, id]
    );

    return result.rows[0];
}

export async function excluirJogo(id) {
    const result = await pool.query(
        "DELETE FROM jogos WHERE id=$1 RETURNING *",
        [id]
    );

    return result.rows[0];
}