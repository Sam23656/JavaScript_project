
function Adapt_Search_Items(Items, flag){
    const Adapt_Items = []
    if (flag == 1){
        for (let i=0; i<10; i++){
            if (Items[i] != undefined){
            Adapt_Items.push({
                class: "Треки",
                uri:Items[i].data.uri.replace("spotify:track:", ""),
                name:Items[i].data.name,
                image:Items[i].data.albumOfTrack.coverArt.sources[2].url
            })
        }
    }
    }else if (flag == 2){
        for (let i=0; i<10; i++){
            if (Items[i] != undefined){
            Adapt_Items.push({
                class: "Альбомы",
                uri:Items[i].data.uri.replace("spotify:album:", ""),
                name:Items[i].data.name,
                image:Items[i].data.coverArt.sources[2].url
            })
        }
    }
    }else if (flag == 3){
        for (let i=0; i<10; i++){
            if (Items[i] != undefined){
            Adapt_Items.push({
                class: "Артисты",
                uri:Items[i].data.uri.replace("spotify:artist:", ""),
                name:Items[i].data.profile.name,
                image: (Items[i].data.visuals.avatarImage != null) ? Items[i].data.visuals.avatarImage.sources[2].url: "null"
            })
        }
        }
    }else if (flag == 4){
            for (let i=0; i<10; i++){
                if (Items[i] != undefined ){
                Adapt_Items.push({
                    class: "Плейлисты",
                    uri:Items[i].data.uri.replace("spotify:playlist:", ""),
                    name:Items[i].data.name,
                    image: (Items[i].data.images.items[0].sources.lenght != 0) ? Items[i].data.images.items[0].sources[0].url : "null"
            })
        }
        }
    }
    return Adapt_Items

}

export default Adapt_Search_Items