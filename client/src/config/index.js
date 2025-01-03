export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "business", label: "Business" },
      { id: "gaming", label: "Gaming" },
      { id: "ultrabooks", label: "Ultrabooks" },
      { id: "convertible", label: "Convertible" },
      { id: "workstation", label: "Workstation" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "dell", label: "Dell" },
      { id: "hp", label: "HP" },
      { id: "lenovo", label: "Lenovo" },
      { id: "asus", label: "ASUS" },
      { id: "apple", label: "Apple" },
      { id: "msi", label: "MSI" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "business",
    label: "Business",
    path: "/shop/listing",
  },
  {
    id: "gaming",
    label: "Gaming",
    path: "/shop/listing",
  },
  {
    id: "ultrabooks",
    label: "Ultrabooks",
    path: "/shop/listing",
  },
  {
    id: "convertible",
    label: "Convertible",
    path: "/shop/listing",
  },
  {
    id: "workstation",
    label: "Workstation",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  business: "Business",
  gaming: "Gaming",
  ultrabooks: "Ultrabooks",
  convertible: "Convertible",
  workstation: "Workstation",
};

export const brandOptionsMap = {
  dell: "Dell",
  hp: "HP",
  lenovo: "Lenovo",
  asus: "ASUS",
  apple: "Apple",
  msi: "MSI",
};

export const filterOptions = {
  category: [
    { id: "business", label: "Business" },
    { id: "gaming", label: "Gaming" },
    { id: "ultrabooks", label: "Ultrabooks" },
    { id: "convertible", label: "Convertible" },
    { id: "workstation", label: "Workstation" },
  ],
  brand: [
    { id: "dell", label: "Dell" },
    { id: "hp", label: "HP" },
    { id: "lenovo", label: "Lenovo" },
    { id: "asus", label: "ASUS" },
    { id: "apple", label: "Apple" },
    { id: "msi", label: "MSI" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
