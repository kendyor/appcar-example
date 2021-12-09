var express = require('express');
var router = express.Router();

let mongoose = require("../config/conexion");
var ObjectId = require('mongoose').Types.ObjectId; 
let Car = require("../models/car");

/* GET cars listing. */
router.get('/', function(req, res, next) {
    Car.find((err, cars) => {
        console.log(cars);
        
        if(err) throw err;

        res.render('pages/carList', {cars: cars});        
    });

});

router.get('/new', function(req, res, next) {
    res.render('pages/carForm', {car:{}});        
});

router.post('/save', function(req, res, next) {
    if(req.body._id===""){
        let car = new Car({
            _id: ObjectId(),
            anio: req.body.anio,
            fabricante: req.body.fabricante,
            Kilometraje: req.body.Kilometraje,
            color: req.body.color
        });
        car.save(); 
    } else{
        Car.findByIdAndUpdate(ObjectId(req.body._id), {$set: req.body}, {new: true}, (err, model)=> {
            if(err) throw err;
        });
    }
    res.redirect('/cars');        
});

router.get('/edit/:id', function(req, res, next) {
    let idCar = req.params.id;
    console.log(idCar);
    Car.findOne( {_id: ObjectId(idCar)}, (err, car) => {
        console.log(car);        
        if(err) throw err;

        res.render('pages/carForm', {car: car});     
    });       
});

router.get('/delete/:id', function(req, res, next) {
    let idCar = req.params.id;
    Car.remove( {_id: ObjectId(idCar)}, (err) => {
        // console.log(car);        
        if(err) throw err;
        res.redirect('/cars');        
    });       
});

module.exports = router;
