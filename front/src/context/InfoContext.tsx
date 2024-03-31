import {createContext} from 'react'
import { oneTicketTypes } from '../TypescriptTypes/TicketTypes';

type contextTicket ={
   ticketID:null | string;
   getOneTicket:any;
   ticket:oneTicketTypes | undefined

}

 const InfoContext = createContext<contextTicket>({
    ticketID:null,
    getOneTicket:null,
    ticket:undefined
 })

 export default InfoContext;