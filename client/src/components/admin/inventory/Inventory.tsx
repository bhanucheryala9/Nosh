import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  IconButton,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNotification } from "../../../contexts/Notification";
import Loader from "../../common/Loader";
import { NotificationStatus } from "../../common/utils";
import AddInventory from "./AddInventory";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../../contexts/AppStoreContext";

interface InventoryColumns {
  id: string;
  productName: string;
  description: string;
  price: number;
  discount: number;
  isAvailable: boolean;
  tax: number;
  category: string;
}


const Inventory = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [inventoryData, setInventoryData] = useState<InventoryColumns[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [forUpdate, setForUpdate] = useState<boolean>(false);
  const [toUpdateData, setToUpdateData] = useState();

  const { setShowNotification } = useNotification();
  const navigate = useNavigate();
  const { AppStoreData, setAppStoreData } = useAppStore();

  const prepareData = (data: InventoryColumns[]) => {
    const formattedData = data.reduce((accumulator: any, currentValue) => {
      return [
        ...accumulator,
        {
          id: currentValue.id,
          productName: currentValue.productName,
          description: currentValue.description,
          price: currentValue.price,
          discount: currentValue.discount,
          isAvailable: currentValue.isAvailable,
          tax: currentValue.tax,
          category: currentValue.category,
        },
      ];
    }, []);
    return formattedData;
  };