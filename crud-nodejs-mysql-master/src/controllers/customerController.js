import { pool } from "../db.js";
import express from "express";
const app = express();
app.use(express.json());

export const renderCustomers = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM customer");
  res.render("customers", { customers: rows });
};

export const createCustomers = async (req, res) => {
  const newCustomer = req.body;
  await pool.query("INSERT INTO customer set ?", [newCustomer]);
  res.redirect("/");
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM customer WHERE id = ?", [
    id,
  ]);
  res.render("customers_edit", { customer: result[0] });
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  await pool.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id]);
  res.redirect("/");
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM customer WHERE id = ?", [id]);
  if (result.affectedRows === 1) {
    res.json({ message: "Customer deleted" });
  }
  res.redirect("/");
};

// app.get('/search', function (req, res){

//   var name = req.query.title;
//   var sql = "SELECT * FROM customer WHERE qtitle LIKE '%"+name+"%'";
//   // pool.query(sql, [name], function (err, result) {
//   //   if (err) throw err;
//   //   res.redirect("/search",{customer:result});
//   // });
//   pool.query(sql, function (err, result) {
//     if (err) throw err;
//     res.render(__dirname+"/",{customer:result});
//   });
// })

export const search = async (req, res) => {
  var {qtitle} = req.params;
  const [rows] = await pool.query("SELECT * FROM customer Where qtitle = ?",[qtitle]);
  res.render("customers", { customers: rows });
};
