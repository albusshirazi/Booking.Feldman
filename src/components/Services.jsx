import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking , FaShuttleVan,FaBeer} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                path: "Classes",
                title: "מרחבי לימוד",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaHiking/>,
                path: "Sports",
                title: "מרחבי ספורט",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
            {
                icon:<FaShuttleVan/>,
                path: "Rooms",
                title: "חדרי מגורים",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },           
        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="המתקנים" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <Link className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index} 
                        to={"/book/" + item.path}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </Link>
                      )
                   })}
                </div>
            </div>
        )
    }
}