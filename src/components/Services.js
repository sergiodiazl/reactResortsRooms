import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer}from 'react-icons/fa';
import Title from './Title';
class Services extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail/>,
                title:'Free cocktails',
                info:'Some demo text'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free shuttle',
                info:'Some demo text'
            },
            {
                icon:<FaHiking/>,
                title:'Hiking trails',
                info:'Some demo text'
            },
            {
                icon:<FaBeer/>,
                title:'Free Beer',
                info:'Some demo text'
            },
        ]
    }
    render() {
        return (
            <section className='services'>
              <Title title ='Services'/>
<div className ='services-center'>
    {this.state.Services.map((item,index)=>{
        return (
            <article key={index} className ='service'
            >
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
        )
    })}
    </div>                
            </section>
        );
    }
}

export default Services;

