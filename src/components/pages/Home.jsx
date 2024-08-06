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
        <div className="flex w-full gap-10 mb-10">
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
          <article className="w-2/5 rounded-lg bg-primaryclr">
            <Profits />
          </article>
        </div>

        <div className="flex gap-10 mb-10">
          <article className=" w-3/5 bg-primaryclr rounded-full">
            <Chart />
          </article>
          <article className="w-2/5 bg-primaryclr rounded-lg">
            {apidata.slice(0, 3).map((cat, index) => (
              <OrderCategory  key={index}
                CatIcon={cat.categoryIcon}
                catTitle={cat.categoryTitle}
                catbg={cat.ctbgclr}
                caticonclr={cat.cticonclr}
              />
            ))}
          </article>
        </div>

        <div className="w-full gap-10 flex">
          <article className="w-3/5">
            <RecentOrders />
          </article>
          <article className="w-2/5 h-72 rounded-xl bg-primaryclr p-4 overflow-y-auto ">
          <h1 className="mb-2 text-xl text-level-1-text">Customer's Feedback</h1>
            {apidata.map((rev, index) => (
              <Testimonials 
                key={index}
                testi={rev.userreview}
                rate={rev.userRating}
                user={rev.ratinguser}
                usericon={rev.user}
              />
            ))}
          </article>
        </div>
      </section>
    </main>
  );
};

export default Home;
