import Skeleton from 'react-loading-skeleton';
import Category from './category';
import "react-loading-skeleton/dist/skeleton.css"
import './tabBar.css';


function TabBar() {

    
    
    

    return (
        <div>
        
        <Category/>
            
        
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


export default TabBar;