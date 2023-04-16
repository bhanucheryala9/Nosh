import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import {
  Card,
  Flex,
  Grid,
  GridItem,
  Text,
  Avatar,
  HStack,
  Link,
  Portal,
  Code,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  IconButton,
} from "@chakra-ui/react";

import { ColumnsType } from "antd/es/table";
import AddEmployee from "./AddEmployee";
import { EmployeeTestData } from "../../../test-data/admin/employee";
import {
  DeleteIcon,
  EditIcon,
  EmailIcon,
  PhoneIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { useNotification } from "../../../contexts/Notification";
import { NotificationStatus } from "../../common/utils";
import { useNavigate } from "react-router-dom";
export interface EmployeeDatatype {
    key: React.Key;
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    employeeType: string;
    address: string;
    salary: string;
    joinedDate: string;
    about?: string;
  }
  const Employee = () => {
  };

export default Employee;
