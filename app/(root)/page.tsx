import HeaderBox from '@/components/header-box';
import TotalBalanceBox from '@/components/total-balance-box';
import React from 'react';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type={'greeting'}
            title="Welcome"
            user={'ahlem'}
            subtext={'Access and manage your account efficiently'}
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1288.9}
          />
        </header>
      </div>
    </section>
  );
}

export default Home;
