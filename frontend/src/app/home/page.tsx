'use client'
import ConnectButton from '@/components/ConnectButton';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
import { useAccountEffect } from 'wagmi';

function Page() {
    const data = [
        { id: '11111', circuitId: '1223123', numOfResponses: 1 },
        { id: '11112', circuitId: '1223124', numOfResponses: 2 },
        { id: '11113', circuitId: '1223125', numOfResponses: 3 },
        { id: '11114', circuitId: '1223126', numOfResponses: 4 },];
    const [connected, setConnected] = React.useState(true)
    useAccountEffect({
            onDisconnect() {
              console.log('Disconnected!')
              setConnected(false)
            },
          })
          useEffect(() => {
            if(!connected)
           redirect('/')
          }, [connected]) 
  return (
    <div className="h-full overflow-hidden">
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row justify-center items-center gap-4 over">


            <div className='flex w-4/5 justify-between'>
                <div>
                    <h1 className='text-3xl p-2 b-2'>Your Surveys</h1>
                </div>
                <div>
                <ConnectButton/>
                </div>
                <div>
                    <Link   href='/createsurvey'>
                    <button className='bg-slate-700 text-xl p-2 rounded-md hover:bg-slate-600'>Create a new survey</button>
                    </Link>
                </div>
            </div>
            {data.map((item, index) => (
                <div key={index} className='w-4/5 bg-slate-700 rounded-md p-3 flex justify-between'>
                    <div>
                    <h2 className='text-xl'>Id : <span className='text-white'>{item.id}</span></h2>
                    <h2 className='text-xl'>Circuit Id : <span className='text-white'>{item.circuitId}</span></h2>
                    <h2 className='text-xl'>Number of responses : <span className='text-white'>{item.numOfResponses}</span></h2>
                    </div>
                    <div>
                    <Link href={`/viewform/${item.id}`}>
                        <button className='bg-slate-900 text-xl p-2 rounded-md mt-6'>View Responses</button>
                    </Link>
                    </div>
                </div>
                ))}
            
        </div>
    </div>

  )
}

export default Page
