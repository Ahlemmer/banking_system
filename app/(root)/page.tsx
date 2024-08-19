import HeaderBox from '@/components/header-box';
import RightSidebar from '@/components/right-side-bar';
import TotalBalanceBox from '@/components/total-balance-box';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react';

async function Home() {
  const LoggedIn=await getLoggedInUser()
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
             type={'greeting'}
             title="Welcome"
             user={LoggedIn?.name}
             subtext={'Access and manage your account efficiently'}
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1288.9}
          />
        </header>

     
      </div>
      <RightSidebar
        banks={[]}
        transactions={[]}
        user={LoggedIn}
      />
    
    </section>
  );
}

export default Home;
