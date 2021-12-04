import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

function Resources() {

    const { isLoading, data } = useQuery('resources-list', () => {
        return axios.get('https://reqres.in/api/unknown')
    })

    return (
        <>
            <main className="py-10">
                <div className="text-center">
                    {
                        isLoading ? <h2 className="text-4xl font-bold">Loading...</h2> : (
                            <>
                                <h1 className="text-4xl font-bold mb-10">Resources List</h1>
                                <div className="flex items-center justify-center flex-wrap">
                                    {
                                        data?.data.data.map((resource) => {
                                            return (
                                                <div key={resource?.id} className="mx-4 mb-8">
                                                    <p className="pb-3">
                                                        <span className="px-2 py-1 rounded-md text-white font-semibold text-sm uppercase" style={{ background: `${resource.color}` }}>{resource?.name}</span>
                                                    </p>
                                                    <p>{resource?.year}</p>
                                                    <p>{resource.pantone_value}</p>
                                                </div>
                                            );
                                        })}
                                </div>
                            </>
                        )
                    }
                </div>
            </main>
        </>
    )
}

export default Resources
