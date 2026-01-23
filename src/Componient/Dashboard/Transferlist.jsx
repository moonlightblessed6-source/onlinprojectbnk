import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import {Transferlis} from './Transferlist'


const Transferlist = () => {

    return(
        <Transferlis>
                                <div className="header" onClick={() => window.location.href = '/profile'}>
              <FaArrowLeft/>
                        <p>Contact Us</p>
                    </div>
        <div className="mains">

<div >
  <p>Wire Transfer</p>
</div>
<div>
  <p>Local Bank Transfer</p>
</div>

        </div>
        </Transferlis>
    )
}



export default Transferlist