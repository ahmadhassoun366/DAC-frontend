import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Purchase = (props) => {

    return (
        <div className="py-6 px-4">
            <div className="container max-w-screen-lg mx-auto">
                <h2 className="font-semibold text-xl text-gray-600">Purchase Invoice</h2>
                <p className="text-gray-500 mb-6">Fill out the required fields to create a purchase invoice.</p>

                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2">
                        <div>
                            <label htmlFor="invoice_number">Invoice Number</label>
                            <input type="text" name="invoice_number" id="invoice_number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="supplier_name">Supplier Name</label>
                            <input type="text" name="supplier_name" id="supplier_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="date" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="supplier_address">Supplier Address</label>
                            <input type="text" name="supplier_address" id="supplier_address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="supplier_phone">Supplier Phone Number</label>
                            <input type="text" name="supplier_phone" id="supplier_phone" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="financial_supplier_number">Financial Supplier Number</label>
                            <input type="text" name="financial_supplier_number" id="financial_supplier_number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="supplier_address_again">Supplier Address (again)</label>
                            <input type="text" name="supplier_address_again" id="supplier_address_again" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="currency_type">Currency Type</label>
                            <select name="currency_type" id="currency_type" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="debit">Debit</label>
                            <input type="number" name="debit" id="debit" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="additional_description">Description (additional)</label>
                            <input type="text" name="additional_description" id="additional_description" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="vat">VAT (Value Added Tax)</label>
                            <input type="number" name="vat" id="vat" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="credit">Credit</label>
                            <input type="number" name="credit" id="credit" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="supplier_code">Supplier Code</label>
                            <input type="text" name="supplier_code" id="supplier_code" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="item_code">Item Code or Bar Code</label>
                            <input type="text" name="item_code" id="item_code" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="item_name">Item Name</label>
                            <input type="text" name="item_name" id="item_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity" id="quantity" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="unit">Unit</label>
                            <input type="text" name="unit" id="unit" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" id="price" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="total_ht">Total HT (Total without Tax)</label>
                            <input type="number" name="total_ht" id="total_ht" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="tva">TVA (Tax Value Added)</label>
                            <input type="number" name="tva" id="tva" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div>
                            <label htmlFor="total_ttc">Total TTC (Total with Tax)</label>
                            <input type="number" name="total_ttc" id="total_ttc" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8">
                    <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-3">
                        <div>
                            <label htmlFor="total_ht_sum">Total HT Sum</label>
                            <input type="number" name="total_ht_sum" id="total_ht_sum" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>
                        <div>
                            <label htmlFor="total_tva_sum">Total TVA Sum</label>
                            <input type="number" name="total_tva_sum" id="total_tva_sum" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>
                        <div>
                            <label htmlFor="total_ttc_sum">Total TTC Sum</label>
                            <input type="number" name="total_ttc_sum" id="total_ttc_sum" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded">Save</button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;
