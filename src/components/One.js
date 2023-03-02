// import Axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useQuery } from "react-query"



const One = (props) => {
  const [countryArr, setCountry] = useState([]);
  const [flag1, setFlag1] = useState();
  const [offical1, setOffical1] = useState();
  const [population1, setPopulation1] = useState();
  const [capital, setCapital] = useState();

  const fetchCountry = async ()=>{
    const response = await fetch (`https://restcountries.com/v3.1/all`);
    return response.json();
  }

  const {data,status, isLoading} = useQuery("country", fetchCountry);
  
  useEffect(() => {
    if(status=== "success"){
      setCountry(data);
      console.log(countryArr)
    } 
    return () => {}
  }, [data]);


          // setCountry(allCountry)

        // if(status=== "success"){
        //   setCountry(allCountry);
        // }else{
        //   return <h1>Loading...</h1>
        // }

        
  //  console.log(countryArr)
  // let { countryArr } = props;


  let  inputElement = data && data.map((d) => (
    <option key={Math.random()} value={d.name.common} textcontent={d.name.common}>
      {d.name.common}
    </option>
    // setCountry(inputElement)
  ));
  // console.log(inputElement)


  let countryData;
  const handleChange = (event) => {
    let selectedValue = event.target.value;
    // console.log(selectedValue, countryArr);
    countryData = countryArr.find((country) => selectedValue === country.name.common
    );
    console.log(selectedValue, countryData);
    console.log(data)
    setFlag1(countryData.flags.png);
    setOffical1(countryData.name.official);
    setPopulation1(countryData.population);
    setCapital(countryData.capital);
  };

  // const inputElement = data.map((d) => (
  //   <option value={d.name.common} textcontent={d.name.common}>
  //     {d.name.common}
  //   </option>
  // ));


  return (
    <div>
      <h1>first</h1>
           {/* { data && data.map((d)=>{
            return <h1>{d.name.common}</h1>
           })} */}

        {/* <> */}

        
        { <div className="contanierdrop text-center">
          <form className="text-center">
            <div className="row ">
              <div className="col-lg-12">
                <div style={{ width: "80%", marginLeft: "70px" }}>
                  <input
                    placeholder="Select country"
                    list="firstCountry"
                    className="input"
                    id="c1"
                    onChange={handleChange}
                    name="c1"
                  />
                  <datalist id="firstCountry">{inputElement}</datalist>
                </div>

                <div className="containerdetail text-center">
                  <p>{offical1}</p>
                  <img src={flag1} alt="" className="flagimage" />
                  {population1 && (
                    <p className="population">Total Population : {population1}</p>
                  )}
                  {capital && <p>Capital : {capital} </p>}
                </div>
              </div>
            </div>
          </form>
        </div> }
        
        {/* </> */}

    </div>

  

      
    )

                  }


export default One;
