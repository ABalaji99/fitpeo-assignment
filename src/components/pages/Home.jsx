import React, { useContext } from "react";
import { DataContext } from "../hooks";
import OrderAnalytics from "../resuables/orderanalytics/OrderAnalytics";
import Chart from "../charts";
import RecentOrders from "../recentOrders";
import Profits from "../profits";
import OrderCategory from "../resuables/category/OrderCategory";
import Testimonials from "../resuables/testimonials/Testimonials";

const Home = () => {
  const { apidata } = useContext(DataContext);
  return (
    <main className="text-level-1-text p-5">
      <h1 className=" mb-5 text-level-1-text font-sans text-2xl">Dashboard</h1>
      <section
      >
        <div className="flex w-full gap-5 mb-5">
          <article className="flex gap-5 w-3/5 rounded-lg">
            {apidata &&
              apidata.map((oa, index) => (
                <OrderAnalytics
                  key={index} 
                  oatheme={oa.aytheme}
                  oaicontheme={oa.ayicontheme}
                  Oaicon={oa.ayicon}
                  oatitle={oa.aytitle}
                  oascore={oa.ayscore}
                  oastatus={oa.aystatus}
                  oachange={oa.aychange}
                />
              ))}
          </article>
          <article className="w-2/5 bg-primaryclr">
            <Profits />
          </article>
        </div>

        <div className="flex gap-5 mb-5">
          <article className=" w-3/5 bg-primaryclr rounded-full">
            <Chart />
          </article>
          <article className="w-2/5 bg-primaryclr rounded-lg">
            {apidata.slice(0, 3).map((cat, index) => (
              <OrderCategory  key={index}
                CatIcon={cat.categoryIcon}
                catTitle={cat.categoryTitle}
              />
            ))}
          </article>
        </div>

        <div className="w-full gap-5 flex">
          <article className="w-3/5">
            <RecentOrders />
          </article>
          <article className="w-2/5 bg-primaryclr">
          <h1>Customer's Feedback</h1>
            {apidata.map((rev, index) => (
              <Testimonials 
                key={index}
                testi={rev.userreview}
                rate={rev.userRating}
                user={rev.ratinguser}
              />
            ))}
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
