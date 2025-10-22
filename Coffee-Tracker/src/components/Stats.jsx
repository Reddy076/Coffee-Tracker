import { calculateCurrentCaffeineLevel , coffeeConsumptionHistory , statusLevels } from "../utils"

function StatCard({lg,title,children}) { 

  return(
    <div className={'card stats-card' + (lg ? ' col-span-2' : '')}>
      <h4>
        {title}
      </h4>
      {children}
    </div>
  )
}



export default function Stats() {
  const stats={
    daily_caffeine: 240,
    daily_cost: 6.8,
    average_caffeine: 2.3,
    total_cost: 220
  }


  const caffeineLevel=calculateCurrentCaffeineLevel(coffeeConsumptionHistory)

  const warningLevel=caffeineLevel < statusLevels['low'].maxLevel ?
  'low' : 
  caffeineLevel < statusLevels['moderate'].maxLevel ?
  'moderate' : 'high'

  return (
    <>
    <div className='section-header'>
      <i className="fa-solid fa-chart-simple" />
      <h2>Stats</h2>
    </div>
    <div className="stats-grid">
        <StatCard lg title='Active Caffeine level'>
          <div className="status">
            <p><span className="stat-text">{ caffeineLevel}</span>mg</p>
            <h5 style={{color:statusLevels[warningLevel].color, background:statusLevels[warningLevel].background}}>Low</h5>
          </div>
          <p>{statusLevels[warningLevel].description}</p>
        </StatCard>
        <StatCard title='Daily Caffeine'>
          <p><span className="stat-text">{stats.daily_caffeine}</span>mg</p>
        </StatCard>
        <StatCard title='Average # of Coffees'>
          <p><span className="stat-text">{stats.average_caffeine}</span>mg</p>
        </StatCard>
        <StatCard title = 'Daily Cost ($)'>
          <p>$ <span className="stat-text">{stats.daily_cost}</span></p>
        </StatCard>
        <StatCard title = 'Total Cost ($)'>
          <p>$ <span className="stat-text">{stats.total_cost}</span></p>
        </StatCard>
    </div>
    </>
  )
}
