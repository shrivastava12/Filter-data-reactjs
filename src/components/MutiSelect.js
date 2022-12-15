import React, { useEffect, useState } from 'react'

export default function MutiSelect() {

    const [item,setItem] = useState([
        {
            name:'I have a bike',
            value:1,
            isChecked:false
        },
        {
            name:' I have a car',
            value:2,
            isChecked:true
        },
        {
            name:'I have a boat',
            value:3,
            isChecked:false
        }
    ]
)

    const [checkedValue,setCheckedValue] =  useState({ids:[], active:true});
    useEffect(() => {
        const arr = {ids: [], active:true};
        for(let i=0;i<item.length;i++){
            if(item[i].isChecked){
                arr.ids.push(item[i].value);
            }
        }
        setCheckedValue(arr);
        console.log(checkedValue,'val')
    },[item]);

    const handleOnCheck =  (id,isCheck) => {
        console.log(id)
        setItem((prevData) => {
            return prevData.map((ele) => {
                if(ele.value === id){
                    ele.isChecked = !isCheck
                }
                return ele;
            })
        })
    }


  return (
       <>
            {
                item.map((it) => (
                    <>
                    <input type="checkbox" checked={it.isChecked} onChange={e => handleOnCheck(e.target.value,it.isChecked)} id="vehicle1" name="vehicle1" value={it.value}/>
                     <label for="vehicle1">{it.name}</label><br/>
                    </>
                ))
            }
        
        </>
  )
};
