import { Component } from 'react';

const SelectedImage = ({ img }) => {
  return <div>Selected sticker img: {img}</div>;
};

export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
};

  handleSelect = stickerImg => {
    this.setState({ selectedSticker: stickerImg });
  };

  render() {
    return (
      <>
        <h1>Example 3</h1>
        <SelectedImage img={this.state.selectedSticker} />
        <StickerList
          stickers={stickers}
          onSelect={this.handleSelect}
          selectedSticker={this.state.selectedSticker}
        />
      </>
    );
  }
}
