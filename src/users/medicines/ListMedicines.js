import React from 'react';
import CoustomCard from '../components/Ui/CoustomCard';

function ListMedicines({ mdata }) {
    return (
        <>
            {
                mdata.map((v, i) => {



                    return (
                        <div div className='mmmm' >
                            <CoustomCard value={v} />
                        </div>
                    )

                })

            }

        </>
    );
}

export default ListMedicines;