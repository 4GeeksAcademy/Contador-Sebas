import React, { useEffect, useState } from "react";
import Contador from "./Contador";


//create your first component
const Home = () => {

	const [contador, setContador] = useState (0);
	const [contador1, setContador1] = useState (0);

	useEffect (() => {
		const tiempo = setInterval (() => {
			setContador((prev) => prev +1);
		}, 1000);
	
	    return () => clearInterval(tiempo);
    }, []);

	useEffect (() => {
		if (contador === 10) {
			setContador(0);
			setContador1((prev) => prev + 1);
		}
	}, [contador]);

	const contar = () => {
		if(contador < 9) {
			setContador ((prev) => prev + 1);
		} else {
			setContador(0);
			setContador1((prev) => prev + 1);
		}
	};

	return (
    <div>
      <Contador contador={contador} contador1={contador1} />
    </div>  
   
  );
};

	

export default Home;