import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import p from "./../../../../../Assets/p2.jpg";
import del from "./../../../../../Assets/delete.png";
import upd from "./../../../../../Assets/upload.png";
const Sell = (props) => {

    return (
        <div className="py-6 px-4">
            <div className="InvoiceContainer">
                <div className="InvoiceContent">
                    <div className="InHeader">
                        <div className="InputInvoice">
                            <label htmlFor="invoice_number">Invoice Number</label>
                            <h2 className="InVoiceNumber">996699</h2>
                        </div>

                        <div>
                            <label htmlFor="supplier_name">Supplier Name</label>
                            <input type="text" name="supplier_name" id="supplier_name" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="InputInvoice">
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="date" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="InputInvoice">
                            <label htmlFor="supplier_address">Supplier Address</label>
                            <input type="text" name="supplier_address" id="supplier_address" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="InputInvoice">
                            <label htmlFor="supplier_phone">Supplier Phone Number</label>
                            <input type="text" name="supplier_phone" id="supplier_phone" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="InputInvoice">
                            <label htmlFor="financial_supplier_number">Financial Supplier Number</label>
                            <input type="text" name="financial_supplier_number" id="financial_supplier_number" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>
                    </div>
                    <div className="InHeader edited">
                        <div className="InputInvoice">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" id="description" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="InputInvoice">
                            <label htmlFor="currency_type">Currency Type</label>
                            <select name="currency_type" id="currency_type" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50">
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>

                        <div className="InputInvoice">
                            <label htmlFor="debit">Debit</label>
                            <input type="number" name="debit" id="debit" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>
                        <div className="InputInvoice aditm">
                            <button className="Additem">Add Item</button>
                        </div>
                    </div>
                    <div className="ItemsContainer">
                        <div className="ItemAdded">
                            <span className="numberi">1</span>
                            <div className="ItemImage"><img src={p} alt="" /></div>
                            <div className="ItemName">
                                <span> Name: </span>Product Laptop
                            </div>
                            <div className="ItemName">
                                <span>Catergory: </span>Electronics
                            </div>
                            <div className="ItemName">
                                <span>Price: </span>$850
                            </div>
                            <div className="ItemName">
                                <span>VAT: </span>1%
                            </div>
                            <div className="ItemName">
                                <span>Quantity: </span>1
                            </div>
                            <div className="ItemName">
                                <span>Unit: </span>PC
                            </div>
                            <div className="ItemName ACTION">
                                <button className="Actionbtn" ><img src={del} alt="" /></button>
                            </div>
                        </div>
                        <div className="ItemAdded">
                            <span className="numberi">2</span>
                            <div className="ItemImage"><img src={p} alt="" /></div>
                            <div className="ItemName">
                                <span> Name: </span>Product Laptop
                            </div>
                            <div className="ItemName">
                                <span>Catergory: </span>Electronics
                            </div>
                            <div className="ItemName">
                                <span>Price: </span>$850
                            </div>
                            <div className="ItemName">
                                <span>VAT: </span>1%
                            </div>
                            <div className="ItemName">
                                <span>Quantity: </span>1
                            </div>
                            <div className="ItemName">
                                <span>Unit: </span>PC
                            </div>
                            <div className="ItemName ACTION">
                                <button className="Actionbtn" ><img src={del} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="Infooter">
                        <div>
                            <label htmlFor="total_ttc">Total TTC (Total with Tax)</label>
                            <input type="number" name="total_ttc" id="total_ttc" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />

                        </div>
                        <div className="mt-4 grid gap-4 text-sm grid-cols-1 md:grid-cols-3">
                            <div>
                                <label htmlFor="total_ht_sum">Total HT Sum</label>
                                <input type="number" name="total_ht_sum" id="total_ht_sum" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                            </div>
                            <div>
                                <label htmlFor="total_tva_sum">Total TVA Sum</label>
                                <input type="number" name="total_tva_sum" id="total_tva_sum" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                            </div>
                            <div>
                                <label htmlFor="total_ttc_sum">Total TTC Sum</label>
                                <input type="number" name="total_ttc_sum" id="total_ttc_sum" className="h-8 border mt-1 rounded px-4 w-full bg-gray-50" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded">Save</button>
                            <button className="bg-teal-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">Cancel</button>
                        </div>

                    </div>
                </div>
                <div className="Uploadbtn">
                    <button className="Update">

                        <img src={upd} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sell;
