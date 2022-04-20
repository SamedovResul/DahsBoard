import React,{useState} from 'react';


const CalculateFunc = (Data) => {
  // const [sum, setSum] = useState(0)
  const { individual } = Data

  // let sum.
  const Array = [
    {
      key:"Siqaret"
    },
    {
      key:"Telefon"
    },
    {
      key:"Yuxulamaq"
    },
    {
      key:"Sürət Limiti"
    }
  ]


  let result = []

  
  Data.map((subject,indIndex) =>{
    const {array} = subject

    array.map((arr, index) =>{
      if(10 <= arr){
        result.push(Array[index])
      }
    })
    Data[indIndex].result = result
    result = []
  })
  
  const totalResult = []
  
  const smokeResult = Data.reduce((total, currentValue) => total = total + currentValue.array[0],0);
  const phoneResult = Data.reduce((total, currentValue) => total = total + currentValue.array[1],0);
  const sleepResult = Data.reduce((total, currentValue) => total = total + currentValue.array[2],0);
  const maskResul = Data.reduce((total, currentValue) => total = total + currentValue.array[3],0);

  

  const TotalSmoke = smokeResult / Data.length
  const TotalPhone = phoneResult / Data.length
  const TotalSleep = sleepResult / Data.length
  const TotalMask = maskResul / Data.length
  // console.log(TotalSmoke)


  
  return{
    TotalSmoke,
    TotalPhone,
    TotalSleep,
    TotalMask
  }
};

export default CalculateFunc;
