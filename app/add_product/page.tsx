"use client";
import { Button } from "@/components";
import React, { useState } from "react";

const AddProduct: React.FC = () => {
  const [attendance, setAttendance] = useState("Select Category Product");
  const [message, setMessage] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => {};

  /* Fungsi */
  const formatRupiah = (angka: any, prefix: string) => {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
      split = number_string.split(","),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
  };

  return (
    <div className="container px-2 text-center h-screen flex items-center">
      <div className="sm:w-1/3 p-8 overflow-y-auto h-4/5 bg-gray-200 mx-4 sm:mx-auto shadow-xl rounded-lg">
        <h1 className="font-serif sm:text-2xl font-extrabold">Add Product</h1>
        <hr className="h-2 border-none rounded-lg mx-auto w-2/3 bg-orange-300" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mx-auto border-dotted my-6 w-4/5 py-14 border-4 border-orange-300 text-sm">
            Drag and Drop here
            <p>or</p>
            <Button msg="Insert Picture" />
          </div>
          <div>
            <label className="block text-left">Name Product</label>
            <input
              value={nameProduct}
              onChange={(e) => {
                setNameProduct(e.target.value);
              }}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-left">Description Product</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-left">Category Product</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none open:bg-orange-300 focus:ring-2 focus:ring-orange-300"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              required
            >
              <option value="Baju_Pria">Baju Pria</option>
              <option value="Baju_Wanita">Baju Wanita</option>
              <option value="Topi">Topi</option>
              <option value="Jam_Tangan">Jam Tangan</option>
              <option value="Tas_Ransel">Tas Ransel</option>
              <option value="Tas_Selempang">Tas Selempang</option>
              <option value="Celana_Pria">Celana Pria</option>
              <option value="Celana_Wanita">Celana Wanita</option>
            </select>
          </div>
          <div>
            <label className="block text-left">Price</label>
            <input
              value={formatRupiah(price, "Rp. ")}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <Button msg="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
