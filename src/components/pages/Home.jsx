import ProductTable from "../custom/ProductTable";
import ProjectionChart from "../custom/ProjectionChart";
import RevenueChart from "../custom/RevenueChart";
import RevenueLocation from "../custom/RevenueLocation";
import CustomCard from "../shared/CustomCard";
import productTableData from "/src/data/productTableData.json";
import cards from "/src/data/cardsData.json";
import SalesChart from "../custom/SalesChart";

const Home = () => {
  return (
    <div className="px-7 mt-6 min-w-full">
      <h2 className="py-[4px] px-[8px] text-[14px] text-text leading-5 font-semibold mb-5">
        eCommerce
      </h2>

      <div className="flex flex-col xl:flex-row w-full gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-[80%]">
          {cards.map((card, index) => (
            <CustomCard key={index} {...card} />
          ))}
        </div>

        <div className="flex-1 w-full h-[252px]">
          <ProjectionChart />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full gap-6 mt-6">
        <div className="w-full xl:w-[662px] flex-1">
          <RevenueChart />
        </div>
        <div className="w-full xl:w-auto">
          <RevenueLocation />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row w-full gap-6 mt-6">
        <div className="w-full lg:max-w-[662px]">
          <ProductTable data={productTableData} />
        </div>
        <div className="w-[202px]">
          <SalesChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
