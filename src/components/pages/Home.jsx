// src/components/pages/Home.jsx
import React, { useContext } from 'react';
import { DataContext } from '../hooks';
import OrderAnalytics from '../resuables/orderanalytics/OrderAnalytics';
import Chart from '../charts';
import RecentOrders from '../recentOrders';
import Profits from '../profits';
import Categories from '../resuables/categories/Categories';

const Home = () => {
  const { apidata } = useContext(DataContext);
  const { catdata } = useContext(DataContext);

  return (
    <main className="text-level-1-text p-5">
      <h1>Dashboard</h1>
       <section className=' flex gap-5 '>
        <aside className=' w-8/12 '>
            <article className='flex gap-5 mb-5 '>
               {
                apidata.map((oa)=>(
                    <OrderAnalytics
                     Oaicon={oa.ayicon}
                     oatitle={oa.aytitle}
                     oascore={oa.ayscore}
                     oastatus={oa.aystatus}
                     oachange={oa.aychange}
                     />
                ))
               }
            </article>
            <article className='mb-5 bg-primaryclr'>
                <Chart/>
            </article>
            <article>
                <RecentOrders/>
            </article>
        </aside>
        <aside className=' w-4/12'>
          <article>
            <Profits/>
          </article>
          <article>
            {
              catdata.map((cat)=>(
                <Categories CatIcon={cat.categoryIcon} catTitle={cat.categoryTitle} />
              ))
            }
          </article>
        </aside>
       </section>
    </main>
  );
};

export default Home;
