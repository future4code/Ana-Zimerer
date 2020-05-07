const limpaFormulario=()=>{
    inputValorCadastrar.value=""
    inputDescricaoCadastrar.value=""  
    selectTipoDeDespesa.indexSelected=[0]
}

const despesa =[{valor:5, tipo:"casa", descricao:"jjj"},
    {valor:7,tipo:"tijolo",descricao:"jj000000j"}
];

const novaDespesa= despesa.map((informacoes,index,array)=>{
    return array[index]
       
})

const mostraDespesa=()=>{
    console.log(novaDespesa)
}

