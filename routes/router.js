import express from 'express';
const Route = express.Router();

Route.get('/', (req, res) => res.render('index'));
Route.get('/tentang', (req, res) => res.render('tentang'));
Route.get('/artikel', (req, res) => res.render('artikel'));
Route.get('/artikel1', (req, res) => res.render('./artikel/aula'));
Route.get('/artikel2', (req, res) => res.render('./artikel/coding'));

//portofolio
Route.get('/portofolio', (req, res) => res.render('portofolio'));
Route.get('/portofolio1', (req, res) => res.render('portofolio1'));
Route.get('/portofolio2', (req, res) => res.render('portofolio2'));

export default Route;
