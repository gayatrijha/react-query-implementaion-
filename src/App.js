import "./App.css";
import React from "react";
import { useState ,useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Two from "./components/Two";
import One from "./components/One";
import Three from "./components/Three";
import {
  QueryClientProvider,
  QueryClient,
  useQueryClient,useQuery,
  useMutation
} from "react-query";





const App = () => {

  const navigate = useNavigate();

  const navigateToOne = () => {
    navigate("/one");
  };
  const navigateToTwo = () => {
    navigate("/two");
  };
  const navigateToThree = () => {
    navigate("/three");
  };

  const navigateHome = () => {
    navigate("/");
  };
  const [countryArr, setCountry] = useState([]);

  const updateCountry = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    let data = fetch(url);
    let parsedData = await (await data).json();
    setCountry(parsedData);
    // console.log(parsedData)

  };
  useEffect(() => {
    updateCountry();
  }, []);


  // const {data} = useQuery("country", updateCountry);
  // const updateCountry = async () => {
  //   const response = await fetch(`https://restcountries.com/v3.1/all`);
  //     return response.json()
  // };

  const queryClient = new QueryClient();

  return (
    <div>
      <div className="container">
        <h2 onClick={navigateHome} className="heading text-center">
          Compare the number of country you want to compare
          
        </h2>
        <div className="text-center btncontainer">
          <button className="button btn btn-dark" onClick={navigateToOne}>
            1
          </button>
          <button className="button btn btn-dark" onClick={navigateToTwo}>
            2
          </button>
          <button className="button btn btn-dark" onClick={navigateToThree}>
            3
          </button>
        </div>


       
          
          <QueryClientProvider client={queryClient}>
            <Routes>
                <Route
                  path="/one"
                  element={<One 
                    // countryArr={countryArr} setCountry={setCountry}  key={Date.now()}
                    />}
                />
                {/* <Route
                  path="/two"
                  element={<Two countryArr={countryArr} setCountry={setCountry} key={Date.now()}/>}
                /> */}
                <Route
                
                  path="/three"
                 
                  element={<Three  countryArr={countryArr} setCountry={setCountry}/>}
                />
                {/* <TestBox /> */}

            </Routes>
          </QueryClientProvider>
     
        
     
      </div>
    </div>
  );
  
};

function TestBox () {
  const queryClient = useQueryClient()

  // const fetchCountry = async ()=>{
  //   const response = await fetch (`https://restcountries.com/v3.1/all`);
  //   return response.json()
  // }
 
   // Queries
  //  const { data, status, ...query } = useQuery('todos', fetchCountry)

  //  if (status === 'loading') {
  //   return <div>he ha ha</div>
  //  }
  // const mutation = useMutation({
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries('todos')
  //   },
  // })

  // console.log('query ', query );
  // console.log('mutation ', mutation );
  // return (
  //   <div>
  //     {data.length}
  //     this is test box.
  //     {data && data.map((d) => {
  //       console.log(d);
  //       return <div key={d.cca2}>{d.cca2}</div>
  //     })}
  //   </div>
  // )
}

export default App;
