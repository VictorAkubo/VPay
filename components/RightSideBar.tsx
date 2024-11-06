import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback } from 'react'
import BankCard from './BankCard'
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions'
import { countTransactionCategories } from '@/lib/utils'
import Category from './Category'

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
    const categories: CategoryCount[] = countTransactionCategories(transactions)

    return (
        <aside className='right-sidebar'>
            <section className='flex flex-col mb-[100px] '>
                <div className="profile-banner">
                    <div className="profile ">
                        <div className="profile-img ">
                            <span className='text-5xl font-bold text-blue-500'>{user.firstName[0]} </span>
                        </div>
                        <div className="profile-details mt-20">
                            <h1 className='profile-name'>{user.firstName} {user.lastName}</h1>
                            <p className='profile-email'>
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className='banks'>
                <div className="flex justify-between w-full">
                    <h2 className='header-2'>My Banks</h2>
                    <Link href="/" className='flex gap-2'>
                        <Image
                            src="/icons/plus.svg"
                            width={20}
                            height={20}
                            alt="plus"
                        />
                        <h2 className='text-14 font-semibold text-gray-600' onClick={() => open}>
                            Add Bank
                        </h2>
                    </Link>
                </div>
                {banks?.length > 0 && (
                    <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                        <div className="relative z-10">
                            <BankCard
                                key={banks[0].$id}
                                account={banks[0]}
                                userName={`${user.firstName} ${user.lastName}`}
                                showBalance={false} />
                        </div>
                        {banks[1] && (
                            <div className='absolute right-0 top-8 z-0 w-[90%]'>
                                <BankCard
                                    key={banks[1].$id}
                                    account={banks[1]}
                                    userName={`${user.firstName} ${user.lastName}`}
                                    showBalance={false}
                                />

                            </div>
                        )}
                    </div>
                )}
                <div className='mt-10 flex flex-col flex-1'>
                    <h2 className="header-2">
                        Top categories
                    </h2>
                    <div className="space-y-5">
                        {categories.map((category, index) => (
                            <Category key={category.name} category={category} />
                        ))}
                    </div>
                </div>
            </section>
        </aside>
    )
}

export default RightSideBar