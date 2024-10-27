import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
const Home = async () => {
  const LoggedIn = await getLoggedInUser()
  return (
    <div className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.name || "Guest"}
            subtext="Access and manage your accounts and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.23}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSideBar user={LoggedIn} transactions={[]} banks={[{ currentBalance: 125.6 }, { currentBalance: 3455.8 }]} />
    </div>
  )
}

export default Home