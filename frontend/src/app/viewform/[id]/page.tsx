'use client'
import ConnectButton from '@/components/ConnectButton';
import React, { useEffect } from 'react'

function  Page({ params }: { params: { id: string } }) {
    const [formid, setFormid] = React.useState('')
    const rating = 3;
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        console.log("wok");
            setFormid(params.id as string);
            setLoading(false);
          
      }, [params.id]);
  return (
    <div className="h-full overflow-hidden">
    <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center gap-4 over">


        <div className='flex w-4/5 justify-between'>
            <div>
                <h1 className='text-3xl p-2 b-2'>Your Ratings</h1>
            </div>
            <div>
            <ConnectButton/>
            </div>
        </div>
                <div className='w-4/5 bg-slate-700 rounded-md p-3 flex justify-between'>
                    <div>
                    <div className='flex gap-2'>
                      <h2 className='text-xl'><span className='text-white'>1</span></h2>
                      <h2 className='text-xl'>
                        Rating :
                        <span className='text-white'>
                          {[...Array(rating)].map((_, index) => (
                            <span key={index} className='star'>&#9733;</span>
                          ))}
                        </span>
                      </h2>
                    </div>
                    <h2 className='text-xl'>Comment : <span className='text-white'>a</span></h2>
                    </div>
                    <div>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Page
