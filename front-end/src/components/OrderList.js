import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  DataGridPro,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from "@mui/x-data-grid-pro";
import { Button } from "@mui/material";

const OrderList = ({ orders }) => {
  const rows = () => {
    for (let i = 0; i < orders.length; i++) {
      orders[i].id = i;
    }
    return orders;
  };
  const columns = [
    { field: "orderId", headerName: "Захиалгийн дугаар", width: 200 },
    { field: "status", headerName: "Төлөв", width: 200 },
    { field: "address", headerName: "Хаяг", width: 200 },
    { field: "createdDatetime", headerName: "Үүссэн огноо", width: 200 },
    { field: "expireDatetime", headerName: "Хүчинтэй хугацаа", width: 200 },
    { field: "totalPrice", headerName: "Нийн дүн", width: 200 },
    {
      field: "actions",
      type: "actions",
      width: 100,
      getActions: (e) => [
        <GridActionsCellItem icon={<MoreHorizIcon />} label="More" />,
      ],
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Button variant="contained" sx={{ margin: "20px" }}>
        Төлбөр төлөх
      </Button>
      <div style={{ display: "flex", height: "100vh", width: "100%" }}>
        <DataGridPro
          checkboxSelection
          initialState={{
            pinnedColumns: {
              left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
              right: ["actions"],
            },
          }}
          rows={rows()}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default OrderList;
