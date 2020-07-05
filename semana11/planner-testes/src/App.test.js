import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";
import axios from 'axios'
import userEvent from '@testing-library/user-event'

test('verifica se o input de adicionar tarefa está na tela', ()=>{
	const { getByPlaceholderText}= render(<App/>)
    const input=getByPlaceholderText('Digite uma tarefa')
	expect(input).toBeInTheDocument()
})

test('verifica se o botão adicionar tarefa está na tela', ()=>{
	const { getByText}= render(<App/>)
    const button=getByText(/ADICIONAR/i)
	expect(button).toBeInTheDocument()
})

test('vefica se as tarefas estão sendo criadas e renderizadas', async () =>{
	const utils= render(<App />)
	const input=utils.getByPlaceholderText('Digite uma tarefa')
	userEvent.type(input, "teste")
	expect(input).toHaveValue("teste")

	const button=utils.getByText(/ADICIONAR/i)
	userEvent.click(button)
	const tarefa= utils.getByText("teste")
	await expect(tarefa).toBeInTheDocument()
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