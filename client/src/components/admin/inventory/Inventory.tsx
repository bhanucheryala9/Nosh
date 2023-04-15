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

  
  const onDeleteClicked = (data: any) => {
    console.log(" data for deleteinh", data);
    axios
      .delete("http://localhost:5000/api/admin/v1/delete-item", {
        params: {
          id: data.id,
        },
      })
      .then((response: any) => {
        setInventoryData(prepareData(response.data.items));
        setShowNotification({
          status: NotificationStatus.SUCCESS,
          alertMessage: "Successfully deleted item!",
          showAlert: true,
        });
      })
      .catch(() => {
        setShowNotification({
          status: NotificationStatus.ERROR,
          alertMessage: "Failed to retreive items information..!",
          showAlert: true,
        });
      });
  };

    // const getActualData = (data:any) =>{
  //   const userData  =  unformattedEmployeeData.filter((item:any)=> item.id.toLowerCase()=== data.id.toLowerCase());
  //   return userData[0];
  // }
  const onUpdateClicked = (data: any) => {
    setToUpdateData(data);
    setForUpdate(true);
    setAppStoreData({
      ...AppStoreData,
      inventoryData: {
        inventoryUpdateData: data,
        forUpdate: true,
      },
    });
    navigate("/add-inventory");
  };

  const columns: ColumnsType<InventoryColumns> = [
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Discount %",
      dataIndex: "discount",
    },
    {
      title: "Is Available",
      dataIndex: "isAvailable",
      render: (text) => (
        <>
          {text ? (
            <Tag
              size={"md"}
              key={"yes"}
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              p="1"
            >
              <TagLabel mx="4">Yes</TagLabel>
            </Tag>
          ) : (
            <Tag
              size={"md"}
              key={"no"}
              borderRadius="full"
              variant="solid"
              colorScheme="red"
              p="1"
            >
              <TagLabel mx="4" >No</TagLabel>
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Tax",
      dataIndex: "tax",
    },
    {
      title: "Action",
      key: "action",
      width: "45px",
      render: (_, record) => (
        <HStack>
          <IconButton
            aria-label="Search database"
            onClick={() => {
              onDeleteClicked(record);
            }}
            icon={<DeleteIcon />}
            size="sm"
          />
          <IconButton
            aria-label="Search database"
            onClick={() => onUpdateClicked(record)}
            icon={<EditIcon />}
            size="sm"
          />
        </HStack>
      ),
    },
  ];