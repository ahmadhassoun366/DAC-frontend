import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./MainDashboard/MainDashboard";
import Stock from "./Stocks/Stocks";
import StoreDetailPage from "./Stocks/StoreDetailPage";
import ShopDetailPage from "./Stocks/ShopDetailPage";
import VehicleDetailPage from "./Stocks/VehicleDetailPage";
import Additem from "./Items/additem";
import Items from "./Items/Items";
import SelectItemPage from "./Items/SelectedItemPage";
// import ItemsDetails from "./Items/ItemsDetails";
import Accounting from "./Accounting/Accounting";
import Units from "./Accounting/Units/Units";
import Addunit from "./Accounting/Units/Addunit";
import Subunits from "./Accounting/Subunits/Subunits";
import Managment from "./Managment/Managment";
import TVAs from "./Managment/TVAs/TVAs";
const MainContent = () => {
  const [itemID, setitemID] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const onEdit = () => {
    // alert("edit");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main>
      <Routes>
        <Route index element={<MainDashboard />} />
        <Route path="Stocks" element={<Stock />} />
        <Route path="Stocks/store/:storeId" element={<StoreDetailPage />} />
        <Route path="Stocks/shop/:shopId" element={<ShopDetailPage />} />
        <Route
          path="Stocks/vehicle/:vehicleId"
          element={<VehicleDetailPage />}
        />
        <Route path="accounting" element={<Accounting />} />
        <Route path="Managment" element={<Managment />} />
        <Route path="Managment/tva" element={<TVAs />} />
        <Route path="accounting/units" element={<Units />} />
        <Route path="accounting/units/addunit" element={<Addunit />} />
        <Route path="accounting/Subunits" element={<Subunits />} />
        <Route path="Items/*" element={<Items />} />
        <Route path="selectItem" element={<SelectItemPage/>} />

        <Route path="Items/addItems" element={<Additem />} />
      </Routes>
    </main>
  );
};

export default MainContent;
