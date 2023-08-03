import { useContext } from "react";
import { CounterContext } from "./CounterContext";


export default function Dislpay() {
    const {count} = useContext(CounterContext)
    return <sapn> Count : {count} </sapn>
}