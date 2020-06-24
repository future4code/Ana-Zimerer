import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <Link to={"/trips/list"}>
                <button>Me candidatar a uma viagem!</button>
            </Link>
            <Link to={"/login"}>
                <button>Acesso Administrativo!</button>
            </Link>
        </div>
    )
}