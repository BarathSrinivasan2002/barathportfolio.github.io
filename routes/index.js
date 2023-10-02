// 
// File: index.js
// Student Name: Barath Srinivasan
// Student ID: 301139370
// Date: October 2, 2023
// 




const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// About Me Page
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', (req, res) => {
    // Fetch and pass project data from your database or JSON file
    const projects = [
        { title: 'Project 1', image: 'project1.jpg', description: 'Description of Project 1' },
        { title: 'Project 2', image: 'project2.jpg', description: 'Description of Project 2' },
        // Add more projects as needed
    ];
    
    res.render('projects', { title: 'Projects', projects });
});

// Services Page
router.get('/services', (req, res) => {
    // Define the list of services you offer
    const services = [
        { title: 'Web Development', description: 'Custom web development services' },
        { title: 'Mobile App Development', description: 'iOS and Android app development' },
        // Add more services as needed
    ];

    res.render('services', { title: 'Services', services });
});

// Contact Me Page
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
