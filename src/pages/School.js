import {useState, useEffect} from "react";
import ScoreList from "../components/ScoreList";

export default function School(props){
let [school, setSchool] = useState([])

useEffect(() => {
    // sebuah fungsi yang digunakan ketika komponen ditampilkan, return dulu baru useEffet
    // inisisasi data array Score (pemberian nilai awal)
    let arrayScore = [
      { 
        id: 1,
        name: `Aira Johnson`,
        math: 80,
        english: 90,
        chemistry: 70,
      },
      {
        id: 2,
        name: `Scarlette Mahatam`,
        math: 40,
        english: 80,
        chemistry: 79,
      },
      {
        id: 3,
        name: `Michael Oka`,
        math: 50,
        english: 87,
        chemistry: 60,
      },
      {
        id: 4,
        name: `Mama Zila`,
        math: 70,
        english: 78,
        chemistry: 80,
      },
      {
        id: 5,
        name: `Esa Adila`,
        math: 50,
        english: 80,
        chemistry: 56,
      },
    ];
    setSchool(arrayScore);
  }, []);

  let hitung = (math, english, chemistry) =>{
        let hasil = (math+english+chemistry)/3;
        return hasil
  }

  let status = (rataRata) =>{
      if(rataRata >= 75){
          return (
            <h6>
              <span className="badge rounded-pill bg-success">Lulus</span>
            </h6>
          )
      }else if(rataRata <= 74){
        return (
          <h6>
            <span className="badge rounded-pill bg-danger">Tidak Lulus</span>
          </h6>
        )
      }
  }
    return(
        <div>
          {/* <h1 style={{fontFamily:`poppins`}} className="align-center">List Score of XIR4</h1> */}
          {school.map(item => (
                <ScoreList
                key={`key-${item.id}`}
                id={item.id} 
                name={item.name}
                math={item.math}
                english={item.english}
                chemistry={item.chemistry}
                rata={hitung(item.math, item.english, item.chemistry)}
                status={status(hitung(item.math, item.english, item.chemistry))}
                />
            ))}
        </div>
    )
}