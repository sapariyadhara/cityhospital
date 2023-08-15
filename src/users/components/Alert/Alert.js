import { enqueueSnackbar, useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetAlert } from '../../../redux/slice/alertSlice';

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
   
    useEffect(() => {
        if(alert.text !== ''){
            enqueueSnackbar(alert.text,
                 { autoHideDuration: 4000 ,
                    variant : alert.color ,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                      }
                 } )
        }

    const timer =  setTimeout(() => {
            dispatch(resetAlert())
        } , 2000)
       
        return () => {
            clearTimeout(timer)
        }

    } , [alert.text])
    console.log(alert);
    return (
        <div>
            
        </div>
    );
}

export default Alert;