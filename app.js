// import express from "express";
// const express = require("express");
// export const app= express();
// import dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config({
    path:"./data/config.env",
});


const http = require("http");
const fs = require('fs');

// const PORT = process.env.PORT;

const home = fs.readFileSync("./index.html");

const server = http.createServer((req, res)=>{


    if(req.url==='/')
    {
        return res.end(home);
    }
    if(req.url==="/about")
    {
        return res.end("<h1>About</h1>");
    }
    if(req.url==="/contact")
    {
        return res.end("<h1>CONTACT PAGE</h1>");
    }
    else{
        return res.end("<h1> 404 NOT FOUND</h1>")
    }
})


server.listen(process.env.PORT, ()=>{
    console.log("Server is running");
})