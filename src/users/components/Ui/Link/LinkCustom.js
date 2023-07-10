import React from "react";
import { LinkT } from "./Link.style";

function LinkCustom({to , children , text}) {
    return (
        <LinkT to={to}  className="nav-link scrollto active" text={text} />
        
    )
}

export default LinkCustom;
