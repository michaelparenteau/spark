import React, { Component } from 'react';

function negArray(arr) {
  return Proxy.create({
    set: function (proxy, index, value) {
        index = parseInt(index);
        return index < 0 ? (arr[arr.length + index] = value) : (arr[index] = value);
    },
    get: function (proxy, index) {
        index = parseInt(index);
        return index < 0 ? arr[arr.length + index] : arr[index];
    }
  });
}


class PhotoGallery extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var row = [];
        this.props.photos.forEach(function(photo, i) {
            row.push(<img src={photo} width={300}/> )
        })

        return(
            <div>
                {row[(this.props.currentId % row.length + row.length) % row.length]}
            </div>
        )
    }
}

class PhotoGalleryContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { currentId: 0}
    }
    handleNext() {
        this.setState({currentId: this.state.currentId + 1})
    }
    handlePrev() {
        this.setState({currentId: this.state.currentId - 1})
    }
    render() {
        return(
        <div className="sample-container">
                <div className="sample-component">
                <h1>Photo Gallery</h1>
                <button onClick={this.handlePrev.bind(this)} >Previous</button>
                <PhotoGallery currentId={this.state.currentId} photos={["https://c2.staticflickr.com/6/5061/5654683066_6703251656.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg","https://upload.wikimedia.org/wikipedia/commons/a/a1/Lions_Family_Portrait_Masai_Mara.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f6/Snarling_lion.jpg"]} />
                <button onClick={this.handleNext.bind(this)}>Next</button>
        </div>
</div>
        )
    }
}


export default PhotoGalleryContainer;
