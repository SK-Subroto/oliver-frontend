import Layout from '@/components/Layouts/Layout';
import Schedule from '@/components/Schedule';
import React from 'react';

import { useTable, useSortBy } from 'react-table'

const standing = () => {
    const data = React.useMemo(
        () => [
            {
                rk: 1,
                team: 'SAMSUNG',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 2,
                team: 'HANWHA',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 3,
                team: 'LOTTE',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 4,
                team: 'KT',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 5,
                team: 'KIA',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 6,
                team: 'KIWOOM',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 7,
                team: 'LG',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 8,
                team: 'NC',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 9,
                team: 'DOOSAN',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
            {
                rk: 10,
                team: 'SSG',
                games: 5,
                w: 2,
                l: 0,
                d: 3,
                pct: 1.000,
                gb: 0.0,
                streak: 'W2',
                home: '1-0-2',
                away: '1-0-1'
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'RK',
                accessor: 'rk', // accessor is the "key" in the data
            },
            {
                Header: 'TEAM',
                accessor: 'team',
            },
            {
                Header: 'GAMES',
                accessor: 'games',
            },
            {
                Header: 'W',
                accessor: 'w',
            },
            {
                Header: 'L',
                accessor: 'l',
            },
            {
                Header: 'D',
                accessor: 'd',
            },
            {
                Header: 'PCT',
                accessor: 'pct',
            },
            {
                Header: 'GB',
                accessor: 'gb',
            },
            {
                Header: 'STREAK',
                accessor: 'streak',
            },
            {
                Header: 'HOME',
                accessor: 'home',
            },
            {
                Header: 'AWAY',
                accessor: 'away',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)

    return (
        <div>
            <section className='mt-12'>
                <Schedule />
            </section>

            <section className='mt-20'>
                <div className='max-w-2xl mx-auto h-[90px] text-primaryText text-sm oliver_shadow flex justify-between items-center rounded-xl px-4'>
                    <button className='px-6 py-2 rounded-full  bg-[#acd7eb]'>
                        PREV
                    </button>
                    <p className='text-base'>26/03/2023</p>
                    <button className='px-6 py-2 rounded-full  bg-[#acd7eb]'>
                        NEXT
                    </button>
                </div>

                {/* data table */}
                <div className='max-w-6xl mx-auto mt-12 p-2 oliver_shadow rounded'>
                    <table {...getTableProps()} style={{ width: '100%', border: 'solid 1px #dee2e6', fontSize: '14px' }}>
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            style={{
                                                border: 'solid 2px #dee2e6',
                                                background: '#e9fafc',
                                                color: '#484848',
                                                fontWeight: 'bold',
                                                textAlign: 'start',
                                                padding: '6px'
                                            }}
                                        >
                                            {column.render('Header')}
                                            {/* Add a sort direction indicator */}
                                            <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                        ? ' 🔽'
                                                        : ' 🔼'
                                                    : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td
                                                    {...cell.getCellProps()}
                                                    style={{
                                                        padding: '10px',
                                                        border: 'solid 1px #dee2e6',
                                                        background: 'white',
                                                        padding: '6px'
                                                    }}
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default standing;

standing.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    );
};