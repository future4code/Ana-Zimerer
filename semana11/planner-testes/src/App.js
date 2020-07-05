import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'

const ContainerDay=styled.div`
	border: 1px solid black;
	height: 100%;
	width: 100%;
	background-color: pink;
`
function App() {
	const baseUrl="https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-anapaula"
	const [tasks, setTasks]=useState([])
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
		renderAllTasks();		
	}, [])

	const renderAllTasks = ()=>{
		axios.get(baseUrl).then((response)=>{
			setTasks(response.data)
			setForm({task:'', day: ''})
		}).catch(()=>{
			alert('As tarefas não foram renderizadas corretamente')
		})
	}
	
 	const onClickCreateTask = ()=>{
		const body={
			text: form.task,
			day: form.day
		 }
		axios.post(baseUrl, body).then(()=>{
			renderAllTasks();
		}).catch(()=>{
			alert('A tarefa não foi criada')
		})
		
	}	 

	const handleInputs=(event)=>{
		const {name, value}= event.target
		setForm({...form, [name]:value});
	}

	const onClickDeleteTasks=(id)=>{		
		axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-anapaula/${id}`).then(()=>{
			alert('Tarefa excluida')
			renderAllTasks();
		}).catch(()=>{
			alert('não deletou')
		})
	}

	tasks.forEach((task)=>{
		switch (task.day){			
			case "monday":
				ordenateList.monday.push({text: task.text, id: task.id})
				break;
			case "tuesday":
				ordenateList.tuesday.push({text: task.text, id: task.id})
				break;
			case "quarta":
				ordenateList.wednesday.push({text: task.text, id: task.id})
				break;
			case "thursday":
				ordenateList.thursday.push({text: task.text, id: task.id})
				break;
			case "friday":
				ordenateList.friday.push({text: task.text, id: task.id})
				break;
			case "saturday":
				ordenateList.saturday.push({text: task.text, id: task.id})
				break;
			case "sunday":
				ordenateList.sunday.push({text: task.text, id: task.id})
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
			<ContainerDay>
				Segunda
				{ordenateList.monday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
			<ContainerDay>
				Terça
				{ordenateList.tuesday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
			<ContainerDay>
				Quarta
				{ordenateList.wednesday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
			<ContainerDay>
				Quinta
				{ordenateList.thursday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
			<ContainerDay>
				Sexta
				{ordenateList.friday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
			<ContainerDay>
				Sábado
				{ordenateList.saturday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
			<ContainerDay>
				Domingo
				{ordenateList.sunday.map((task)=>{
					return <p>{task.text} <button onClick={() => {onClickDeleteTasks(task.id)}}>X</button></p>})}
			</ContainerDay>
  	  	</section>
		</div>
  	);
}

export default App;
