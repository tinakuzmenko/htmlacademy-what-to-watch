import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const videoData = {
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
};

describe(`VideoPlayer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(<VideoPlayer
        muted
        isPlaying={false}
        source={videoData.preview}
        poster={videoData.poster}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
