import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';

function Medicines(props) {
    const [data , setData ] = useState([])
    const [filterData , setFilterData ] = useState([])

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('medicine'))
        if(localData){
            setData(localData)
        }
    } , []);

    const handleChange = (val) => {
        console.log(val);
        let localData = JSON.parse(localStorage.getItem('medicine'))

        let fData = localData.filter((v) => 
            v.mname.toLowerCase().includes(val.toLowerCase()) || 
            v.amount.toString().includes(val) ||
            v.exdate.toString().includes(val) ||
            v.pres.toLowerCase().includes(val.toLowerCase()) 
        )
        setFilterData(fData)

        console.log(fData);
    }
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Medicines</h2>
                    <p>
                        Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                        aliquam eget nibh eu euismod. Donec dapibus blandit quam
                        volutpat sollicitudin. Aenean ac turpis ante. Mauris velit
                        sapien, aliquet aliquet rhoncus quis, luctus at neque. Mauris
                        sit amet massa sed orci vehicula facilisis.
                    </p>
                </div>
            </div>
            <div className='container'>
            <div class="input-group" style={{ width: '600px', margin: ' 20px auto' }}>
                <input type="search" name='search'  class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                    onChange={(e) => handleChange(e.target.value)} />
                <button type="button" class="btn btn-outline-primary" >search</button>
            </div>
                    <div className='row gap-3'>
                        <ListMedicines mdata={filterData.length > 0 ? filterData :  data} />
                    </div>
            </div>
        </section>
    );
}

export default Medicines;