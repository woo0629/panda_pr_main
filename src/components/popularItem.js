import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "react-loading-skeleton/dist/skeleton.css"
import Skeleton from 'react-loading-skeleton';
import popular from '../data/popular'
import './popularItem.css'

const PopularProducts = () => {
    const navigate  = useNavigate();
    const [popularData, setPopularData] = useState(popular);
    const [loading, setLoading] = useState(true);

    const goToBookDetail = (id, bookData) => {
        navigate(`/category/novel/detail/${id}`, { state: { bookData } });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='popular-box'>
            {!loading && (
                <div className="popular-header">
                    <h4>인기 매물</h4>
                </div>
            )}
            {loading ? (
                popularData.map((_, i) => (
                    <div className="skeleton-item" key={i}>
                        <TabContentSkeleton />
                    </div>
                ))
            ) : (
                <div className="popular-container">
                    {popularData.map((a, i) => (
                        <div className="popular-card" key={i} onClick={() => goToBookDetail(a.id, a)}>
                            <TabContent popularData={popularData[i]} i={i} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function TabContentSkeleton() {
    return (
        <div className="skeleton-container">
            <h3 className="skeleton-title"><Skeleton duration={1} width={300} height={100} /></h3>
            <h3 className="skeleton-title"><Skeleton duration={1} width={300} height={20} /></h3>
            <p className="skeleton-text"><Skeleton  duration={1} width={80} height={15} /></p>
            <p className="skeleton-text-small"><Skeleton  duration={1} width={60} height={15} /></p>
        </div>
    )
}

function TabContent(props, i) {
    return (
        <div className='popular'>
            <img src={props.popularData.img} alt={props.popularData.title}/>
            <h3 className='popularCard-title'>{props.popularData.title}</h3>
            <p>{props.popularData.writer}</p>
            <p>{props.popularData.price}</p>
        </div>
    )
}

export default PopularProducts;
