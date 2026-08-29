import { useEffect, useState } from "react"
import Prayer from "./component/Prayer"


function App() {

  const[pt,setPt]=useState({})
  const[dt,setDt]=useState("")
  const[city,setCity]=useState("Cairo")

 const cities=[
  {name:"القاهرة",value:"Cairo"},
  {name:"الإسكندرية",value:"Alexandria"},
  {name:"الجيزة",value:"Giza"},
  {name:"المنصورة",value:"Mansoura"},
  {name:"أسوان",value:"Aswan"},
  {name:"الأقصر",value:"Luxor"},
 ]
 
  useEffect(()=>{
    const fpt=async()=>{
      const response=await fetch(`https://api.aladhan.com/v1/timingsByCity/29-08-2026?city=Eg&country=${city}`)
      const dp=await response.json()
      setPt(dp.data.timings)
      setDt(dp.data.date.gregorian.date)
    }
    fpt()
  
    },[city]

  )




  return (
    <section>
      <div className="container">
        <div className="top-sec">
          <div className="city">
            <h3>المدينة</h3>

            <select name="" id="" onChange={(e)=>setCity(e.target.value)}>
              {cities.map((city)=>(
                <option key={city.value} value={city.value}>{city.name}</option>
              ))}
            </select>
          </div>
          <div className="date">
            <h3>التاريخ</h3>
            <h4>{dt}</h4>
          </div>
        </div>
        <Prayer name="الفجر" time={pt.Fajr}/>
        <Prayer name="الظهر" time={pt.Dhuhr}/>
        <Prayer name="العصر" time={pt.Asr}/>
        <Prayer name="المغرب" time={pt.Maghrib}/>
        <Prayer name="العشاء" time={pt.Isha}/>
        
      </div>
    </section>

  )
}

export default App
