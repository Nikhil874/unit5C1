import { useState } from "react";


export function Inventory(){
    const initialbooks=13;
    const initialpens=10;
    const initialnotebooks=44;
    const initialinkpens=78
    const [books,setBooks]=useState(initialbooks);
function handlebooks(value){
    setBooks(books+value>0 ?books+value : 0 );
    if(books+value>=0){
        setTotal(total+value >0 ? total+value :0);
    }
  
}
const [pens,setPens]=useState(initialpens);
function handlepens(value){
    setPens(pens+value>0 ?pens+value : 0 );
    if(pens+value>=0){
   
        setTotal(total+value >0 ? total+value :0);
    }
    
}

const [notebooks,setNotebooks]=useState(initialnotebooks);

function handlenotebooks(value){
    setNotebooks(notebooks+value>0 ? notebooks+value : 0);
    if(notebooks+value>=0){
        setTotal(total+value >0 ? total+value :0);
    }
  
}

const [inkpens,setInkpens]=useState(initialinkpens);

function handleinkpens(value){
    setInkpens(inkpens+value>0 ? inkpens+value :0);
    if(inkpens+value>=0){
        setTotal(total+value >0 ? total+value :0);
    }
   
}

const[total,setTotal]=useState(books+pens+notebooks+inkpens);
    
    
    return (
   
        <>
        <div className="items">
            <span>Books:</span>
            <button className="addBook" onClick={()=>{handlebooks(1)}}>ADD Book</button>
            <button className="remBook"  onClick={()=>{handlebooks(-1)}}>Remove Book</button>
            <span className="totalBooks">{books}</span>
            </div>

            <div className="items">
                <span>Pens:</span>
                <button className="addPen" onClick={()=>{handlepens(1)}}>Add Pen</button>
                <button className="remPen"  onClick={()=>{handlepens(-1)}}>Remove Pen</button>
                <span className="totalPens">{pens}</span>
                </div>

                <div className="items">
                    <span>Notebooks:</span>
                    <button className="addNotebook" onClick={()=>{handlenotebooks(1)}}>Add Notebook</button>
                    <button className="remNotebook"  onClick={()=>{handlenotebooks(-1)}}>Remove Notebook</button>
                    <span className="totalNotebooks">{notebooks}</span>
                    </div>

                <div className="items">
                    <span>InkPens:</span>
                    <button className="addInkpen" onClick={()=>{handleinkpens(1)}}>Add Inkpen</button>
                    <button className="remInkpen" onClick={()=>{handleinkpens(-1)}}>Remove Inkpen</button>
                    <span className="totalInkpens">{inkpens}</span>
                    </div> 

                    <div className="total">{total}</div>   
        </>
    )
}