export interface ProductTag {
    Product_Tag_ID: string;
    Product_Tag_Name: string;
}

export interface Inventory {
    id: string;
    Product_ID: string;
    Product_Category_ID: string;
    Product_Category_Name: string;
    Product_Category_Desc: string;
    ProductCategoryRule: string;
    Product_Name: string;
    Product_Desc: string;
    Product_Details: string;
    Product_Price: number;
    Product_Qty_Beginning: number;
    Product_Qty_On_Hand: number;
    Product_Qty_Reorder_Threshold: number;
    Product_Status: string;
    Product_Sold_Rule: string;
    Supplier_ID: string;
    Product_Tags: ProductTag[];
}