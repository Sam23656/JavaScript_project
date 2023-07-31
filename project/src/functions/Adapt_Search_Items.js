
function Adapt_Search_Items(Items, flag){
    const Adapt_Items = []
    if (flag == 1){
        for (let i=0; i<10; i++){
            Adapt_Items.push({
                uri:Items[i].data.uri,
                name:Items[i].data.name,
                image:Items[i].data.albumOfTrack.coverArt.sources[2].url
            })
    }
    }else if (flag == 2){
        for (let i=0; i<10; i++){
            Adapt_Items.push({
                uri:Items[i].data.uri,
                name:Items[i].data.name,
                image:Items[i].data.coverArt.sources[2].url
            })
    }
    }else if (flag == 3){
        for (let i=0; i<10; i++){
            Adapt_Items.push({
                uri:Items[i].data.uri,
                name:Items[i].data.profile.name,
                image: (Items[i].data.visuals.avatarImage != null) ? Items[i].data.visuals.avatarImage.sources[2].url: "null"
            })
        }
    }else if (flag == 4){
            for (let i=0; i<10; i++){
                Adapt_Items.push({
                    uri:Items[i].data.uri,
                    name:Items[i].data.name,
                    image: (Items[i].data.images.items.lenght > 1) ? Items[i].data.images.items.sources[2].url : "null"
            })
        }
    }
    return Adapt_Items

}

export default Adapt_Search_Items