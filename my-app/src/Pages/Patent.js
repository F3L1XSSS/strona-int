import React, { Component } from "react";

import patent from "../Assets/patent.jpg"


export default class Patent extends Component{
    render(){
        return(
            <>
            <div class="page-title">
            <div className="text-center" >
                <h3>Patent nr 213906</h3>
                <h5>Przedmiotem wynalazku jest opryskiwacz sadowniczy mający zastosowanie do wykonywania operacji oprysku w sadach i na plantacjach krzewów</h5>
                <img src={patent} alt="patent"/>
            </div>
            </div>

        </>
        )
    }
}