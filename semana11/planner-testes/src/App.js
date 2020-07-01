import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {
	const baseUrl="https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-anapaula"
	const [tasks, setTasks]=useState([])
	const [countAddTask, setCountAddTask]=useState()
	const [ordanateList, setOrdanateList]=useState({
		monday: [],
		tuesday: [],
		wednesday: [],
		thursday: [],
		friday: [],
		saturday: [],
		sunday:[] 	
	})
	useEffect(()=>{
		axios.get(baseUrl).then((response)=>{
			setTasks(response.data)
			console.log(tasks)
		}).catch(()=>{
			alert('não buscou as tasks')
		})
	}, [])

 	const onClickCreateTask = ()=>{
		setCountAddTask(countAddTask+1)
		const body={
			text: "lanche da tarde",
			day:"quarta"
		 }
		axios.post(baseUrl, body).then((response)=>{
			alert('task criada')
		}).catch(()=>{
			alert('task não criada')
		})
	 }	 
	 tasks.forEach((task)=>{
		switch (task.day){
			case "quarta":
			ordanateList.wednesday.push(task.text)
		}
	 })
	 console.log({tasks})

  	return (
  	  <div className="App">		
  	      <div className="header">
  	          <input id="inputNovaTarefa" type="text" value="" placeholder="Digite uma tarefa"/>
  	          <select name="select">
  	              <option value="segunda" selected>Segunda-feira</option> 
  	              <option value="terça">Terça-feira</option>
  	              <option value="quarta">Quarta-feira</option>
  	              <option value="quinta">Quinta-feira</option>
  	              <option value="sexta">Sexta-feira</option>
  	              <option value="sabado">Sabado</option>
  	              <option value="domingo">Domingo</option>
  	          </select> 
  	          <button onClick={onClickCreateTask}>ADICIONAR</button>
  	      </div>

  	  	<section className= "container-dias-da-semana">
  	  	    <div >Segunda			
				</div>

  	  	    <div >Terça</div>
  	  	    <div >Quarta</div>
  	  	    <div >Quinta</div>
  	  	    <div >Sexta</div>
  	  	    <div >Sábado</div>
  	  	    <div >Domingo</div>
  	  	</section>
  	  </div>
  	);
}

export default App;
