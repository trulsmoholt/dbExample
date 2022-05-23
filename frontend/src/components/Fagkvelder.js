import React from 'react';
import Card from './UI/Card';
import Fagkveld from './Fagkveld';
function Fagkvelder(props){
    const hasNoFagkvelder = !props.fagkvelder || props.fagkvelder.length === 0;
    console.log(props.fagkvelder)
    return(
        <section id='fagkvelder'>
           <Card>
               {hasNoFagkvelder&& <h2>Ingen fagkvelder, legg til noen!</h2>}
               <ul>
                
               {props.fagkvelder.map((fagkveld)=>(
                    <Fagkveld
                        key = {fagkveld.id} 
                        id = {fagkveld.id} 
                        tittel = {fagkveld.tittel} 
                        tema = {fagkveld.tema} 
                        onDelete = {props.onDelete}>
                    </Fagkveld>))}
               </ul>
            </Card>
             
        </section>
    )
}
export default Fagkvelder