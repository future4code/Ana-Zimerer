import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import axios from 'axios'
import userEvent from '@testing-library/user-event'


test('verifica se as tarefas estão sendo encontradas e renderizadas na tela', () =>{
    axios.get=jest.fn().mockResolvedValue({
      data: [
        {
          "day": 'terça' ,
          "texto": "tarefa teste",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        } 
      ]
	})	
	const utils= render(<App/>)
	const task=utils.getByText('tarefa teste')
	expect(task).toBeInTheDocument()		
	expect(axios.get).toHaveBeenCalled()
})

test('Verifica se uma nova tarefa é criada corretamente', async () => {
	const baseUrl="https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-anapaula"
	axios.get = jest.fn().mockResolvedValue({
		data: [{
			day: "segunda",
			texto: "tarefa teste",
		  }]
	  })

	axios.post = jest.fn().mockResolvedValue()
	const { getByPlaceholderText, getByText }= render(<App/>)
	const input=getByPlaceholderText('Digite uma tarefa')
	await userEvent.type(input, 'tarefa teste')
	expect(input).toHaveValue('tarefa teste')
	const button = getByText(/ADICIONAR/i)
	userEvent.click(button)	
	expect(axios.post).toHaveBeenCalledWith(baseUrl, {
	  day: 'segunda',
	  texto: 'tarefa teste',
    })
	await wait(() => expect(axios.get).toHaveBeenCalledTimes(2))
    await wait(() => expect(input).toHaveValue(''))
})	