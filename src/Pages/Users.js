import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

function Users() {

    const { isLoading, data } = useQuery('users-list', () => {
        return axios.get('https://reqres.in/api/users')
    })

    return (
        <>
            <main className="py-10">
                <div className="text-center">
                    {
                        isLoading ? <h2 className="text-4xl font-bold">Loading...</h2> : (
                            <>
                                <h1 className="text-4xl font-bold mb-10">Users List</h1>
                                <div className="flex items-center justify-center flex-wrap">
                                    {
                                        data?.data.data.map((user) => {
                                            return (
                                                <div key={user?.id} className="mx-4 mb-8">
                                                    <p>
                                                        <strong>{user?.first_name}</strong>
                                                    </p>
                                                    <p>{user?.email}</p>
                                                    <img className="inline-block max-w-full mt-4" key={user?.avatar} src={user?.avatar} />
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

export default Users
