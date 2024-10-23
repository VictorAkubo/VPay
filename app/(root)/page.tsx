import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
const Home = () => {
  const logedin = { firstName: "Victor" ,lastName:"Akubo",email:"Victorugbede89@gmail.com"}
  return (
    <div className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={logedin?.firstName || "Guest"}
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
      <RightSideBar user={logedin} transactions={[]} banks={[{currentBalance:125.6},{currentBalance:3455.8}]} />
    </div>
  )
}

export default Home