const express = require("express");
const { ObjectId } = require("mongodb");
const { Connection } = require("../config/database");
Connection.open();

module.exports = async (app) => {
  app.get("/products", async (req, res) => {
    const products = await Connection.db
      .collection("products")
      .find()
      .toArray();
    res.status(200).json(products);
  });

  app.get("/products/:id", async (req, res) => {
    const {
      params: { id },
    } = req;
    const filter = { _id: new ObjectId(id) };
    const products = await Connection.db
      .collection("products")
      .find(filter)
      .toArray();
    res.status(200).json(products[0]);
  });

  app.delete("/products/:id", async (req, res) => {
    const {
      params: { id },
    } = req;
    const query = { _id: new ObjectId(id) };
    await Connection.db.collection("products").deleteOne(query, (err) => {
      if (err) throw err;
      console.log("deleted");
    });
    const products = await Connection.db
      .collection("products")
      .find()
      .toArray();
    res.status(200).json(products);
  });

  app.put("/products/:id", async (req, res) => {
    const {
      params: { id },
      body: { name, type, price, available, rating, warranty_years },
    } = req;
    const updatedProduct = {
      $set: {
        name: name,
        type: type,
        price: price,
        available: available,
        warranty_years: warranty_years,
        rating: rating,
      },
    };
    console.log(id);
    const query = { _id: new ObjectId(id) };
    await Connection.db
      .collection("products")
      .updateOne(query, updatedProduct, (err) => {
        if (err) throw err;
        console.log("updated");
      });
    const products = await Connection.db
      .collection("products")
      .find()
      .toArray();
    res.status(200).json(products);
  });

  app.post("/products", async (req, res) => {
    const {
      body: { name, type, price, available, rating, warranty_years },
    } = req;
    const newProduct = {
      name: name,
      type: type,
      price: price,
      available: available,
      warranty_years: warranty_years,
      rating: rating,
    };
    console.log(newProduct);
    await Connection.db.collection("products").insertOne(newProduct, (err) => {
      if (err) throw err;
      console.log("created");
    });
    const products = await Connection.db
      .collection("products")
      .find()
      .toArray();
    res.status(200).json(products);
  });
};
