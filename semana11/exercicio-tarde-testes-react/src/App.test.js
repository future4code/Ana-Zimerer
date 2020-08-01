import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { getByText, queryBy} from "@testing-library/react";

test("Ao clickar no botão adicionar é esperado: um novo post na lista, se é possível curti-lo e apagá-lo", () =>{
    //algo foi digitado no botão?
    const { getByPlaceholderText, getByText, queryByText }= render(<App />)
    const inputNewPost= getByPlaceholderText(/Novo Post/i)
    fireEvent.change(inputNewPost, {
        target: {
          value: 'post teste'
        }
      })
    //o botão está funcionando?
    const addButton= getByText(/Adicionar/i)    
    fireEvent.click(addButton)

    //verifica se o post aparece na tela
    expect(getByText('post teste')).toBeInTheDocument()
    //verifica se existe o botão curtir
    expect(getByText(/Curtir/i)).toBeInTheDocument()
    
    const LikeButton= getByText(/Curtir/i)
    fireEvent.click(LikeButton)
    //verifica se depois de clickado, o nome muda pra descurtir
    expect(getByText(/Descurtir/i)).toBeInTheDocument()

    const DeleteButton = getByText(/Apagar/i)
    fireEvent.click(DeleteButton)
    //verifica se é possível excluir o post
    expect(queryByText('post teste')).toBeNull()
})

test('verifica se o input de add posts é limpo quando é criado um novo post ', ()=>{
	const utils = render(<App />)
	//adiconando post
	const inputNewPost= utils.getByPlaceholderText(/Novo Post/i)
	fireEvent.change(inputNewPost, {
        target: {
          value: 'post teste'
        }
	  })
	const addButton= utils.getByText(/Adicionar/i) 
	fireEvent.click(addButton)
	expect(inputNewPost).toHaveValue('')
})

test('verifica se aparece a mensagem "nenhum post" quando há 0 posts', ()=>{
	const utils = render(<App />)
	const messageNoPosts= utils.getAllByText(/Nenhum post/i)
	expect(messageNoPosts).toBeInTheDocument()
})