import React, { useEffect, useState } from 'react';
import incognito from './Images/incognito.png';
import smoked from './Images/Smoked.png';
import mist from './Images/Mistlogo.png';
import under from './Images/undersmoked.png'


const Signup=()=>{
   const [Num,setNum]=useState(0);
 const[vals,setVal]=useState({
     name:"",
     learner:"",
     reg:"",
     college:"",
     username:"",
     contact:"",
     password:"",
 })

   const nextClick=()=>{
        setNum(1);
        console.log(vals)
    }
    
    const prevClick=()=>{
        setNum(0);
        console.log(vals)    
    }

    useEffect(()=>{},[Num])
    

    return(

     <section className="position-absolute h-100 w-100" style={{backgroundColor:"black",overflowY:"scroll"}}>
    
        

        <div className="container py-1 position-relative d-flex">

                <div className="row d-flex w-100">
                    <div className="col-2">
                    <img src={incognito} alt="" className="incognito img-fluid py-4" />

                    </div>
                    <div className="col-2 offset-8">
                    <img src={mist} alt="" className="mist position-relative img-fluid py-3" />
                        
                    </div>
                </div>
       


        </div>


        <div className="row">
            <div className="col">

                <img src={smoked} alt="" className="smoked position-relative" style={{width:"25%",top:"0%",left:"40%"}}/>

            </div>
        </div>

        <div className="row">
            <div className="col">
                <img src={under} alt="" className="under position-relative" style={{width:"15%",height:"75%",left:"55%"}} />
                
            </div>
        </div>

        <Manage click1={nextClick} click2={prevClick} vals={vals} valset={setVal} state={Num}/>

        <h1 className="end text-white py-3 text-center">You can only smoke for</h1>


 
       
            
    </section>

    )
}

const Manage=({state,click1,click2,vals,valset})=>{
    switch(state)
    {
        case 0: 
        return(
            <Forms1 click={click1} vals={vals} valset={valset}/>
        )
        case 1:
            return(
                <Forms2 clicks2={click2} vals={vals} valset={valset} />
            )

    }
}





const Forms1=({click,vals,valset})=>{
    

    const stateUpdate=(input)=>(e)=>{
        valset(prevState=>{
            return{...prevState,[input]:e.target.value}
        });
       
    }

    return(
    <div className="form position-relative d-flex py-1 justify-content-center">

        <form class="py-4 px-5 text-white" style={{backgroundColor:"#251D1D",borderRadius:"10px",width:"30%",opacity:"90%"}}>
            <h1 className="head text-white text-center">Sign<b className="bold" style={{color:"#7027CE"}}>Up</b></h1>

            <div class="form-group ">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" onChange={stateUpdate("name")} placeholder={vals.name}/>
            </div>

            <div class="form-group">
                <label for="learner">Learner Id/Email Id</label>
                <input type="text" class="form-control" id="learner" onChange={stateUpdate("learner")} placeholder={vals.learner}/>
            </div>

            <div class="form-group">
                <label for="reg">Reg no</label>
                <input type="text" class="form-control" id="reg" onChange={stateUpdate("reg")} placeholder={vals.reg}/>
            </div>

            <div class="form-group">
                <label for="college">College</label>
                <input type="college" class="form-control" id="college" onChange={stateUpdate("college")} placeholder={vals.college}/>
            </div>
          
            <div type="submit" style={{backgroundColor:"#7027CE"}} onClick={click} class="btn float-end text-white">Next</div>

         </form>

        </div>
    )
      
}


const Forms2=({vals,clicks2,valset})=>{

    const stateUpdate=(input)=>(e)=>{
        valset(prevState=>{
            return{...prevState,[input]:e.target.value}
        });
       
    }

  
    return(

    <div className="form position-relative d-flex py-1 justify-content-center">

        <form class="py-4 px-5  text-white" style={{backgroundColor:"#251D1D",borderRadius:"10px",width:"30%" ,opacity:"90%"}}>

            <h1 className="head text-white text-center">Sign<b className="bold" style={{color:"#7027CE"}}>Up</b></h1>

            <div class="form-group ">
                <label >User name</label>
                <input type="text" class="form-control" id="username" onChange={stateUpdate("username")} placeholder={vals.username}/>
            </div>

            <div class="form-group">
                <label >Contact Number</label>
                <input type="text" class="form-control" id="contact" onChange={stateUpdate("contact")} placeholder={vals.contact}/>
            </div>

            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" id="password" onChange={stateUpdate("password")}/>
            </div>

            <div class="form-group">
                <label > Confirm Password</label>
                <input type="password" class="form-control"/>
            </div>

            <div type="submit" style={{backgroundColor:"#7027CE"}} onClick={clicks2} class="btn text-white">Previous</div>
          
            <div type="submit" style={{backgroundColor:"#7027CE"}} class="btn float-end text-white">Signup</div>

         </form>

        </div>
    )
      
}


export default Signup;