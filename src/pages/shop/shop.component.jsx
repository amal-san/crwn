import React from 'react';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';
import { SHOP_DATA } from '../../data/shop.data'



const ShopPage = () => {

    const [collections , setCollections ] = React.useState(SHOP_DATA)

    return ( <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
    </div>
    )
}


export default ShopPage