import React from "react";
import check1 from "./client/check1";
import check2 from "./client/check2";
import logo from "./client/mist";
import smoked from "./client/smoked";
import pic2 from "./client/pic2";

const entry_html = () => {
  return (
    <div className="wrapper">


      <div className="container-fluid">


        <div className="box1 row pt-1 ">
          <div className="img1 col-lg-2 col-md-2 col-sm-3">

            <img src={check1} className="img-fluid " alt="" />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-7"></div>

          <div className="abc col-lg-1 col-md-1 col-sm-2  ">
            <img src={pic2} className="img-fluid" alt="" />
          </div>
        </div>








        <div className="space"></div>










        <div className="box2 row justify-content-center">


          <div className="col-lg-9  offset-lg-5 col-md-8  offset-md-3 offset-sm-3    ">
            <img src={smoked} className="img-fluid" alt="..." />

          </div>

        </div>





        <div className="box2 row justify-content-center">


          <div className="col-lg-5 offset-lg-1 col-md-6 offset-md-1 col-sm-8 align-self-center ">

            <h1 className="display-6">Get ready to be <span style="color: blue">Smoked</span></h1>

          </div>

        </div>



        <div className="box2 row justify-content-center">


          <div className="col-lg-5 offset-lg-3  col-md-5 offset-md-3 align-self-center ">


            <button type="button"
              className="btn ps-5 pe-5 btn-primary  offset-sm-4 offset-lg-0   rounded-pill btn-lg">Start</button>
          </div>
        </div>






        <div className="space"></div>



        <div className="row row justify-content-center">


          <div className="col-lg-5 offset-lg-4  col-md-5 offset-md-4 col-sm-5  align-self-center">

            <h6 className="display-6">You can Smoke in</h6>


          </div>
          <div className="col-lg-2 col-md-2 col-sm-1 ">
            <button type="button" className="btn btn-secondary rounded-pill btn-lg"> <span className="material-icons">&#xE87C;</span>
              Join server </button>           <button type="button" className="btn btn-secondary rounded-pill btn-lg "><span
                className="material-icons">&#xE87C; </span></button>

          </div>
        </div>




        <div className="row row justify-content-center">

          <div className="col-lg-8 col-md-7 offset-sm-3  align-self-center">

            <h6 className="display-6"><span style="color: blue">06</span>Days:<span style="color: blue">90</span>Hours:<span
              style="color: blue">72</span>Minutes:<span style="color: blue">06</span>Seconds</h6>



          </div>



        </div>
      </div>






    </div >

  );
}

export default entry_html;