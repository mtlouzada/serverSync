import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEinserirTecnologia(nome) {
    const db = await open({
        filename: '../banco.db',
        driver: sqlite3.Database,
    });

    db.run(`CREATE TABLE IF NOT EXIST tecnologias (id INTEGER PRIMARY KEY, nome TEXT) `);
}

criarEinserirTecnologia();