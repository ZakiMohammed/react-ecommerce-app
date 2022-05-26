export interface CustomerOrderDetail {
    Product_ID: string;
    Product_Name: string;
    Product_Price: number;
    Product_Qty_Ordered: number;
    Product_Discount: number;
    Product_Tax: number;
    Total_Cost: number;
}

export interface CustomerOrderPayment {
    Customer_Payment_ID: string;
    Customer_Payment_Amt: number;
}

export interface CustomerPayment {
    Customer_Payment_ID: string;
    Customer_Payment_Source: string;
    Customer_Payment_Carrier: string;
    Customer_Payment_Is_Default: boolean;
    Customer_Payment_Number: string;
    Customer_Payment_Exp_Date: number;
    Customer_Payment_CVV_Code: number;
}

export interface CustomerAddress {
    Customer_Address_Type: string;
    Customer_Address_Line1: string;
    Customer_Address_Line2: string;
    Customer_Address_Unit: string;
    Customer_City: string;
    Customer_State: string;
    Customer_Zip: string;
    Customer_Zip_Extn: string;
}

export interface Order {
    id?: string;
    Product_Category_ID: string;
    Customer_Data_Type: string;
    Customer_Order_Date: string;
    Customer_Order_Total: string;
    Customer_Order_Details: CustomerOrderDetail[];
    Customer_Order_Count: string;
    Customer_Order_Payments: CustomerOrderPayment[];
    Customer_Payments: CustomerPayment[];
    Customer_Addresses: CustomerAddress[];
}

// TODO: remove once data is dynamic
export const mockOrder: Order = {
    Product_Category_ID: "string",
    Customer_Data_Type: "string",
    Customer_Order_Date: "string",
    Customer_Order_Total: "string",
    Customer_Order_Details: [],
    Customer_Order_Count: "string",
    Customer_Order_Payments: [
        {
            Customer_Payment_ID: "string",
            Customer_Payment_Amt: 0
        }
    ],
    Customer_Payments: [
        {
            Customer_Payment_ID: "string",
            Customer_Payment_Source: "string",
            Customer_Payment_Carrier: "string",
            Customer_Payment_Is_Default: true,
            Customer_Payment_Number: "string",
            Customer_Payment_Exp_Date: 0,
            Customer_Payment_CVV_Code: 0
        }
    ],
    Customer_Addresses: [
        {
            Customer_Address_Type: "string",
            Customer_Address_Line1: "string",
            Customer_Address_Line2: "string",
            Customer_Address_Unit: "string",
            Customer_City: "string",
            Customer_State: "string",
            Customer_Zip: "string",
            Customer_Zip_Extn: "string"
        }
    ]
}