import { Button } from "@/components/ui/button";
import bannerTwo from "../../assets/banner1.jpeg";
import bannerThree from "../../assets/banner2.jpeg";
import mac from  "../../assets/mac.jpg"
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import {
  Airplay,
  Computer,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  Briefcase,
  ShoppingBasket,
  LaptopMinimal,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import OurPolicy from "@/components/shopping-view/policy";
import Footer from "@/components/shopping-view/footer";
import PricingSection11 from "@/components/shopping-view/PricingSection11";



const categoriesWithIcon = [
  { id: "business", label: "Business", icon:Briefcase },
  { id: "gaming", label: "Gaming", icon: CloudLightning },
  { id: "ultrabooks", label: "Ultrabooks", icon: Computer },
  { id: "convertible", label: "Convertible", icon: WatchIcon },
  { id: "workstation", label: "Workstation", icon: LaptopMinimal },
];

const brandsWithIcon = [
  { id: "dell", label: "Dell", icon: Shirt },
  { id: "hp", label: "HP", icon: WashingMachine },
  { id: "lenovo", label: "Lenovo", icon: ShoppingBasket },
  { id: "asus", label: "ASUS", icon: Airplay },
  { id: "apple", label: "Apple", icon: Images },
  { id: "msi", label: "MSI", icon: Heater },
];


function ShoppingHome() {
  const [showPricing, setShowPricing] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">


{/* <div className="relative  w-full h-[50vh] sm:h-[600px] overflow-hidden rounded-md ">
  {featureImageList && featureImageList.length > 0
    ? featureImageList.map((slide, index) => (
        <img
          src={slide?.image}
          key={index}
          className={`${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } absolute top-0 left-0 w-full h-full object-contain sm:object-cover transition-opacity duration-1000`}
        />
      ))
    : null}
  <Button
    variant="outline"
    size="icon"
    onClick={() =>
      setCurrentSlide(
        (prevSlide) =>
          (prevSlide - 1 + featureImageList.length) % featureImageList.length
      )
    }
    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
  >
    <ChevronLeftIcon className="w-4 h-4" />
  </Button>
  <Button
    variant="outline"
    size="icon"
    onClick={() =>
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % featureImageList.length
      )
    }
    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
  >
    <ChevronRightIcon className="w-4 h-4" />
  </Button>
</div> */}





<div className="w-full px-4 py-8">
  <div className="flex flex-col lg:flex-row gap-4">
    {/* Main Carousel Section */}
    <div className="lg:w-2/3 w-full relative">
      <div className="relative h-[250px] lg:h-[500px] overflow-hidden rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                }`}
              >
                <img
                  src={slide?.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1682687981674-0927add86f2b";
                  }}
                />
              </div>
            ))
          : null}
      </div>
    </div>

    {/* Static Images Section */}
    <div className="lg:w-1/3 w-full flex flex-col gap-4">
      {/* Upper Static Image */}
      <div className="h-[120px] lg:h-[240px] overflow-hidden rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={bannerTwo} // Using your imported banner image
          alt="Upper Banner"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-md"
        />
      </div>

      {/* Lower Static Image */}
      <div className="h-[120px] lg:h-[240px] overflow-hidden rounded-lg border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={bannerThree} // Using your imported banner image
          alt="Lower Banner"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</div>






  
     

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

   

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>
      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />

<section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* <div>
  <div>
    {!showPricing ? (
      <div className="hero bg-gray-600 rounded-3xl  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={mac} // Ensure you replace this with a relevant image URL, e.g., a laptop rental image.
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero Section"
          />
          <div>
            <h1 className="text-5xl font-bold text-white ">Rent Laptops Hassle-Free!</h1>
            <p className="py-6 text-white">
              Welcome to <span className=" text-white font-semibold">Everything Computers</span>, your trusted partner for laptop rentals. 
              Whether you're a company or an individual, we offer high-performance laptops tailored to your needs. 
              Flexible plans, affordable pricing, and exceptional service await you.
            </p>
            <button
              className="btn bg-black  btn-primary"
              onClick={() => setShowPricing(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="pricing-section">
        <PricingSection11 />
      </div>
    )}
  </div>
</div>
 */}


<div>
  <div>
    {!showPricing ? (
      <div className="hero bg-gradient-to-r from-gray-800 to-gray-600 rounded-3xl text-white min-h-screen flex flex-col justify-center items-center px-6 py-12 lg:px-20">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start lg:gap-12">
          <img
            src={mac} // Replace with an appropriate image URL
            className="max-w-xs lg:max-w-md rounded-lg shadow-2xl transform transition duration-300 hover:scale-105"
            alt="Rent a Laptop"
          />
          <div className="text-center lg:text-left mt-6 lg:mt-0">
            <h1 className="text-5xl font-extrabold mb-6">
              Rent Laptops Hassle-Free!
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-200">
              Welcome to{" "}
              <span className="text-blue-400 font-semibold">
                Everything Computers
              </span>
              , your trusted partner for laptop rentals. Flexible plans,
              affordable pricing, and exceptional service await you.
            </p>
            <button
              className="bg-slate-950 hover:bg-blue-600 border-white border-2 text-white font-medium py-3 px-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              onClick={() => setShowPricing(true)}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="mt-16 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 underline decoration-blue-500 decoration-4">
            Why Choose Us?
          </h2>
          <p className="mb-8 text-gray-300 text-lg">
            Discover why businesses and individuals rely on us for their laptop
            rental needs. We combine convenience, quality, and unbeatable
            service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-xl hover:bg-gray-600 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Quick Delivery</h3>
              <p className="text-sm text-gray-300">
                Get laptops delivered to your doorstep in no time.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-xl hover:bg-gray-600 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Flexible Plans</h3>
              <p className="text-sm text-gray-300">
                Rent for a day, a week, or a month—it's your call.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-xl hover:bg-gray-600 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Top Brands</h3>
              <p className="text-sm text-gray-300">
                Choose from leading laptop brands with custom configurations.
              </p>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="pricing-section">
        <PricingSection11 />
      </div>
    )}
  </div>
</div>




<section>
  <OurPolicy/>
</section>
<section>
  <Footer/>
</section>






      
    </div>












  );
}

export default ShoppingHome;
