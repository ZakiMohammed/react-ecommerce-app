import { CartItem } from '../models/cart';
import { Inventory } from './../models/inventory';

export const InventoryData: Inventory[] = [
  {
    id: '1',
    Product_ID: '1',
    Product_Category_ID: '1',
    Product_Category_Name: 'Mobile',
    Product_Category_Desc: 'Mobile',
    ProductCategoryRule: 'Mobile',
    Product_Name: 'Samsung Galaxy A10',
    Product_Desc: 'Samsung Galaxy A10',
    Product_Details: 'Samsung Galaxy A10',
    Product_Price: 10000,
    Product_Qty_Beginning: 10,
    Product_Qty_On_Hand: 10,
    Product_Qty_Reorder_Threshold: 10,
    Product_Status: 'Active',
    Product_Sold_Rule: 'Mobile',
    Supplier_ID: '1',
    Product_Tags: [
      {
        Product_Tag_ID: '1',
        Product_Tag_Name: 'Mobile',
      },
      {
        Product_Tag_ID: '2',
        Product_Tag_Name: 'Samsung',
      },
    ],
  },
  {
    id: '2',
    Product_ID: '2',
    Product_Category_ID: '2',
    Product_Category_Name: 'Laptop',
    Product_Category_Desc: 'Laptop',
    ProductCategoryRule: 'Laptop',
    Product_Name: 'Dell Inspiron 15 3000',
    Product_Desc: 'Dell Inspiron 15 3000',
    Product_Details: 'Dell Inspiron 15 3000',
    Product_Price: 25000,
    Product_Qty_Beginning: 10,
    Product_Qty_On_Hand: 10,
    Product_Qty_Reorder_Threshold: 10,
    Product_Status: 'Active',
    Product_Sold_Rule: 'Laptop',
    Supplier_ID: '2',
    Product_Tags: [
      {
        Product_Tag_ID: '1',
        Product_Tag_Name: 'Laptop',
      },
      {
        Product_Tag_ID: '2',
        Product_Tag_Name: 'Dell',
      },
    ],
  }
];

export const CartData: CartItem[] = [
  {
      id: '1',
      inventory: {
          id: '1',
          Product_ID: '1',
          Product_Category_ID: '1',
          Product_Category_Name: 'Mobile',
          Product_Category_Desc: 'Mobile',
          ProductCategoryRule: 'Mobile',
          Product_Name: 'Samsung Galaxy A10',
          Product_Desc: 'Samsung Galaxy A10',
          Product_Details: 'Samsung Galaxy A10',
          Product_Price: 10000,
          Product_Qty_Beginning: 10,
          Product_Qty_On_Hand: 10,
          Product_Qty_Reorder_Threshold: 10,
          Product_Status: 'Active',
          Product_Sold_Rule: 'Mobile',
          Supplier_ID: '1',
          Product_Tags: [
              {
                  Product_Tag_ID: '1',
                  Product_Tag_Name: 'Mobile',
              },
              {
                  Product_Tag_ID: '2',
                  Product_Tag_Name: 'Samsung',
              },
          ]
      },
      quantity: 1
  },
  {
      id: '2',
      inventory: {
          id: '2',
          Product_ID: '2',
          Product_Category_ID: '2',
          Product_Category_Name: 'Laptop',
          Product_Category_Desc: 'Laptop',
          ProductCategoryRule: 'Laptop',
          Product_Name: 'Dell Inspiron 15 3000',
          Product_Desc: 'Dell Inspiron 15 3000',
          Product_Details: 'Dell Inspiron 15 3000',
          Product_Price: 25000,
          Product_Qty_Beginning: 10,
          Product_Qty_On_Hand: 10,
          Product_Qty_Reorder_Threshold: 10,
          Product_Status: 'Active',
          Product_Sold_Rule: 'Laptop',
          Supplier_ID: '2',
          Product_Tags: [
              {
                  Product_Tag_ID: '1',
                  Product_Tag_Name: 'Laptop',
              },
              {
                  Product_Tag_ID: '2',
                  Product_Tag_Name: 'Dell',
              },
          ]
      },
      quantity: 1
  }
]