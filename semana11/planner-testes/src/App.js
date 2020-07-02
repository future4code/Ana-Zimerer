import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {
	const baseUrl="https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-anapaula"
	const [tasks, setTasks]=useState([])
	const [countAddTask, setCountAddTask]=useState()
	const [inputNewTask, setInputNewTask]=useState()
	const [selectDayOfWeek, setSelectDayOfWeek]=useState()
	const [form, setForm]=useState({
			task:"",
			day:""
		})
	
	let ordenateList={
		monday: [],
		tuesday: [],
		wednesday: [],
		thursday: [],
		friday: [],
		saturday: [],
		sunday:[] 	
	}

	useEffect(()=>{		
		axios.get(baseUrl).then((response)=>{
			setTasks(response.data)
			alert('buscou')
			setForm({task:'', day: ''})
		}).catch(()=>{
			alert('não buscou as tasks')
		})
		
	}, [countAddTask])
	
 	const onClickCreateTask = ()=>{
		setCountAddTask(countAddTask+1)
		const body={
			text: form.task,
			day: form.day
		 }
		axios.post(baseUrl, body).then(()=>{
			alert('task criada')
		}).catch(()=>{
			alert('task não criada')
		})
	}	 

	const handleInputs=(event)=>{
		const {name, value}= event.target
		setForm({...form, [name]:value});
		console.log(form.day)
	}

	tasks.forEach((task)=>{
		switch (task.day){			
			case "monday":
				ordenateList.monday.push(task.text)
				break;
			case "tuesday":
				ordenateList.tuesday.push(task.text)
				break;
			case "quarta":
				ordenateList.wednesday.push(task.text)
				break;
			case "thursday":
				ordenateList.thursday.push(task.text)
				break;
			case "friday":
				ordenateList.friday.push(task.text)
				break;
			case "saturday":
				ordenateList.saturday.push(task.text)
				break;
			case "sunday":
				ordenateList.sunday.push(task.text)
				break;
		}
	 })
 
  	return (
  	  <div className="App">		
  	      <div className="header">
				<input 
					id="inputNewTask" 
					name="task"
					type="text" 
					value={form.task} 
					placeholder="Digite uma tarefa" 
					onChange={handleInputs}
				/>
				<select value={form.day} name="day" onChange={handleInputs}>
  	              <option value="monday" selected>Segunda-feira</option> 
  	              <option value="tuesday">Terça-feira</option>
  	              <option value="wednesday">Quarta-feira</option>
  	              <option value="thursday">Quinta-feira</option>
  	              <option value="friday">Sexta-feira</option>
  	              <option value="saturday">Sabado</option>
  	              <option value="sunday">Domingo</option>
  	          </select> 
  	          <button onClick={onClickCreateTask}>ADICIONAR</button>
  	      </div>

  	  	<section className= "container-dias-da-semana">
  	  	    <div>
				Segunda
				{ordenateList.monday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	    <div>
				Terça
				{ordenateList.tuesday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	    <div>
				Quarta
				{ordenateList.wednesday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	    <div>
				Quinta
				{ordenateList.thursday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	    <div>
				Sexta
				{ordenateList.friday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	    <div>
				Sábado
				{ordenateList.saturday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	    <div>
				Domingo
				{ordenateList.sunday.map((task)=>{
					return <p>{task}</p>})}
			</div>
  	  	</section>
  	  </div>
  	);
}

export default App;
