require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageDatas=require('../data/imageDatas.json');
imageDatas = function getImageURL(imageDatasArr){
	for (var i = imageDatasArr.length - 1; i >= 0; i--) {
		imageDatasArr[i].imageURL=require('../images/'+imageDatasArr[i].filename);
	}
	return imageDatasArr;
}.bind(imageDatas);
class AppComponent extends React.Component {
  render() {
    return (

      <section className="stage index">
      	<section className="img-sec">
      	</section>
      	<nav className="controller-nav">
      	</nav>
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.jx</code> to get started!</div>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
